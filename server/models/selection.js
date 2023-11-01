const mongoose = require("mongoose");
const selectionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  selection: {
    type: Array,
  },
});
module.exports = mongoose.model("Selection", selectionSchema);
