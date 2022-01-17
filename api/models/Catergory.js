const mongooose = require('mongoose');


const CategorySchema = new mongooose.Mongoose.Schema({
    name:{
        type:String,
        required: true,
    }
},{timestamps: true});
module.exports = mongoose.model('Category', CategorySchema)