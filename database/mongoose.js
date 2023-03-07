const mongoose = require('mongoose');

mongoose.Promise  = global.Promise; // to make asyn call

mongoose.connect('mongodb://localhost:27017/taskmanagerdb', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => {
        console.log("db connected successfully")
    })
    .catch((error) => {
        console.log(error)
    });

module.exports = mongoose;    

