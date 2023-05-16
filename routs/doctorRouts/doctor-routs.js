import {Router} from "express";
import db from "../../database/MongoDBconnection.js";
import doctorModel from "../../database/models/doctor_model.js"
import coursesModel from "../../database/models/courses_model.js"

import {findCourses} from "../../controllers/doctorCourse.js";
const router = new Router();

router.get("/",(req,res)=>{
    res.render("doctorTemplates/doctorHomePage",{layout : false});   
})

// create doctor in doctors model (/doctor/createdoctor)
router.get("/createdoctor",(req,res)=>{
    doctorModel.create({
        doctor_name: "salma",
        password: "300",
        doctor_id:"200330",
        courses_id: ["is196","cs127"],
    })
    res.send("add new Doctor")
    console.log("added");

})
// create courses 
router.get("/createcourse",(req,res)=>{
coursesModel.create(
 {
    course_name:"Network2",
    course_code:"it1",
    department_id:"IT",
    requre_course:"Network2",
    doctor_id:"120"
})
res.send("<h1>add course</h1>")
console.log("course added");
}) 

router.post('/',findCourses);


export default router;