import mongoose from "mongoose";

// Schema for User model
const userSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    addressLine1:{
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
});

// Create and export User model
const User = mongoose.model("User", userSchema);
export default User;