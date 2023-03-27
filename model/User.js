const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// By default mongoose will looks for the plural, lowercased version of your model name.
// e.g. Collection User will be users to mongoose
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Editor: Number,
    Admin: Number,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);
