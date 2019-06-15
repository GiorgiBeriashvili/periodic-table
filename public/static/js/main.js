/* eslint-disable no-unused-vars */
const handleClick = (element) => {
    window.location.href = `http://localhost:8080/elements/${element.title.toLowerCase()}`;
};

const fillContactForm = () => {
    const contactForm = document.querySelector("#contact-form");
    const inputs = contactForm.children;

    const firstName = inputs[0];
    const lastName = inputs[1];
    const email = inputs[2];
    const company = inputs[3];
    const phone = inputs[4];
    const message = inputs[5];

    firstName.lastElementChild.value = "Anon";
    lastName.lastElementChild.value = "Ymous";
    email.lastElementChild.value = "anon.ymous@example.com";
    company.lastElementChild.value = "Anonymous";
    phone.lastElementChild.value = "112";
    message.lastElementChild.value = "This site sucks.";
};

const clearContactForm = () => {
    const contactForm = document.querySelector("#contact-form");
    const inputs = contactForm.children;

    const firstName = inputs[0];
    const lastName = inputs[1];
    const email = inputs[2];
    const company = inputs[3];
    const phone = inputs[4];
    const message = inputs[5];

    firstName.lastElementChild.value = null;
    lastName.lastElementChild.value = null;
    email.lastElementChild.value = null;
    company.lastElementChild.value = null;
    phone.lastElementChild.value = null;
    message.lastElementChild.value = null;
};