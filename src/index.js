const express = require("express");
const path = require("path");

const application = express();
const port = 3000;

application.use(express.static(path.join(__dirname, "/../dist/static")));

application.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "/../dist/views", "index.html"));
});

application.get("*", (request, response) => {
    response.send(`The route "${request.url}" led you here.`);
});

application.listen(port, () => {
    console.log(`Example application listening on port ${port}!`);
});