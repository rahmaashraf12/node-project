import { Router } from "express";
import { loginAuth } from "../controllers/loginAuth.js"
const router = new Router();

router.get("/", (req, res) => {
  res.render("loginTemplate/login");
});

router.post('/', loginAuth);

export default router;
