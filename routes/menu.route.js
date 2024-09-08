import express from "express";
import { getAllMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getAllMenuItems);
router.post("/", addMenuItem);
router.put("/:id", updateMenuItem); 
router.delete("/:id", deleteMenuItem);

export default router;