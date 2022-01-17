const mongooose = require('mongoose');


const PostSchema = new mongooose.Mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique:true
    },
    desc:{
        type:String,
        required: true,
    },
    photo:{
        type:String,
        required: false,
    },
    username:{
        type:String,
        default:""
    },
    catergories:{
        type:Array,
        required: false
    },
},{timestamps: true});


module.exports = mongoose.model('Category', CategorySchema)