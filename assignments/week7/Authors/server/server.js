require('./config/mongoose.config');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 8000;
app.use(express.json);
app.use(express.urlencoded({extended:true}));
const routes = require("./routes/authors.routes");
routes(app);
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})