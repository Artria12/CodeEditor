const {Problem}=require('../models/index.js');
const {notfoundError}=require('../error/notfoundError.js')
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
      async deleteProblem(id){
            const problem=await Problem.findByIdAndDelete(id);
             return problem;
      }
      async updateProblem(id,update){
            const problem=await Problem.findByIdAndUpdate(id,update,{
                new:true
            });
            console.log(problem);
            return problem;
      }
}
module.exports={
       ProblemRepository:ProblemRepository
}