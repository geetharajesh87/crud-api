//models are responsible for fetching data from database, business logic

const mongoose = require('mongoose');

//Schema , in rdbms, table, instead we use json.  binary encoded json

const TaskListSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        minLength:3,
    }
});

const TaskList = mongoose.model('TaskList', TaskListSchema);

module.exports = TaskList;

