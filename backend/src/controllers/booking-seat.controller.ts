import { Request, Response } from "express";
import { ShowTime } from '../models/show-time.model';
import { BookingSeat } from '../models/booking-seat.model';
import { User } from '../models/user.model';

export const create = async (req: Request, res: Response) => {
    const showTimeId = req.body.showTimeId;
    const userId = req.body.userId;
    const showTime = await ShowTime.findById(showTimeId);
    const user = await User.findById(userId);
    if (!showTime || !user) return res.status(400).json({msg : 'Không tồn tại suất chiếu này'})

    const bookingSeat = new BookingSeat({
        showTime: showTime,
        user: user,
        seats: req.body.seats
    })
    bookingSeat.save()
}