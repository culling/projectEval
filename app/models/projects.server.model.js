//var mongoose = require('../../config/mongoose.js');

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var ProjectSchema   =   new Schema({
    projectName:    {
        type:       String,
        required:   "Project name is required"
        //default:    "undefined"
    },
    projectCategory:{
        type:       String,
        required:   "Project category is required",
        trim:       true
    },
    projectSponsor: {
        type:       String,
        required:   "Sponsor is required",
        trim:       true
    },
    maximumCost:    {
        type:       Number,
        required:   "Maximum Cost is required",
        default:    0
    },
    maximumBenefit: {
        type:       Number,
        required:   "Maximum Benefit is required",
        default:    0
    },
    projectAims:{
        type:       String,
        trim:       true
    },
    projectDescription:{
        type:       String,
        trim:       true
    }
});


ProjectSchema.set('toJSON',{
    getters:    true,
    setters:    true
});


mongoose.model('Project', ProjectSchema);