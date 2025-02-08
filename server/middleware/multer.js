import multer from "multer";

const storage = multer.memoryStorage();
const fileFilter = (req,file, cb)=>{
    if(file.mimetype ==="text/xml" || file.mimetype === "application/xml"){
        cb(null , true);
    }else {
        cb(new Error("Only XML file Allowed!"),false);
    }
}

const upload = multer({storage,fileFilter});

export default upload;