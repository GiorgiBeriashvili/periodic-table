import elements from "./../data/elements.json";

// eslint-disable-next-line no-unused-vars
export const randomAttribute = () => {
    let attributes = ["atomic-mass", "boil", "density", "melt", "molar-heat", "number", "period", "x-position", "y-position"];

    return attributes[Math.floor(Math.random() * attributes.length)];
};

// eslint-disable-next-line no-unused-vars
export const randomChart = () => {
    let charts = ["line", "bar", "radar", "doughnut", "polarArea"];

    return charts[Math.floor(Math.random() * charts.length)];
};

// eslint-disable-next-line no-unused-vars
export const randomColor = () => {
    let maximum = 255 + 1;

    let red = Math.floor(Math.random() * Math.floor(maximum));
    let green = Math.floor(Math.random() * Math.floor(maximum));
    let blue = Math.floor(Math.random() * Math.floor(maximum));

    let alpha = Math.random();

    if (alpha <= 5) {
        alpha += 0.5;
    }

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

// eslint-disable-next-line no-unused-vars
export const randomElement = () => {
    const lengthOfElements = elements["data"].length;

    return Math.floor(Math.random() * Math.floor(lengthOfElements));
};