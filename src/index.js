import express from "express";
import { join } from "path";

import elements from "./data/elements.json";
import map from "./data/map.json";

const application = express();
const port = process.env.PORT || 8080;

application.use(express.static(join(__dirname, "/../dist/static")));

const startServer = async () => {
    application.get("/", (request, response) => {
        response.sendFile(join(__dirname, "/../dist/views", "index.html"));
    });

    await application.get("/elements/:element", (request, response) => {
        if (Object.keys(map["data"]).includes(request.params.element)) {
            response.json(elements["data"][map["data"][request.params.element]]);
        }
        else {
            response.send(`The route "${request.url}" led you here.`);
        }
    });

    application.get("*", (request, response) => {
        response.sendFile(join(__dirname, "/../dist/views", "404.html"));
    });

    application.listen(port);
};

startServer();