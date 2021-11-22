import { Movie } from "./../models/movie.model";
import express, {NextFunction, Request, Response} from "express";


export const createMovie = async (req: Request, res: Response) => {
    try {
        const movieExist = await Movie.findOne({idMovie: req.body.idMovie});
        if(movieExist) {
            return res.status(400).json({msg: 'Phim đã tồn tại'})
        }
        const movie = new Movie({
            movieName: req.body.movieName,
            idMovie: req.body.idMovie,
            director: req.body.director,
            actor: req.body.actor,
            type: req.body.type,
            language: req.body.language,
            rated: req.body.rated,
            startAt: req.body.startAt,
            timeAmount: req.body.timeAmount,
            trailer: req.body.trailer,
            imageURL: '/images/' + req.file.originalname,
        })
        await movie.save();
        return res.status(200).json({msg: 'Thêm phim mới thành công'})
    }
    catch (err) {
        return res.status(400).json({msg: 'Thêm mới không thành công'})
    }
}

export const deleteMovie = (req: Request, res: Response) => {
        Movie.deleteOne({ _id:req.params.id }).then((result) => {
            return res.status(200).json({msg: 'Xóa thành công'})
        })
        .catch((err) => {
            return res.status(400).json({msg: 'Xóa không thành công'})
        })
}

export const fetchMovie = async (req: Request, res: Response) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json({data: movies})
    }
    catch (err) {
        return res.status(400).json({msg: 'Không lấy được dữ liệu'})
    }
}