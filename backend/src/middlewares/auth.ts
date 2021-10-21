import jwt from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";


export const cookieJwtAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    try{
        const data = jwt.verify(token, 'fuckingshit'); 
        next();
    }catch(err){
        return res.status(401).json({error: err})
    }
};

