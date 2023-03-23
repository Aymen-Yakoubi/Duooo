const projectRouter = require('express').Router();
const {retrieve,retrieveOne,createOne,updateOne,deleteOne,deleteAll} = require('./projectController');

// TODO: Create route handlers for each of the six methods in pokemonController
projectRouter.get('/',retrieve)

projectRouter.get('/:category',retrieveOne)
projectRouter.post('/add',createOne)
projectRouter.put('/:id',updateOne)
projectRouter.delete('/:id',deleteOne)
projectRouter.delete('/',deleteAll)


module.exports = projectRouter;