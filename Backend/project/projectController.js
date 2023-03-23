const Project = require('./project');


exports.createOne = function (req, res) {
    Project.insertMany([req.body])
         .then((resultat)=>{
                res.status(201).send(resultat)
            })
            .catch((err)=>{
                res.status(500).send(err)
            })
    
};

exports.retrieve = function (req, res) {
    Project.find()
    .then((rest)=>{
        res.status(200).json(rest)
    })
    .catch((err)=>{res.status(500)})
};

exports.retrieveOne = function (req, res) {
    Project.find({category:req.params.category})
    .then((rest)=>{
        res.status(200).json(rest)
    })
    .catch((err)=>{res.status(500)})
};

exports.updateOne = function (req, res) {
    Project.updateOne({_id:req.params.id},req.body)
     .then((resultat)=>{
        res.status(200).send(resultat)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
};

exports.deleteOne = function (req, res) {
    Project.deleteOne({_id:req.params.id})
    .then((resultat)=>{
        res.status(200).send(resultat)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
};
exports.deleteAll = function (req, res) {
    Project.deleteMany()
    .then((resultat)=>{
        res.status(200).send(resultat)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
};
