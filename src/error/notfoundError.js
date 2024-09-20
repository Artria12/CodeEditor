const {baseError}=require('./baseError.js');
const {StatusCodes}=require('http-status-codes');
class notfoundError extends baseError{
       constructor(resourceName,resourceValue){
       super("notfoundError",StatusCodes.NOT_FOUND,`the required resource: ${resourceName} with value ${resourceValue} not found`,{})
       }
}
module.exports={
       notfoundError:notfoundError
}