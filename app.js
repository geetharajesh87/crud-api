const express = require('express');

const app = express();

const mongoose = require('./database/mongoose');

/* app.listen(3000, function(){
    console.log("server started with port 3000");
}); */

/* Lamda function or Arrow function - Ecma script */

/* Server Setup */
app.listen(3000, () => {
    console.log("server started with port 3000");
});

/** */