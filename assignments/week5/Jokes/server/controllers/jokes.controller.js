const Joke = require("../models/jokes.model");

const createJoke = (req, res) => {
    console.log('body---', req.body)
    Joke.create(req.body)
        .then((newJoke)=>{
            res.json(newJoke);
        })
        .catch((err) => {console.log("Error in createJoke", err)
            req.status(400).json(err);
    });
}
const getAllJokes = (req, res) => {
    Joke.find({})
    .then((jokes)=>{
        res.json(jokes);
    })
    .catch((err) => {console.log("Error in getAllJokes", err)
        req.status(400).json(err);
});
    
}
const getJokeById = (req, res) => {
    Joke.findById(req.params.id)
    .then((joke)=>{
        res.json(joke);
    })
    .catch((err) => {console.log("Error in getJokeById", err)
        req.status(400).json(err);
});
}
const updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body,{new:true})
    .then((updatedJoke)=>{
        res.json(updatedJoke);
    })
    .catch((err) => {console.log("Error in updateJoke", err)
        req.status(400).json(err);
});
}
const deleteJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
    .then((deleteJoke)=>{
        res.json(deleteJoke);
    })
    .catch((err) => {console.log("Error in geleteJoke", err)
        req.status(400).json(err);
});
}

module.exports = {
    createJoke,
    getAllJokes,
    getJokeById,
    updateJoke,
    deleteJoke
}
