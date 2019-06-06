import express from "express";
import { join } from "path";

const application = express();
const port = 3000;

application.use(express.static(join(__dirname, "/../dist/static")));

application.get("/", (request, response) => {
    response.sendFile(join(__dirname, "/../dist/views", "index.html"));
});

application.get("*", (request, response) => {
    response.send(`The route "${request.url}" led you here.`);
});

application.listen(port);