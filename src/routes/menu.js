import { Router } from "express";
import { menuDb } from "../config/db.js";

const router = Router();

// "GET"/menu Visar hela menyn

router.get("/", async (req, res) => {
  const menu = await menuDb.find({});
  res.json(menu);
});

export default router;
