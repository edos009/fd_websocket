const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", mongooseSchema);

module.exports = Message;
