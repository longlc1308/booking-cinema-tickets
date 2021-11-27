import mongoose from "mongoose";
const slug = require('mongoose-slug-generator');
const uniqueValidator = require('mongoose-unique-validator');

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
    slug: string;
}



const movieSchema = new mongoose.Schema<MovieDocument>({
    movieName: {type: String, required: true},
    idMovie: {type: Number, unique: true, required: true},
    director: String,
    actor: String,
    type: String,
    language: String,
    rated: Number,
    startAt: String,
    timeAmount: Number,
    trailer: String,
    imageURL: {type: String, required: true},
    slug: {type: String, slug: 'movieName', unique: true},
})

mongoose.plugin(slug, uniqueValidator);

export const Movie = mongoose.model<MovieDocument>("Movie", movieSchema, "movies");