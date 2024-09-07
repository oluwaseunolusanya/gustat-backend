import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image:{
            type: String,
            required: true
        },
    }, 
    {
        timestamps: true 
    }
);

const Menu = mongoose.model('Menu', menuSchema);  //Creating Menu model from the schema.

export default Menu;