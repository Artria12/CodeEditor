const {baseError}=require('./baseError.js');
const {StatusCodes}=require('http-status-codes');
class badRequestError extends baseError {
      constructor(propertyName,detail){
          super("BadRequest",StatusCodes.BAD_REQUEST,`invalid structure for ${propertyName} provided`,detail);
      }
}
module.exports={
     badRequestError:badRequestError
}