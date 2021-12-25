import mongoose from "mongoose";

const bookingSeatSchema = new mongoose.Schema({
    showTime: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'ShowTime'},
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    seats: [
        {type: Number, required: true}
    ]
})

export const BookingSeat = mongoose.model('BookingSeat', bookingSeatSchema, 'bookingseats');