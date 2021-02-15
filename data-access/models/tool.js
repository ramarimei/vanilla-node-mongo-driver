// Define schema
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;


const ToolModelSchema = new Schema({
  name: String,
  price: { type : Number, required : true },
  weightKg: Number
});

// Compile model from schema.  
const Tool = mongoose.model('mitre10_tools', ToolModelSchema);

module.exports = Tool