import bcrypt from 'bcryptjs';
import doctor from "../database/models/doctor_model.js";
import db from "../database/MongoDBconnection.js";
import courses_model from"../database/models/courses_model.js";

const errorMessag="<h1 >May be the ID is wrong <h1>";


export const findCourses=async (req,res)=>{
    console.log(req.body);
    
    const doctor_id = req.body.doctor_id;
    //console.log(doctor_id);  // string

    const findID = await courses_model.findOne( {doctor_id} ).lean();

    const courses=await courses_model.find().lean();


    console.log(courses);
    if(!findID){
        return res.status(404).send(errorMessag);
    }
    else{
        
        res.render('../templates/doctorTemplates/doctorHomePage.handlebars', { courses }); 
    }


};
