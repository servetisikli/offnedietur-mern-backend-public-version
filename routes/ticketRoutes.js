import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  createTicket,
  getUserTickets,
  getAllTickets,
  addResponse,
  closeTicket,
} from "../controllers/ticketController.js";

const router = express.Router();

// User routes
router.post("/", protect, createTicket);
router.get("/my-tickets", protect, getUserTickets);

// Admin routes
router.get("/all", protect, admin, getAllTickets);
router.post("/:ticketId/respond", protect, admin, addResponse);
router.put("/:ticketId/close", protect, admin, closeTicket);

export default router;
