import { Schema ,model} from "mongoose";

const departmentSchema = new Schema({
  department_name:{ 
    type: String,
    required:true
},
department_code:{ 
    type: String,
    required:true,
    unique:true
}
});


export default model("departments",departmentSchema);
