const mongoose = require('mongoose');

const MONGOURI ='mongodb://localhost/products_db';


mongoose.connect(MONGOURI)
    .then(()=>{
        console.log("Connected to DB!")
    })
    .catch((err)=>{
        console.log("Woops, error connection to db", err.message)
    });