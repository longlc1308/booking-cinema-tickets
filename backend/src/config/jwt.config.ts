import jwt from "jsonwebtoken";
import {JWTDecodedInfo, JWTPayload} from "../middlewares/auth";

export class JWT {
    private readonly _email: string;
    private readonly _id: string;
    private readonly _jwt_secrete = 'fuckingshit';
    private readonly _token: string;

    constructor(token: string);
    constructor(email: string, id: string);
    constructor(email: string, id: string,_token: string);
    constructor(...args: Array<string>) {
        if (args.length === 0) {
            throw new Error("JWT class arguments are not defined.")
        } else if (args.length === 1) {
            this._token = args[0]
        } else if (args.length === 2) {
            this._email = args[0];
            this._id = args[1]
        } else {
            this._email = args[0];
            this._id = args[1];
            this._token = args[2];
        }
    }



    public generate(expiresIn: number){
        return jwt.sign({email: this._email, id: this._id}, this._jwt_secrete, {
            expiresIn: expiresIn
        })
    }
    public verify(): JWTDecodedInfo {
        try {
            const payload = jwt.verify(this._token, this._jwt_secrete)
            return {
                success: 1,
                payload: payload as JWTPayload,
                error: null
            }
        } catch (error) {
            return {
                success: 0,
                error: error,
                payload: null
            }
        }
    }
}