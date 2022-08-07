const mongoose = require('mongoose');

//Other way
//const MONGOURI = 'mongodb://127.0.0.1:27017/jokes_api';

const MONGOURI = 'mongodb://localhost/jokes_api';

mongoose.connect(MONGOURI)
    .then(()=>{
        console.log("Connected to db")
})
    .catch(err=>
        console.log("Error connecting to db", err.message));