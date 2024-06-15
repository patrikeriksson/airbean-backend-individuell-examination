import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../services/admin/product.js";
import { loginAdmin } from "../services/admin/login.js";
import { adminAuth } from "../middleware/admin/auth.js";
import {
  checkProduct,
  checkProductId,
} from "../middleware/admin/validateProduct.js";
import {
  addPromotionalOffer,
  deletePromotionalOffer,
} from "../services/admin/promotions.js";
import {
  checkPromoId,
  findProduct,
} from "../middleware/admin/validatePromotions.js";

const adminRouter = Router();

// Admin login endpoint
adminRouter.post("/login", loginAdmin);

// Endpoints for adding, updating and removing products from the menu if you're signed in as admin
adminRouter.post("/product", adminAuth, checkProduct, addProduct);
adminRouter.put("/product", adminAuth, checkProductId, updateProduct);
adminRouter.delete("/product", adminAuth, checkProductId, deleteProduct);

// Endpoints for adding or removing a promotional offer
adminRouter.post("/promotion", adminAuth, findProduct, addPromotionalOffer);
adminRouter.delete(
  "/promotion",
  adminAuth,
  checkPromoId,
  deletePromotionalOffer
);

export default adminRouter;
