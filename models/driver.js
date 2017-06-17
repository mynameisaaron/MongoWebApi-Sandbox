const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
 email:{
     required:true,
     type: String
 },
 driving:
 {
     type:Boolean,
     default:false
 }
});



const Driver = mongoose.model('driver',DriverSchema);
module.exports = Driver;