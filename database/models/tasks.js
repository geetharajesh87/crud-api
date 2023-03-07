//models are responsible for fetching data from database, business logic

const mongoose = require('mongoose');

//Schema , in rdbms, table, instead we use json.  binary encoded json

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        minLength:3,
    },
    _taskListId:{
        type:mongoose.Types.ObjectId,
        reruired:true,
    },
    completed : {
        type:Boolean,
        default:false
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;

