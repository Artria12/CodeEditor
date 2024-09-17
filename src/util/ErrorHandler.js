const {baseError} = require("../error/baseError");
const {StatusCodes}=require('http-status-codes');
function errorHandler(err,req,res,next){
      if(err instanceof baseError){
         return res.status(err.statusCode).json({
               success:false,
               message: err.message,
               error:err.detail,
               data:{}
         })
      }
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
           success:false,
           message:"something went wrong",
           error:err
      })
}
module.exports={
      errorHandler:errorHandler
}