import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Connected to database!"));

// Create a new express server.
const app = express();

// Setup middleware to convert body of api request to json object.
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(5000, () => {
    console.log("Server started on localhost: 5000");
});