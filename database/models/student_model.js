import { Schema ,model} from "mongoose";


const student = new Schema({
  student_name:{ 
    type: String,
    required:true
},
password:{ 
    type: String,
    required:true
},
courses_id:{ 
    type: [String],
    required:true
}
});


export default model("student",student);
