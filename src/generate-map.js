import elements from "./data/elements.json";
import fs from "fs";

const lengthOfElements = elements["data"].length;

const getElements = () => {
    let elementArray = [];

    for (let index = 0; index < lengthOfElements; index++) {
        elementArray.push(elements["data"][index].name.toLowerCase());
    }

    return elementArray;
};

const writeToJSON = (elementArray) => {
    let file = {};
    let data = {};

    file.data = data;

    for (let index = 0; index < lengthOfElements; index++) {
        data[elementArray[index]] = index;
    }

    fs.writeFile("./src/data/map.json", JSON.stringify(file, null, 4), function (error) {
        if (error) {
            throw error;
        }
    });
};

const generateMap = () => {
    writeToJSON(getElements());
};

generateMap();