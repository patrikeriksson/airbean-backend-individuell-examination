import { menuDb } from "../../config/db.js";

async function checkProductId(req, res, next) {
  const { productId } = req.body;
  const product = await menuDb.findOne({ _id: productId });
  if (!product) {
    return res
      .status(404)
      .send(`Could not find any product with an id of ${productId}`);
  }

  next();
}

async function checkProduct(req, res, next) {
  const { title } = req.body;
  const product = await menuDb.findOne({
    title: title,
  });
  if (product) {
    return res.status(400).send(`${title} is already on the menu`);
  }
  next();
}

export { checkProductId, checkProduct };
