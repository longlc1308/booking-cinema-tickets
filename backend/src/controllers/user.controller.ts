import {NextFunction, Request, Response} from "express";
import {User} from "../models/user.model";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
    try {
        const existed_user = await User.findOne({email: req.body.email})
        if(existed_user) {
            return res.status(400).json({errors: 'Email Existed'});
        }

        const user = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            reg_date: new Date(),
            date_of_birth: new Date(),
            member_rankpoints: req.body.member_rankpoints,
            phone: req.body.phone,
        });
        await user.save();
        const token = jwt.sign({email:user.email},'fuckingshit',{
            expiresIn: '1h'
        })
        res.cookie("token", token, {
            httpOnly:true,
            signed: true,
        });
        return res.status(200).json({success: user})
    }catch(err) {
        return res.status(400).json({errors: err})
    }
}