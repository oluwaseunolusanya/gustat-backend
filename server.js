import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Menu from "./models/menu.model.js";

dotenv.config();

const app = express();

app.post("/menu", async (req, res) => {
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

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});