import mongoose from "mongoose";


export type showTimeDocument =  mongoose.Document & {
    movieName: string;
    siteName: string;
    showDate: string;
    startTime: string;
    price: string;
}

const showTimeSchema = new mongoose.Schema<showTimeDocument>({
    movieName: {type: String},
    siteName: {type: String},
    showDate: String,
    startTime: String,
    price: String,
})

export const ShowTime = mongoose.model<showTimeDocument>("ShowTime", showTimeSchema, "showTimes");