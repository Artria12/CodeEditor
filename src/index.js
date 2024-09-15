const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());
const {PORT}=require('./conjig/server.config.js');
app.get('/ping',(req,res)=>{
      return res.json({message:'Problem Service is Alive'});
});
app.listen(PORT,()=>{
      console.log(`server started at port ${PORT}`);
})
