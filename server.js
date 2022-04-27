const express = require('express');
const path=require('path');
const timer = require("./middleware/timer");


// require express
// init express
const app = express();
app.use(timer);
app.use(express.static(path.join(__dirname , 'pages')));
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'pages','Home.html'))
  })
  
  //Contact
  
  app.get('/contact',(req,res)=>{
      res.sendFile(path.join(__dirname,'pages','Contact.html'))
  })
  
  //Service
  
  app.get('/service',(req,res)=>{
      res.sendFile(path.join(__dirname,'pages','Services.html'))
  
  })
  
// starting the server
const PORT = 5000;
app.listen(PORT,(err)=>{
  err?
  console.log(err):
    console.log(`the server is runing on port ${PORT}...`)
})
