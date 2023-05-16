import { Schema ,model} from "mongoose";

const courses_schama = new Schema({
  course_name:{ 
    type: String,
    required:true
},
course_code:{ 
    type: String,
    required:true,
    unique:true
},
department_id:{ 
    type: [String],
    required:true
},
requre_course:{
    type:[String],
    required:true
},
doctor_id:{
    type:String,
    required:true
}
});


export default model("courses",courses_schama);
