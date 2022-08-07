const mongoose = require('mongoose');

const JokeSchema = mongoose.Schema(
    {
        setup:String,
        punchline:String,
    },
    {
        timestamps: true,
    }
)

const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke;