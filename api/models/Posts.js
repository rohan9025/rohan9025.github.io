var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    title:{
        type:String,
        required:"kindly enter the title",
        unique:true
    },

    content:{
        type:String,
        required:"kindly enter the content",
    },

    section:{
        type:String,
        required:"kindly enter section",
    },
    images:[{
        type:String,
    }],

})

module.exports = mongoose.model('Posts', UserSchema);
