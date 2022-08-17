const mongoose = require('mongoose');

const MONGOURI = 'mongodb://localhost/authors_db';

mongoose.connect(MONGOURI)
    .then(()=>{
        console.log("Connected to db!")
    })
    .catch((err)=>{
        console.log("Uh oh, something went wrong. Error connecting to db", err.message)
    })