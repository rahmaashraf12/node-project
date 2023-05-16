import { Schema ,model} from "mongoose";


const success = new Schema({
    student_id:{
        type :String,
        required:true
      },
    course_id:{
    type :[String],
    required:true
  }
  
});


export default model("success_courses",success);
