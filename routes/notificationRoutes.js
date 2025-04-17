import express from "express";
import {
  createNotification,
  getNotifications,
  markAsRead,
} from "../controllers/notificationController.js";
import { protect, admin } from "../middleware/authMiddleware.js"; // Assuming you have an auth middleware

const router = express.Router();

// Create a new notification (admin only)
router.post("/", protect, admin, createNotification);

// Get notifications for a user
router.get("/:userId", protect, getNotifications);

// Mark a notification as read
router.patch("/:notificationId/read", protect, markAsRead);

export default router;
