import {NextFunction, Request, Response} from "express";
import {User} from "../models/user.model";
import {check, validationResult} from "express-validator";
import {JWT} from "../config/jwt.config";
import {IGETJwtInfoRequest} from "../middlewares/auth";

export const signup = async (req: Request, res: Response) => {
    try {
        await check("email", "Email is not valid").isEmail().run(req);
        validationResult(req).throw();
        const existed_user = await User.findOne({email: req.body.email})
        if(existed_user) {
            return res.status(400).json({errors: 'Email Existed'});
        }
        const user = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            phone: req.body.phone,
            gender: req.body.gender,
            reg_date: new Date(),
            date_of_birth: req.body.date_of_birth,
            area: req.body.area,
            role: req.body.role,
            member_rankpoints: req.body.member_rankpoints,
        });
        await user.save();
        const jwt = new JWT(user.email, user._id);
        const token = jwt.generate(60 * 60 * 24);
        res.cookie("token", token, {
            httpOnly: true,
            signed: true,
        })
        return res.status(200).json({success: 1, errors:null})
    }catch(err) {
        return res.status(400).json({success:0, ...err})
    }
}

export const login = async (req: Request, res: Response) => {
    try{
        await check("email", "Email is not valid").isEmail().run(req);
        validationResult(req).throw();
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(400).json({errors: "emmail not found"});
        }
        user.compareHash(req.body.password, "password", async(error, result) => {
            if(error || !result){
                return res.status(400).json({errors: "login failed"})
            }
            const jwt = new JWT(user.email, user._id);
            const access_token = jwt.generate(60 * 60);
            res.cookie("token", access_token, {
                httpOnly:true,
                signed: true,
            });
            res.status(200).json({
                success:1,
                error:null,
                token:access_token,
                expiresIn: 3600,
                userId: user._id,
                role: user.role,
            });
        })
    }catch(err){
        return res.status(400).json({success:0, ...err})
    }
}

export const changePassword = async (req: IGETJwtInfoRequest, res: Response) => {
    try {
        const old_password = req.body.old_password;
        const new_password = req.body.new_password;
        const jwt_payload = req.jwt_payload;
        const user = await User.findById(jwt_payload.id);
        if (!user) return res.status(404).json()
        await check("new_password", "New password must be at least 6 and maximum 24 characters long")
        .isLength({min: 6, max: 24})
        .run(req);
        const result = validationResult(req)
        console.log(result)
        user.compareHash(old_password, "password", async (error, result) => {
            if (error || !result) return res.status(400).json({success: 0, error: "wrong password"});
            if (old_password === new_password) return res.status(422).json({success: 0, error: "same old password use another"});
            user.password = new_password;
            await user.save();
            return res.status(200).json({success: 1, error: null})
        })

    } catch(error) {
        return res.status(400).json({success: 0, ...error})
    }
}