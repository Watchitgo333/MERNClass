const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: [true, "Name is required."],
            minLength: [3, "Name needs to at least be 3 characters."],
            maxLength: [50, "Name cannot be over 50 characters."]
        }
    },
    {
        timestamps:true
    }
)

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author;