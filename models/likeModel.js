// Import Mongoose
const mongoose = require("mongoose");

// Define Schema
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // Reference to the Post model
        required: true, 
    },
    user: {
        type: String,
        required: true, 
    },
 });

// Export Model
module.exports = mongoose.model("Like", likeSchema);
