const mongoose = require("mongoose");

const SecondaryListSchema = new mongoose.Schema({
  thing: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  listID: {
    type: mongoose.Schema.Types.ObjectId, // connect parent list ID
    ref: 'List',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SecondaryList", SecondaryListSchema);
