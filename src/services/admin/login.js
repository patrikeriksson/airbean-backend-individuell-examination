import bcrypt from "bcrypt";
import { adminDb } from "../../config/db.js";

async function loginAdmin(req, res) {
  const { username, password } = req.body;
  const user = await adminDb.findOne({ username });

  if (!user) {
    res.status(401).send("Wrong username");
    return;
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    res.status(401).send("Wrong password");
    return;
  }
  global.isAdmin = true;
  res.status(200).send("Logged in as admin");
}

export { loginAdmin };
