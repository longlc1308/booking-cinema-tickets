import { Request} from "express";
import multer, { StorageEngine, Multer, FileFilterCallback } from 'multer';
import unidecode from "unidecode";

type tMIME_TYPE_MAP =  {
    [key: string]: string
}


const MIME_TYPE_MAP : tMIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/svg+xml": "svg+xml",
  };

const fileValidator = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  
        if (
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/svg+xml"
          ){
            cb(null,true)
          }else {
            cb(null, false);
          }
            
}

const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
        error = null;
    }
    cb(error, 'src/images');
  },
  filename: (req, file, cb) => {
    const decodedName = unidecode(file.originalname);
    var name = decodedName.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + extension);
  },
});

export const upload =  multer({
    fileFilter: fileValidator,
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 20, // we are allowing only 10 MB per file
    },
}) as Multer