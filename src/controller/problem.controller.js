const {StatusCodes}=require('http-status-codes');
const { NotImplementedError}=require('../error/NotImplementedError.js');
const {problemService}=require('../service/index.js');
const {ProblemRepository}=require('../repository/index.js');
const ProblemService=new problemService(new ProblemRepository());
function pingProblemController(req,res,next){
        return res.json({message:'problem controller working fine'});
}
async function addProblem(req,res,next){
      try {
          console.log('incoming req  body',req.body);
         const newProblem=await ProblemService.createProblem(req.body);
         return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"New problem created",
            error:{},
            data:newProblem
         }
        )

           
      } catch (error) {
            console.log("inside controller");
           next(error);
      }
}
async function getProblem(req,res,next){
      try {
        const problem=await ProblemService.getProblem(req.body);
          return res.status(StatusCodes.OK).json({
             success:true,
             problem:problem
          })
      } catch (error) {
        console.log("get Problem controller not working");
      }
}
async function getProblems(req,res,next){
    try {
        const problems=await ProblemService.getProblems();
      res.status(StatusCodes.ACCEPTED).json({
           Problems:problems
      })
  } catch (error) {
       console.log("getProblems controller not working");
     console.log(error);
  }
    
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