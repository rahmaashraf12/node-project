import { Schema ,model} from "mongoose";


const attendance = new Schema({
  course_id:{
    type :String,
    required:true
  },
  student_name:{
    type :[String],
    required:true
  }
});


export default model("attendance",attendance);
