import express from 'express';

const app = express();

app.get("/menu", (req, res) => {
    
});

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});