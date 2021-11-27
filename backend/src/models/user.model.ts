import mongoose from "mongoose";
import argon2 from "argon2";
const uniqueValidator = require('mongoose-unique-validator');


export type UserDocument =  mongoose.Document & {
    email: string;
    password: string;
    name: string;
    phone: string;
    gender: string;
    reg_date: Date;
    date_of_birth: string;
    area: string;
    role: string;
    member_rankpoints: number;
    is_active: 0 | 1;

    comparePassword: comparePassword;
    compareHash: compareHash;
}

type comparePassword = (
    reqPassword: string, cb: (err:any, isMatch:boolean) => void
) => void;
type compareHash = (
    validateCode: string,
    newPassword: string,
    cb: (err:any, isMatch:boolean) => void
) => void;


 const userSchema = new mongoose.Schema<UserDocument>({
    email: {type: String, unique: true, required: true, lowercase: true},
    password: String,
    name: String,
    phone: String,
    gender: String,
    reg_date: Date,
    date_of_birth: String,
    area: String,
    role: String,
    member_rankpoints: {type: Number, default: 0},
    is_active: {type: Number, default: 0 }

})

userSchema.pre("save", async function (next) {
    const user = this as UserDocument;
    if(!user.isModified("password")) return next();
    try { 
        user.password = await argon2.hash(user.password);
        next();
    }catch(err: any) {
        return next(err);
    }
})

userSchema.methods.comparePassword = async function (reqPassword: string, cb) {
    try {
        const login_result = await argon2.verify(reqPassword, this.password);
        if(login_result){
            return cb(null, login_result);
        }
        else{
            return cb( new Error("Wrong password"), login_result);
        }
    }catch(err) {
        return cb(err, null);
    }
};

userSchema.methods.compareHash = async function (validateCode: string, newPassword: string, cb) {
    let _newPassword = this.password;
    try { 
        const verify_result = await argon2.verify(_newPassword, validateCode);
        if(verify_result) {
            return cb(null, verify_result);
        }else {
            return cb(new Error("Wrong Verify Code"), verify_result);
        }
    }catch(error) {
        return cb(error, null)
    }
}

mongoose.plugin(uniqueValidator)

export const User = mongoose.model<UserDocument>("User", userSchema, "users");