const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');

const app =  express();

 
  const headings = require('./models/headings');


app.use(bodyParser.json());


app.get('/',(req,res)=>{
  res.json({"data":"hello this is home"})
})


// for the person 

const person = require('./Routes/personRoutes');
  app.use('/person',person);


// for the menu
const menu = require('./Routes/menuItem');
app.use('/menu',menu);

// heading CRUD for the pratice 

app.post('/headings',async(req,res)=>{
try{
   const data = req.body ;

   const dataObject = new headings(data);
   const response = await dataObject.save();
   console.log("heading posot");
   res.status(200).json(response);
}
catch(err){
  console.log(err);
  res.status(500).json({error:"internet server error"});
}
 
});

app.get('/headings',async(req,res)=>{
  try{
const data = await headings.find();
console.log("heading get");
res.status(200).json(data); 
 }
  catch(err){
    console.log(err);
    res.status(500).json({error:"invalid server isssue"})
  }
})
// use to listen the requests  

app.listen(2010 ,()=>{
  console.log("server start")
});





