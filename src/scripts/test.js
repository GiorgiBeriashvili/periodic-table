/* eslint-disable no-console */
import fetch from "node-fetch";

// Homepage
fetch("http://localhost:8080")
    .then(response => response.text())
    .then(body => console.log(body));

// Valid route
fetch("http://localhost:8080/about")
    .then(response => response.text())
    .then(body => console.log(body));

// Invalid route
fetch("http://localhost:8080/404")
    .then(response => response.text())
    .then(body => console.log(body));

// JSON
fetch("http://localhost:8080/elements/hydrogen")
    .then(response => response.json())
    .then(json => console.log(json));