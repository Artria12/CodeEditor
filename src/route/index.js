const express=require('express');
const apirouter=express.Router();
const {v1router}=require('./v1/index.js');
apirouter.use('/v1',v1router);
module.exports={
      apirouter:apirouter
}