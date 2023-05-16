import {Router} from "express";
import db from "../../database/MongoDBconnection.js";
import filesModel from "../../database/models/files_model.js"
const router = new Router();

router.get("/",(req,res)=>{
    res.render("doctorTemplates/doctorUploadFile",{layout : false});   
})


// create file ==>doctorupload/createFiles
router.get("/createFiles",(req,res)=>{
    filesModel.create({
        file_name:"sheet-4.pdf",
        course_code:"it5",
        doctor_id:"120",
        file_path:"uploads/sheet-4.pdf"
    })
    res.send("file added")
});


export default router;