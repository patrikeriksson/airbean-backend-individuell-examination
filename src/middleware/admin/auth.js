async function adminAuth(req, res, next) {
  if (!global.isAdmin) {
    return res.send("You're not authorized to make this request");
  }
  next();
}
export { adminAuth };
