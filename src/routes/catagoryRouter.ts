import express from "express";
import CategoryController from "../controllers/categoryController";
const router: any = express.Router();

// user routes
/** @used */
router.post("/", CategoryController.create);
router.put("/:id", CategoryController.update);
router.get("/", CategoryController.getAll);

export default router;
