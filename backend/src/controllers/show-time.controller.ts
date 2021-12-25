import {ShowTime} from "./../models/show-time.model";
import {Movie} from "./../models/movie.model";
import {Request, Response} from "express";

export const createShowTime = async (req: Request, res: Response) => {
    console.log(req.body);
    
    try {
        const new_showTime = new ShowTime({
            movieName: req.body.movieName,
            siteName: req.body.siteName,
            showDate: req.body.showDate,
            startTime: req.body.startTime,
            price: req.body.price,
        })
        await new_showTime.save();
        await Movie.updateOne({movieName: req.body.movieName}, {showTime: new_showTime._id});
        return res.status(200).json({msg: "Thêm lịch chiếu thành công"});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: "Thêm lịch chiếu thất bại"})
    }
}