/* eslint-disable no-console */
import fetch from "node-fetch";
import map from "./../data/map.json";

// // Homepage
// fetch("http://localhost:8080")
//     .then(response => response.text())
//     .then(body => console.log(body));

// // Valid route
// fetch("http://localhost:8080/about")
//     .then(response => response.text())
//     .then(body => console.log(body));

// // Invalid route
// fetch("http://localhost:8080/404")
//     .then(response => response.text())
//     .then(body => console.log(body));

// JSON
const getElement = () => {
    const elements = Object.keys(map["data"]);

    return elements[Math.floor(Math.random() * elements.length)];
};

const getURL = (element) => {
    return `http://localhost:8080/elements/${element}`;
};

const printData = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(`\nHi! I am ${data["name"]} and I have ${data["number"]} protons in my atomic nuclei!`);
        });
};

const element = getElement();
const url = getURL(element);
printData(url);