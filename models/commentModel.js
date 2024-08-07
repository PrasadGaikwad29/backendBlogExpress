// Import Mongoose
const mongoose = require("mongoose");

// Define Schema
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // Reference to the Post model
        required: true, 
    },
    user: {
        type: String,
        required: true, 
    },
    body: {
        type: String,
        required: true, 
    }
});

// Export Model
module.exports = mongoose.model("Comment", commentSchema);
