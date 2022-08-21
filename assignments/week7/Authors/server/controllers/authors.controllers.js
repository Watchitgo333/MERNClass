const Author = require('../models/authors.model');

const createAuthor = (req, res) => {
    console.log("body------>", req.body)
    Author.create(req.body)
        .then((newAuthor)=>{
            res.json(newAuthor);
        })
        .catch((err)=>{
            console.log("Error in createAuthor", err);
            res.status(400).json({message:"Woops", error: err.errors});
        })
}

const getAuthors = (req, res) => {
    Author.find({}).sort({name:1})
        .then((authors)=>{
            console.log(authors)
            res.json(authors);
        })
        .catch((err)=>{
            console.log("Error in getAuthors", err);
            res.status(400).json(err);
        })
}

const getAuthorById = (req, res) => {
    Author.findById(req.params.id)
        .then((author)=>{
            console.log(author)
            res.json(author);
        })
        .catch((err)=>{
            console.log("Error in getAuthorById", err);
            res.status(400).json({message:"We could not find an Author with that id. Want to add a new Author?", error: err.errors});
        })
}

const updateAuthorById = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
        .then((updateAuthor)=>{
            console.log(updateAuthor)
            res.json(updateAuthor)
        })
        .catch((err)=>{
            console.log("Error in updateAuthorById", err);
            res.status(400).json({message:"Woops", error: err.errors});
        })
}

const deleteAuthorById = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then((deleteAuthor)=>{
            console.log(deleteAuthor);
            res.json(deleteAuthor);
        })
        .catch((err)=>{
            console.log("Error in deleteAuthorById", err);
            res.status(400).json(err);
        })
}

module.exports = {
    createAuthor,
    getAuthors,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById
}