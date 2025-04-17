import Request from "../models/RequestModel.js";
import asyncHandler from "express-async-handler";

export const createRequest = async (req, res) => {
  try {
    const {
      contact_name,
      contact_email,
      organization_name,
      current_website,
      activity_area,
      project_goals,
      target_audience,
      special_requirements,
      site_assests,
      reference_websites,
      design_preferences,
      domain_hosting,
      extra_notes,
    } = req.body;

    const newRequest = new Request({
      user: req.user.id,
      contact_name,
      contact_email,
      organization_name,
      current_website,
      activity_area,
      project_goals,
      target_audience,
      special_requirements,
      site_assests,
      reference_websites,
      design_preferences,
      domain_hosting,
      extra_notes,
    });

    const savedRequest = await newRequest.save();

    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Kullanıcının kendi request'lerini alma
export const getUserRequests = async (req, res) => {
  try {
    const requests = await Request.find({ user: req.user.id });

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Get all requests (admin only)
// @route   GET /api/requests/admin
// @access  Private/Admin
const getAllRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({})
    .populate("user", "firstName lastName email")
    .sort({ createdAt: -1 });
  res.json(requests);
});

export { getAllRequests };
