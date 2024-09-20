const {StatusCodes}=require('http-status-codes');
const { NotImplementedError}=require('../error/NotImplementedError.js');
const {problemService}=require('../service/index.js');
const {ProblemRepository}=require('../repository/index.js');
const {notfoundError} = require('../error/notfoundError.js');
const {logger}=require('../config/winston.config.js');
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
           console.log(req.params.id);
        const problem=await ProblemService.getProblem(req.params.id);
            if(!problem){
                 throw new notfoundError('problem',req.params.id);
            }
          return res.status(StatusCodes.OK).json({
             success:true,
             problem:problem
          })
      } catch (error) {
            next(error);
        console.log("get Problem controller not working",error);
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
async function deleteProblem(req,res,next){
       try {
           const problem=await ProblemService.deleteProblem(req.params.id);
            if(!problem){
                 logger.error(`problem with ${req.params.id} not found in db`)
                 throw new notfoundError('problem',req.params.id);
            }
           return res.status(StatusCodes.OK).json({
               success:true, 
               problem:req.params.id,
               problemdesc:problem
           })
       } catch (error) {
            next(error);
       }
}
async function updateProblem(req,res,next){
       try {
           const problem= await ProblemService.updateProblem(req.params.id,req.body);
              if(!problem){
                  throw new notfoundError('problem',req.params.id);
              }
             return res.status(StatusCodes.OK).json({
                  success:true,
                  problemId:req.params.id,
                  problem:problem
             })
       } catch (error) {
             next(error);
       }
}
module.exports={
      addProblem:addProblem,
      getProblems:getProblems,
      getProblem:getProblem,
      deleteProblem:deleteProblem,
      updateProblem:updateProblem,
      pingProblemController:pingProblemController
}