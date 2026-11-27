const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    next();
});

app.get("/", (req, res) => {
    res.send("Ventra API running");
});

app.post("/api/ai", (req, res) => {
    const p = req.body.prompt || "Hello";
    res.json({
        text: "VENTRA CONNECTED You said: " + p
    });
});

app.options("/api/ai", (req, res) => {
    res.sendStatus(200);
});

const port = process.env.PORT || 10000;

app.listen(port);
               
