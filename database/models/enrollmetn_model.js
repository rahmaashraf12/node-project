import { Schema ,model} from "mongoose";

const enrollmentSchema = new Schema({
  student_name:{ 
    type: String,
    required:true
},
student_id:{
    type: String,
    required:true
},
course_id:{ 
    type: String,
    required:true
},
grade :{
    type: String,
    required: true
}

});


export default model("enrollments",enrollmentSchema);
