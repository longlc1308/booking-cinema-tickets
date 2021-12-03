import {NextFunction, Request, Response} from "express";
import {User} from "../models/user.model";
import {check, validationResult} from "express-validator";
import {JWT} from "../config/jwt.config";
import {IGETJwtInfoRequest} from "../middlewares/auth";
import jwt from "express-jwt";
import argon2 from "argon2";
const sgMail = require('@sendgrid/mail');
const API_key = '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';

sgMail.setApiKey(API_key);

export const signup = async (req: Request, res: Response) => {
    try {
        await check("email", "Email is not valid").isEmail().run(req);
        validationResult(req).throw();
        const existed_user = await User.findOne({email: req.body.email})
        if(existed_user) {
            return res.status(400).json({msg: 'Email đã tồn tại'});
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
        return res.status(200).json({msg: 'Đăng ký thành công'})
    } catch(err) {
        return res.status(400).json({msg: 'Đăng ký không thành công'})
    }
}

export const login = async (req: Request, res: Response) => {
    try{
        await check("email", "Email is not valid").isEmail().run(req);
        validationResult(req).throw();
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(400).json({msg: "Email không tồn tại"});
        }
        user.compareHash(req.body.password, "password", async(error, result) => {
            if(error || !result){
                return res.status(400).json({msg: "Mật khẩu không chính xác"})
            }
            const jwt = new JWT(user.email, user._id);
            const access_token = jwt.generate(60 * 60);
            res.cookie("token", access_token, {
                httpOnly:true,
                signed: true,
            });
            res.status(200).json({
                userName: user.name,
                success:1,
                error:null,
                token:access_token,
                expiresIn: 3600,
                userId: user._id,
                role: user.role,
                msg: 'Đăng nhập thành công',
            });
        })
    } catch(err){
        return res.status(400).json({msg: 'Đăng nhập không thành công'})
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

export const updateUserData = async (req: Request, res: Response) => {
    try {
        const new_user = {
            name: req.body.name,
            phone: req.body.phone,
            gender: req.body.gender,
            date_of_birth: req.body.date_of_birth,
            area: req.body.area,
        }
        const updatedResult = await User.findByIdAndUpdate({ _id: req.params.id }, new_user, { new: true});
        return res.status(200).json({msg: 'Cập nhật thành công'})
    } catch (error) {
        return res.status(400).json({msg: 'Cập nhật không thành công'})
    }
}


export const fetchUsers = (req: Request, res: Response) => {
    User.find().then((users) => {
        res.status(200).json({
            data: users
        })
    })
    .catch((error) => {
        return res.status(400).json({msg: 'Không lấy được dữ liệu'})
    })
}

export const fetchUserDetails = async (req: Request, res: Response) => {
        User.findById(req.params.id).then((user) => {
            res.status(200).json(user);
        },(error) => {
            return res.status(400).json({msg: 'Không lấy được dữ liệu'})
        })
}

export const forgotPassword = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(400).json({msg: 'Email không tồn tại'});
        }
        const username = user.name;
        const jwt = new JWT(user.email, user._id,'TOKEN_RESET_PASSWORD');
        const token = jwt.generate(60 * 20);
        const message = {
            to: req.body.email,
            from: {
                name: 'SUPPORT_TEAM',
                email: 'admlongluu@gmail.com',
            },
            subject: 'Đặt lại mật khẩu',
            text: 'Đặt lại mật khẩu',
            html: `<div style="background-color: rgba(149, 157, 165, 0.2); padding: 30px; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px">
            <p style="color: #141414; font-weight: 550; font-size: 18px;">Hi, ${username}</p>
            <p>Someone (hopefully you) has requested a password reset for your account. Follow the link below to set a new password:</p>
            <p>http://localhost:4200/reset-password/${token}</p>
            <p>If you don't wish to reset your password, disregard this email and no action will be taken.</p>
            <p>Thank you.</p>
            </div>`,
        }
        const result = await user.updateOne({reset_token: token});
        if(!result){
            return res.status(400).json({msg:'Gửi yêu cầu khôi phục mật khẩu thất bại'})
        }
        else{
            sgMail.send(message).then(()=> {
                return res.status(200).json({msg: 'Gửi yêu cầu thành công. Vui lòng kiểm tra email.'})
            })
        }
    } catch (error) {
        return res.status(400).json({msg:'Gửi yêu cầu khôi phục mật khẩu thất bại'});
    }
}


export const resetPassword = async (req: Request, res: Response) => {
    try {
        const new_password = req.body.new_password;
        const token = await req.params.token;
        if(token) {
            const jwt = new JWT(token,'TOKEN_RESET_PASSWORD');
            const reset_token = await jwt.verify();
            if(!reset_token) {
                return res.status(400).json({msg: 'Token reset failed'})
            }
            const new_info = {
                password: await argon2.hash(new_password),
                reset_token: '',
            }
            await User.updateOne({reset_token: token}, new_info)
            return res.status(200).json({msg: 'Đặt lại mật khẩu thành công'})
        }
    } catch (error) {
        return res.status(400).json({msg: 'Đặt lại mật khẩu không thành công'})
    }
}