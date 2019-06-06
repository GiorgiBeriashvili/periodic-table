const express = require("express");
const path = require("path");

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "/../dist/static")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../dist/views", "index.html"));
});

app.get("*", (req, res) => {
    res.send(`The route "${req.url}" led you here.`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});