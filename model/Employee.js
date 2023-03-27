const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// By default mongoose will looks for the plural, lowercased version of your model name.
// e.g. Collection Employee will be employees to mongoose
const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
