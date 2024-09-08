import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import  menuRoutes from "./routes/menu.route.js"

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware to enable collection of json data in req.body
app.use(express.json());

app.use("/api/menu", menuRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
});