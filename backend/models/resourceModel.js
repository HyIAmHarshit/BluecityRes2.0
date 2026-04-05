const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: String,
  fileUrl: String,
  course: String,
  specialization: String,
  subject: String,
  uploadedBy: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Resource", resourceSchema);