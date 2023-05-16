import { Schema ,model} from "mongoose";

const material_schama = new Schema({
    material_name:{ 
    type: String,
    required:true
},
material_code:{ 
    type: String,
    required:true
},
course_id:{ 
    type: String,
    required:true
},
});


export default model("materialModel",material_schama);
