import { promoDb, menuDb } from "../../config/db.js";

async function findProduct(req, res, next) {
  const { products } = req.body;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    try {
      const result = await menuDb.findOne({ title: product });
      if (!result) {
        return res
          .status(404)
          .send(`Could not find any product called ${product}`);
      }
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  }

  next();
}

async function checkPromoId(req, res, next) {
  const { promoId } = req.body;
  const promo = await promoDb.findOne({ _id: promoId });
  if (!promo) {
    return res
      .status(404)
      .send(`Could not find any promotional offer with an id of ${promoId}`);
  }

  next();
}

export { checkPromoId, findProduct };
