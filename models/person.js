const mongoose = require("mongoose");

// define the schema

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },

  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salary:{
    type: Number ,
    required:true
  }
});

// create person model amd export the schema




const person= mongoose.model('person',personSchema);
module.exports = person ;
