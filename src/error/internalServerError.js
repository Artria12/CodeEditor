const {baseError}=require('./baseError.js');
const {StatusCodes}=require('http-status-codes');
class internalServerError extends baseError {
      constructor(detail){
          super("internalServerError",StatusCodes.INTERNAL_SERVER_ERROR,`something went wrong`,detail);
      }
}
module.exports={
    internalServerError:internalServerError
}