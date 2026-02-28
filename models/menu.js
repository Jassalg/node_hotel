const mongoose = require('mongoose');


const menuschema = new mongoose.Schema({
   name:{
    type:String,
    require:true ,
   },
   price:{
    type :Number,
    require: true ,
   },

   taste:{
    type:String , 
    enum:['sour','sweet','spicy'],
     require:true,
   },
   is_drink:{
    type:Boolean ,
    default:false 
   },

   ingredients:{
    type:[String],
    default:[],
   },

   sales:{
    type:Number,
    default:0,
   }
   

});
// export the data

const Menu= mongoose.model('Menu',menuschema);
module.exports = Menu;
