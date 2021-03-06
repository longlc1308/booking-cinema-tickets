import express from "express";
import router from "./routers/index.route";
import bluebird from "bluebird";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import morgan from 'morgan';

class App {
    public express

    private _mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        autoIndex: false
    }
    private _mongooseUrl = 'mongodb+srv://adlongluuc:tdQ6StlagYIi5xCc@bookingcinema.4k75s.mongodb.net/cinema';
    private readonly _secretCookie = 'fuckingshit';
    constructor() {
        this.express = express();
        this._config();
        this._mongooseConect();
        this._loadRoutes();
    }

    private _mongooseConect() {
        mongoose.Promise = bluebird;

        mongoose.connect(this._mongooseUrl, this._mongooseOptions)
        .then(() => {
          console.log("Connecting to mongodb successfully");
        })
        .catch((err) => {
          console.log(
              `MongoDB connection error. Please make sure MongoDB is running. ${err}`
          );
        });

    }
    private _config() {
        this.express.use(express.json());
        this.express.use(cookieParser(this._secretCookie))
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(cors());
        this.express.use(morgan('tiny'));
        this.express.use("/images", express.static(path.join("src/images")));
    }    

    private _loadRoutes() {
        this.express.use('/api/v1.0', router);
    }
}

export default new App().express