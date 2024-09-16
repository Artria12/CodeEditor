const express=require('express');
const app=express();
const {errorHandler}=require('./util/ErrorHandler.js');
const {apirouter}=require('./route/index.js')
const bodyparser=require('body-parser');
const {baseError}=require('./error/baseError.js');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());
const {PORT}=require('./config/server.config.js');
app.use('/api',apirouter);
app.get('/ping',(req,res)=>{
      return res.json({message:'Problem Service is Alive'});
});
app.use(errorHandler);
app.listen(PORT,()=>{
      console.log(`server started at port ${PORT}`);   
})
