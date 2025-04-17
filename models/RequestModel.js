import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  contact_name: {
    type: String,
    required: true,
  },
  contact_email: {
    type: String,
    required: true,
  },
  organization_name: {
    type: String,
    required: true,
  },

  current_website: {
    type: String,
    required: false,
  },
  activity_area: {
    type: String,
    required: false,
  },
  project_goals: {
    type: String,
    required: false,
  },
  target_audience: {
    type: String,
    required: false,
  },
  special_requirements: {
    type: String,
    required: false,
  },
  site_assets: {
    type: String,
    required: false,
  },
  reference_websites: {
    type: String,
    required: false,
  },
  design_preferences: {
    type: String,
    required: false,
  },
  domain_hosting: {
    type: String,
    required: false,
  },
  extra_notes: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Request = mongoose.model("Request", requestSchema);

export default Request;
