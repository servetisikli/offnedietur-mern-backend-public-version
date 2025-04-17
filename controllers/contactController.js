import Contact from "../models/ContactModel.js";
import asyncHandler from "express-async-handler";

// @desc    Create new contact message
// @route   POST /api/contact
// @access  Public
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
  });

  if (contact) {
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid contact data");
  }
});
