import { Schema ,model} from "mongoose";


const files= new Schema({
file_name:{
    type:String,
    required:true,
   unique:true,
},
course_code:{
    type:String,
    required:true,
},
doctor_id:{
    type:String,
    required:true,
},
file_path:{
    type:String,
    required:true,
    unique:true
}
    
});


export default model("files",files);
