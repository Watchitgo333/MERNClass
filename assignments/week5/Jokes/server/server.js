require('./config/mongoose.config');

const express = require('express')
const app = express()
const PORT = 8000
app.use(express.json()); // must be run before routes!
app.use(express.urlencoded({extended:true}));
const routes = require("./routes/jokes.routes");
routes(app);
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});