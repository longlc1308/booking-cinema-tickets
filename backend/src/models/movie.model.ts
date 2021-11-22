import mongoose from "mongoose";

export type MovieDocument =  mongoose.Document & {
    movieName: string;
    idMovie: number;
    director: string;
    actor: string;
    type: string;
    language: string;
    rated: number;
    startAt: string;
    timeAmount: number;
    trailer: string;
    imageURL: string;
}



const movieSchema = new mongoose.Schema<MovieDocument>({
    movieName: {type: String, unique: true, required: true},
    idMovie: {type: Number, unique: true, required: true},
    director: String,
    actor: String,
    type: String,
    language: String,
    rated: Number,
    timeAmount: Number,
    trailer: String,
    imageURL: {type: String, required: true},

})

export const Movie = mongoose.model<MovieDocument>("Movie", movieSchema, "movies");