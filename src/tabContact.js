import create from "./util";

function displayContact() {
    const textContainer = document.getElementById("text-container");
    const addressText = create({
        type: "p",
        textContent: "Address: 123 Restaurant Street",
        parent: textContainer
    });
    const emailText = create({
        type: "p",
        textContent: "Email: restaurant@restaurant.com",
        parent: textContainer
    });
    const phoneText = create({
        type: "p",
        textContent: "Phone: 01 2345 6789",
        parent: textContainer
    });

}

export default displayContact;