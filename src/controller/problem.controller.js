const {StatusCodes}=require('http-status-codes');
const { NotImplementedError}=require('../error/NotImplementedError.js');
function pingProblemController(req,res,next){
        return res.json({message:'problem controller working fine'});
}
function addProblem(req,res,next){
      try {
          throw new NotImplementedError('addProblem');
      } catch (error) {
           next(error);
      }
}
function getProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'});
}
function getProblems(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'});
}
function deleteProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'});
}
function updateProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'});
}
module.exports={
      addProblem:addProblem,
      getProblems:getProblems,
      getProblem:getProblem,
      deleteProblem:deleteProblem,
      updateProblem:updateProblem,
      pingProblemController:pingProblemController
}