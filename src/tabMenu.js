import create from "./util";

function displayMenu() {
    const textContainer = document.getElementById("text-container");
    const menuList = create({
        type: "ul",
        parent: textContainer
    });
    menuItems.forEach(item => {
        create({
            type: "li",
            textContent: item,
            parent: menuList
        })
    });
}

const menuItems = [
    "Pasta",
    "Pizza",
    "Sandwiches",
    "Cheese platter",
    "Coffee",
    "Ice cream",
    "Cake"
]

export default displayMenu;