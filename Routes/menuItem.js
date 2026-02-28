const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const Menu = require('./../models/menu');

router.get('/',async(req,res)=>{
  try{
   
const menudata = await Menu.find(); 
console.log("data is get");
res.status(200).json(menudata);
  
  }catch (err){
console.log(err);
res.status(500).json({error:'internet server error'});
  }
  
}) 

// parameterized get data 
router.get('/:tastetype',async(req,res)=>{
  try{
const tastetype  = req.params.tastetype;
if(tastetype =='sour','sweet','spicy'){
  const response = await Menu.find({taste:tastetype});
  console.log("data is here");
  res.status(200).json(response);
}
else{
  res.status(500).json({error:'invalid taste'})
}
  }
  catch(err){
console.log(err);
res.status(500).json({error:'internet server error'});
  }
})


//use of the post in the hotels 

router.post('/',async(req,res)=>{
  try{
  const menuData =req.body ; 

  const newdata = new Menu(menuData);
  const newResponse = await newdata.save();
  console.log("menu data is save");
  res.status(201).json(newResponse);
  }
  catch(err){
console.log(err);
res.status(500).json({error:'internet server error'});
  }
})
// comment added for the export

module.exports = router;