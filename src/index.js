import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { join } from "path";
import handlebars from "express-handlebars";

import elements from "./data/elements.json";
import map from "./data/map.json";

const application = express();
const port = process.env.PORT || 8080;

application.engine("handlebars", handlebars());
application.set("view engine", "handlebars");
application.set("views", join(__dirname, "/../public/views"));
application.use(express.static(join(__dirname, "/../public/static")));
application.use(bodyParser.urlencoded({ extended: false }));

const startServer = async () => {
    application.get("/", (request, response) => {
        response.render("index", { title: "Periodic Table", css: ["main.css", "aesthetic.css", "periodic-table.css", "normalize.css"] });
    });

    application.get("/statistics", (request, response) => {
        response.render("statistics", { title: "Statistics", css: ["normalize.css", "main.css"], script: ["https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"] });
    });

    application.get("/about", (request, response) => {
        response.render("about", { title: "About", css: ["normalize.css", "main.css"] });
    });

    application.get("/contact", (request, response) => {
        response.render("contact", { title: "Contact", css: ["normalize.css", "main.css", "contact.css", "aesthetic.css"] });
    });

    application.post("/send-contact", (request, response) => {
        response.render("send-contact", { title: "Send contact", css: ["normalize.css", "main.css", "contact.css", "aesthetic.css"], firstName: request.body.name, lastName: request.body.surname, email: request.body.email, company: request.body.company, phone: request.body.phone, message: request.body.message });
    });

    application.get("/author", (request, response) => {
        response.render("author", { title: "About", css: ["normalize.css", "main.css", "aesthetic.css"] });
    });

    await application.get("/elements/:element", cors(), (request, response) => {
        if (Object.keys(map["data"]).includes(request.params.element)) {
            response.json(elements["data"][map["data"][request.params.element]]);
        }
        else {
            response.render("404", {
                title: "Element Not Found", css: ["normalize.css", "main.css", "aesthetic.css"], route: request.url, message: `<p><em><b>${request.params.element}</b></em> could not be found in the list of known elements.</p>`
            });
        }
    });

    application.get("*", (request, response) => {
        response.render("404", { title: "Page Not Found", css: ["normalize.css", "main.css", "aesthetic.css"], route: request.url });
    });

    application.listen(port);
};

startServer();