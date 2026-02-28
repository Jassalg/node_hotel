const mongoose = require('mongoose'); 

const headingSchema = new mongoose.Schema({
 name:{
    type:String , 
    require:true

 }
});




const headings = mongoose.model('Sahil',headingSchema);
module.exports = headings ;