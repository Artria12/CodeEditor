
const {sanitizeMarkdown}=require('../util/index.js');

class problemService{
       constructor(problemRepository){
           this.problemRepository=problemRepository
       }
       async createProblem(ProblemData){
                 try {
                      console.log(ProblemData.description);
                     ProblemData.description=sanitizeMarkdown(ProblemData.description);
                     console.log(ProblemData.description);
          const problem=await this.problemRepository.createProblem(ProblemData);
          console.log(problem);
          return problem;
                 } catch (error) {
                      console.log("inside service");
                     console.log(error);
                     throw error;
                 }
          
       }
       async getProblems(){
         try {
            const problems =await this.problemRepository.getProblems();
            return problems;
         } catch (error) {
            console.log("get problems service not working");
         }
         
       }
       async getProblem(id){
             try {
                const problem=await this.problemRepository.getProblem(id);
                return problem;
             } catch (error) {
                console.log("get Problem service not working");
             }
             
       }
       async deleteProblem(id){
               try {
                   const problem=await this.problemRepository.deleteProblem(id);
                   console.log(problem);
                   return problem;
               } catch (error) {
                  console.log("delete Problem service not working");
               }
       }
       async updateProblem(id,update){
                try {
                    const problem=await this.problemRepository.updateProblem(id,update);
                    console.log(problem);
                    return problem;
                } catch (error) {
                  console.log("Update Problem service not working");
                }
       }
}
module.exports={
       problemService:problemService  
}