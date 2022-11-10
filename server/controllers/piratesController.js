// == crud ==
//import the model to make queries to the db


//method 2
const Pirate = require("../models/pirates")

module.exports = {

    //read all
    findAll: (req, res) => {
        Pirate.find().sort({name:"asc"})
            .then(allDaPirates => {
                res.json(allDaPirates)
            })
            .catch(err => res.json(err))
    },

    //create
    create: (req, res) => {

        console.log(req.body)
        Pirate.create(req.body)
            .then(newPirate => {
                console.log("SERVER SUCCESS")
                res.json(newPirate)
            })
            .catch(err => {
                console.log("SERVER ERROR")
                res.status(400).json(err)
            })
    },

    //read one
    findOne: (req, res) => {
        Pirate.findById(req.params.id)
            .then(onePirate => res.json(onePirate))
            .catch(err => res.json(err))
    },

    //update 
    update: (req, res) => {
        console.log("UPDATE ID", req.params.id)
        console.log("req.body", req.body)
        Pirate.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedPirate => res.json(updatedPirate))
            .catch(err => res.json(err))
    },

    //delete
    delete: (req, res) => {
        Pirate.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}