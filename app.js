const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const TaskList = require('./database/models/tasklist');
const Task = require('./database/models/tasks');

//middleware - place where which intercepts the request and response
//app is middelware here.

/*
CORS - Cross Origin Request Security
Backend - http://localhost:3000
Frontend - http://localhost:4200
*/

/* Header
 * there is one third party lib - app.use(cors());
 */
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//earlier 3rd party body parser was used. now express itself providing this feature.
app.use(express.json()); 


//Routes or REST API endpoints or Restful Webservices endpoints

/**
 * TaskList - Create, update, ReadTaskListById, ReadAllTaskList
 * Task - Create, Update, ReadTaskById, ReadAllTask
 */

//get all tasks
app.get('/tasklists', (req, res)=>{
    TaskList.find({})
     .then((lists) =>{
        res.status(200);
        res.send(lists);
     })
     .catch((error) => {
        res.status(500);
        console.log(error)
     });
});

//get one task

app.get('/tasklists/:tasklistId', (req, res)=>{
    let tasklistId = req.params.tasklistId;
    TaskList.find({_id:tasklistId})
     .then((tasklist) =>{
        res.status(200);
        res.send(tasklist);
     })
     .catch((error) => {
        res.status(500);
        console.log(error)
     });
});

//create tasklist

app.post('/tasklists', (req, res)=>{
    console.log(req.body)
    let taskListObj = {'title':req.body.title}

    TaskList(taskListObj).save()
        .then((lists)=>{
            res.status(201);
            res.send(lists);
        })
        .catch((error)=>{
            res.status(500);
            console.log(error)
        });
});

//update task 

/*
PUT - full update of object
PATCH - partial update of object
*/
app.put('/tasklists/:tasklistId', (req, res)=>{
    let tasklistId = req.params.tasklistId;
    TaskList.findOneAndUpdate({_id:tasklistId}, {$set: req.body})
     .then((tasklist) =>{
        res.status(200);
        res.send(tasklist);
     })
     .catch((error) => {
        res.status(500);
        console.log(error)
     });
});

//Delete tasklis

app.delete('/tasklists/:tasklistId', (req, res)=>{
    let tasklistId = req.params.tasklistId;
    TaskList.findByIdAndDelete({_id:tasklistId})
     .then((tasklist) =>{
        res.status(201);
        res.send(tasklist);
     })
     .catch((error) => {
        res.status(500);
        console.log(error)
     });
});


/* app.listen(3000, function(){
    console.log("server started with port 3000");
}); */

/* Lamda function or Arrow function - Ecma script */

/* Server Setup */
app.listen(3000, () => {
    console.log("server started with port 3000");
});

/** */