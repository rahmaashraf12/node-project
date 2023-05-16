import multer from "multer";
import { GridFSBucket, MongoClient } from "mongodb";
import db from "../database/MongoDBconnection.js";
import files_model from "../database/models/files_model.js";

// insert dynamic id
import { ObjectId } from "bson";
const newId = new ObjectId();
const storage = multer.diskStorage({
destination : function(req,file,cb){
    // cb ==> call back function
return cb(null,'./uploads')
}
,
filename:function(req,file,cb){
const name= file.originalname;
return cb(null,`${file.originalname}`)

},
}) ;


export const upload =multer({ storage });

let fileName ;
let filePath;

export const fileUpload = async (req, res) => {
    console.log(req.body)
    const{doctor_id,course_code}=req.body;

    console.log(req.file);
    fileName=req.file.originalname
    filePath=req.file.path;
    //console.log(fileName,filePath)
    try {
        await files_model.create({
        file_name:fileName,
        course_code:course_code,
        doctor_id:doctor_id,
        file_path:filePath
    });  
res.send("<h1> files added sucessfully</h1>")
} catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred, go and check your uploaded files" });
}
};
// import in app.js