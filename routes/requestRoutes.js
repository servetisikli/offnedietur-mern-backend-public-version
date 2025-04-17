import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/authMiddleware.js";
import {
  createRequest,
  getUserRequests,
  getAllRequests,
} from "../controllers/requestController.js";

const router = express.Router();

// User routes
router.post("/sent", protect, createRequest);
router.get("/", protect, getUserRequests);

// Admin routes
router.get("/all", protect, admin, getAllRequests);

export default router;
