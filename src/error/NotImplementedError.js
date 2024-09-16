const {baseError}=require('./baseError.js');
const {StatusCodes}=require('http-status-codes');
class NotImplementedError extends baseError {
      constructor(methodname){
          super("NotImplementedError",StatusCodes.NOT_IMPLEMENTED,`${methodname} not implemented`,{});
      }
}
module.exports={
    NotImplementedError:NotImplementedError
}