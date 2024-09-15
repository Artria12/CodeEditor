const {StatusCodes}=require('http-status-codes');
function pingProblemController(req,res){
        return res.json({message:'problem controller working fine'});
}
function addProblem(req,res){
     return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'});
}
function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'});
}
function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'});
}
function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'});
}
function updateProblem(req,res){
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