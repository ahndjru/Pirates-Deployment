const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');

//the schema - the rules the entries in the DB must follow
const PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength:[3, "{PATH} must be at least 3 chars long"]
    },
    image:{
        type: String,
        required: [true, "{PATH} must be present"]
    },
    treasure:{
        type: Number,
        required: [true, "{PATH} must be present"],
    },
    phrase:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength:[3, "{PATH} must be at least 3 chars long"]
    },
    crewposition:{
        type:String,
        required: [true, "{PATH} must be present"],
        unique: [true, "Each position only has 1 spot!"]
    },
    pegleg:{
        type: Boolean,
        required: [true, "{PATH} must be present"]
    },
    eyepatch:{
        type: Boolean,
        required: [true, "{PATH} must be present"]
    },
    hookhand:{
        type: Boolean,
        required: [true, "{PATH} must be present"]
    },
}, {timestamps: true})


// create the schema and export it

PirateSchema.plugin(uniqueValidator, { message: 'That Position is already covered!' });

//method 2
const Pirate = mongoose.model("Pirate", PirateSchema)
module.exports = Pirate