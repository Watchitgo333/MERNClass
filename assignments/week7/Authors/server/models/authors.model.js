const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema(
    {
        name:String,
        required: [
            true,
            "Name is required."
        ],
        minLength: [3, "Name needs to at least be 3 characters."]
    }
)