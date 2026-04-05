const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: String
});

const specializationSchema = new mongoose.Schema({
  name: String,
  subjects: [subjectSchema]
});

const courseSchema = new mongoose.Schema({
  name: String,
  specializations: [specializationSchema]
});

module.exports = mongoose.model("Course", courseSchema);