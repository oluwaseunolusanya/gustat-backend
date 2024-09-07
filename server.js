import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Menu from "./models/menu.model.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Middleware to enable collection of json data in req.body
app.use(express.json());

app.get("/api/menu", async (req, res) => {
    try {
        const menu = await Menu.find({});
        res.status(200).json({success: true, data: menu});
    } catch (error) {
        console.log("Error in fetching menu:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    };
});

app.post("/api/menu", async (req, res) => {
    // Bind user request data to an object
    const menu = req.body;  

    // Validate all required fields are filled.
    if(!menu.name || !menu.description || !menu.price || !menu.image){
        return res.status(400).json({ success:false, message: "Please complete all fields."});
    };

    // Create new menu item
    const newMenu = new Menu(menu);

    try {
        await newMenu.save();   // Saving menu item to the database
        res.status(201).json({success: true, data: newMenu});
    } catch (error) {
        console.error("Error in creating menu:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    };
});

app.put("/api/menu/:id", async (req, res) => {
    const {id} = req.params;

    const menu = req.body;

    // Handle invalid item id in the menu collection
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid item id"});
    };

    try {
        const updatedItem = await Menu.findByIdAndUpdate(id, menu, {new:true});
        res.status(200).json({success: true, data: updatedItem});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    };
});

app.delete("/api/menu/:id", async(req, res) => {
    const { id } = req.params; 

    try {
        await Menu.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Menu deleted."})
    } catch (error) {
        res.status(404).json({success: false, message: "Menu not found."})
    }

});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});