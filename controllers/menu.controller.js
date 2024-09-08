import mongoose from "mongoose";
import Menu from "../models/menu.model.js";

export const getAllMenuItems = async (req, res) => {
    try {
        const menu = await Menu.find({});
        res.status(200).json({success: true, data: menu});
    } catch (error) {
        console.log("Error in fetching menu:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    };
};

export const addMenuItem = async (req, res) => {
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
};

export const updateMenuItem = async (req, res) => {
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
};

export const deleteMenuItem = async(req, res) => {
    const { id } = req.params; 

    try {
        await Menu.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Menu deleted."})
    } catch (error) {
        res.status(404).json({success: false, message: "Menu not found."})
    }

};