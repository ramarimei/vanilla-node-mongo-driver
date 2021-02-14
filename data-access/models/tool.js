// Define schema
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;


const ToolModelSchema = new Schema({
  name: String,
  price: Number,
  weightKg: Number,
  lengthCm: Number,
  bob: { type: Number, required: true },
  fish: [{ name: String, species: String }]
});

// Compile model from schema
const Tool = mongoose.model('tools', ToolModelSchema);

module.exports = Tool