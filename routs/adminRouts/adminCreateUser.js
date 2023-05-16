import {Router} from "express";
import users_model from "../../database/models/users_model.js";


import db from "../../database/MongoDBconnection.js";
const router = new Router();

router.get("/",(req,res)=>{
    res.render("adminTemplates/adminHomePage",{layout : false});
   
})

router.get("/createUser",(req,res)=>{
    users_model.create({
        first_name: "samin",
        last_name: "atia",
        password: "100",
        user_type:"student"
    })
    res.send("200 OK")

})



export default router;