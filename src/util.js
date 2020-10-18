function create(args) {
    const element = document.createElement(args.type);
    setID(element, args.id);
    setCl(element, args.cl);
    setSrc(element, args.src);
    setTextContent(element, args.textContent);
    addEL(element, args.eventListener);

    args.parent.appendChild(element);
    return element;
}

function setID(element, id) {
    if(id !== undefined) {
        element.setAttribute("id", id);
    }
}

function setCl(element, cl) {
    if(cl !== undefined) {
        element.setAttribute("class", cl);
    }
}

function setTextContent(element, textContent) {
    if(textContent !== undefined) {
        element.textContent = textContent;
    }
}

function setSrc(element, src) {
    if(src !== undefined) {
        element.setAttribute("src", src);
    }
}

function addEL(element, eventListener) {
    if(eventListener !== undefined) {
        element.addEventListener(eventListener.type, eventListener.callback);
    }
}

//Delete all children of a node
function clear(node) {
    node.querySelectorAll("*").forEach(child => {
        child.remove();
    });
}

function setActiveTab(id) {
    const tabs = ["intro-tab", "menu-tab", "contact-tab"];
    tabs.forEach(tabID => {
        const tab = document.getElementById(tabID);
        if(tabID === id) {
            if(tab.classList.contains("tab")){
                tab.classList.replace("tab", "tab-highlight");
            }
        } else {
            if(tab.classList.contains("tab-highlight")) {
                tab.classList.replace("tab-highlight", "tab");
            }
        }
    });
}

export default create;
export {clear, setActiveTab};