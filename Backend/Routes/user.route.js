import express from "express";
import {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
} from "../Controller/user.controller.js";

const router = express.Router();

router.post("/user", createUser);       // Create
router.get("/user", getAllUser);       // Read
router.put("/user/:id", updateUser);    // Update
router.delete("/user/:id", deleteUser); // Delete

export default router;
