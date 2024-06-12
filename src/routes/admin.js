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

const adminRouter = Router();

// Admin login endpoint
adminRouter.post("/login", loginAdmin);

// Endpoints for adding, updating and removing products
adminRouter.post("/product", adminAuth, checkProduct, addProduct);
adminRouter.put("/product", adminAuth, checkProductId, updateProduct);
adminRouter.delete("/product", adminAuth, checkProductId, deleteProduct);

export default adminRouter;
