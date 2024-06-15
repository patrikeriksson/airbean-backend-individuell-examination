import { promoDb } from "../../config/db.js";

async function addPromotionalOffer(req, res, next) {
  const promo = req.body;
  promoDb.insert(promo);

  res.status(200).send(`${promo.title} has been added as a promotinal offer`);
}

async function deletePromotionalOffer(req, res, next) {
  const { promoId } = req.body;
  promoDb.remove({ _id: promoId });
  res.send(`Promotional offer ${promoId} has been deleted`);
}

export { addPromotionalOffer, deletePromotionalOffer };
