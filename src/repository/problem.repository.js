const {Problem}=require('../models/index.js');
class ProblemRepository{
        async createProblem(problemData){
               try {
                 const problem=await Problem.create({
                     title:problemData.title,
                     description:problemData.description,
                     difficulty:problemData.difficulty,
                     testCases:(problemData.testCases)?problemData.testCases:[]
                 });
                 return problem;
               } catch (error) {
                    console.log("inside repository");
                   console.log(error);
                   throw error;
               }
        }
        async getProblems(){
              try {
                const problems =await Problem.find();
                return problems;
              } catch (error) {
                console.log("get Problems repository not working");
              }
              
        }
        async getProblem(id){
             try { 
                const problem=await Problem.findById(id);
                  return problem;
             } catch (error) {
                console.log("get problem  repository not working");
             }
        }
}
module.exports={
       ProblemRepository:ProblemRepository
}