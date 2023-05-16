import { Schema ,model} from "mongoose";


const doctor = new Schema({
  doctor_name:{ 
    type: String,
    required:true
},
password:{ 
    type: String,
    required:true
},
doctor_id:{
    type:String,
    required:true,
    unique:true
},
courses_id:{ 
    type: [String],
    required:true
}
});


export default model("doctor",doctor);
