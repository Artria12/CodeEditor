const express=require('express');
const problemRouter=express.Router();
const {problemController}=require('../../controller/index.js');

problemRouter.get('/title',problemController.getProblem)
problemRouter.get('/ping',problemController.pingProblemController)
problemRouter.get('/all',problemController.getProblems)
problemRouter.post('/add',problemController.addProblem)
problemRouter.delete('/id',problemController.deleteProblem)
problemRouter.put('/id',problemController.updateProblem)

module.exports={
        problemRouter:problemRouter
}