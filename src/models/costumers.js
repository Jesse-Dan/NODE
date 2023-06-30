const mongoose = require('mongoose')




const costumersSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    industry: String
});



module.exports = mongoose.model('Client', costumersSchema);
