
import bcrypt from 'bcryptjs';
import User from "../database/models/users_model.js";
import db from "../database/MongoDBconnection.js";

export const loginAuth = async (req, res) => {
  const { first_name, password } = req.body;
  const user = await User.findOne({ first_name }).lean();

  //check if the user exist
  if (!user) {
    return res.status(401).send('Invalid username or password');
  }

  //check the password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).send('Invalid username or password');
  }
  
  //check the user type
  if (user.user_type == 'admin') {
    return res.render("adminTemplates/adminHomePage");;
  }
  else if (user.user_type == 'student') {
    return res.render("studentTemplates/studentHomePage");;
  }
  else {
    return res.render("doctorTemplates/doctorHomePage");;
  }
  
}