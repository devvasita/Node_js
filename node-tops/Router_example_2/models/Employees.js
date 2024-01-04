const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("employee", employeeSchema);
