function pingProblemController(req,res){
        return res.json({message:'problem controller working fine'});
}
function addProblem(req,res){
     
}
function getProblem(req,res){

}
function getProblems(req,res){

}
function deleteProblem(req,res){

}
function updateProblem(req,res){

}
module.exports={
      addProblem:addProblem,
      getProblems:getProblems,
      getProblem:getProblem,
      deleteProblem:deleteProblem,
      updateProblem:updateProblem,
      pingProblemController:pingProblemController
}