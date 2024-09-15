const express=require('express');
const {problemRouter}=require('./problem.route.js');
const v1router=express.Router();
v1router.use('/problems',problemRouter);
module.exports={
       v1router:v1router
}
