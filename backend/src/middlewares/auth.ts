import {JWT} from "../config/jwt.config";
import {NextFunction, Request, Response} from "express";


export const cookieJwtAuth = (req: IGETJwtInfoRequest, res: Response, next: NextFunction) => {
    const token = req.signedCookies.token;
    const jwt = new JWT(token);
    const data = jwt.verify();
    if (data.success === 0) {
        console.log(data)
        return res.status(401).json({success: 0, errors: data.error})
    } else {
        req.jwt_payload = data.payload
        next();
    }
};

export interface JWTPayload {
    email: string;
    id: string;
    iat: number;
}
export interface IGETJwtInfoRequest extends Request {
    jwt_payload: JWTPayload;
}

export interface JWTDecodedInfo {
    success: 0 | 1;
    error?: any;
    payload? : JWTPayload;
}
