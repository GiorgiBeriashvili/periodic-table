import express from "express";
import { join } from "path";
import handlebars from "express-handlebars";

import elements from "./data/elements.json";
import map from "./data/map.json";

const application = express();
const port = process.env.PORT || 8080;

application.engine("handlebars", handlebars());
application.set("view engine", "handlebars");
application.set("views", join(__dirname, "/../dist/views"));
application.use(express.static(join(__dirname, "/../dist/static")));

const startServer = async () => {
    application.get("/", (request, response) => {
        response.render("index", { title: "Periodic Table", css: ["normalize.css", "main.css"] });
    });

    application.get("/about", (request, response) => {
        response.render("about", { title: "About", css: ["normalize.css", "main.css"] });
    });

    await application.get("/elements/:element", (request, response) => {
        if (Object.keys(map["data"]).includes(request.params.element)) {
            response.json(elements["data"][map["data"][request.params.element]]);
        }
        else {
            response.render("404", { title: "Element Not Found", css: ["normalize.css", "main.css"], route: request.url });
        }
    });

    application.get("*", (request, response) => {
        response.render("404", { title: "Page Not Found", css: ["normalize.css", "main.css"], route: request.url });
    });

    application.listen(port);
};

startServer();