import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import  menuRoutes from "./routes/menu.route.js"

dotenv.config();

const app = express();

// Middleware to enable collection of json data in req.body
app.use(express.json());

app.use("/api/menu", menuRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});