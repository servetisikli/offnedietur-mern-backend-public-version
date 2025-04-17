import { Router } from "express";
import { createContact } from "../controllers/contactController.js";

const router = Router();

// @desc    Create new contact message
// @route   POST /api/contact
// @access  Public
router.post("/", createContact);

export default router;
