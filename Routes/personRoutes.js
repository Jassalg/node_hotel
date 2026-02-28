const mongoose = require('mongoose');
const express  = require('express');
const router = express.Router();

 const person = require('./../models/person');






router.get('/',async(req,res)=>{
  try{
const data = await person.find();

console.log('data fetch');
res.status(200).json(data);

  }catch(err){
console.log(err);
res.status(500).json({error:'internet server error'});
  }
})




router.post('/',async (req,res)=>{
  try{
const data = req.body;
// create a new person document using the mongoose model
const newPerson = new person(data);
// save the newperson data pp.use(bodyParser.json());

const response = await newPerson.save();
console.log('data saved');
res.status(200).json(response);

  }catch(err){
console.log(err);
res.status(500).json({error:'internet server error'});
  }
})

// parameteerized api 

router.get('/:worktype',async  (req, res)=>{
  try{
const worktype  = req.params.worktype;  //extraxt  the person from the data url 
if(worktype == 'chef' || worktype =='manager'){
  const response = await person.find({work:worktype});
  console.log("data fetched");
  res.status(200).json(response);
}else{
 res.status(500).json({error:'invalid worktype'})
}
  }catch(err){
   console.log(err);
  res.status(500).json({error:'internet server error'});
  }
})

// to update the data we use the put and patch both 

router.put('/:id',async(req,res)=>{
    try{
     const person_id = req.params.id;
     const updated_Data = req.body; 

     const response = await person.findByIdAndUpdate(person_id,updated_Data ,{
        new:true ,
        runValidators :true ,
        
     })

     if(!response){
        return res.status(404).json({error:"person not found"})
     }
     console.log("updated data");
     res.status(200).json(response);
    }
    catch(err){
    console.log(err);
    res.status(500).json({error:"invalid server error"})
    }
})

// to delete the data 
router.delete('/:id',async(req,res)=>{
   try{
     const person_id = req.params.id;
    const delete_data = await person.findByIdAndDelete(person_id,);
if(!delete_data){
 return res.status(404).json({error:"person not found"})
}
console.log("data is delete");
    res.status(200).json({messgae:"person data is deleted successfully"})
    
    
   }catch(Err){
 console.log(Err);
    res.status(500).json({error:"invalid server error"})
   }
})

module.exports = router ;