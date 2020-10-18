import create from "./util";
import {clear, setActiveTab} from "./util";
import displayIntro from "./tabIntro";
import displayMenu from "./tabMenu";
import displayContact from "./tabContact"

function init() {

    const content = document.getElementById("content");

    const header = create({
        type: "div",
        id: "header",
        parent: content
    });

        const h1 = create({
            type: "h1",
            textContent: "Restaurant Page",
            parent: header
        });

        const img = create({
            type: "img",
            src: "imgs/restaurant.jpg",
            parent: header
        });

        const mainContent = create({
            type: "div",
            id: "main-content",
            parent: content
        });
    
            const tabContainer = create({
                type: "div",
                id: "tab-container",
                parent: mainContent
            });
    
                const tab1 = create({
                    type: "div",
                    cl: "tab-highlight",
                    id: "intro-tab",
                    eventListener: {
                        type: "click",
                        callback: () => {
                            const textContainer = document.getElementById("text-container");
                            clear(textContainer);
                            displayIntro();
                            setActiveTab("intro-tab");
                        }
                    },
                    parent: tabContainer
                });
                    
                    const span1 = create({
                        type: "span",
                        textContent: "TAB 1",
                        parent: tab1
                    });
    
    
                const tab2 = create({
                    type: "div",
                    cl: "tab",
                    id: "menu-tab",
                    eventListener: {
                        type: "click",
                        callback: () => {
                            const textContainer = document.getElementById("text-container");
                            clear(textContainer);
                            displayMenu();
                            setActiveTab("menu-tab");
                        }
                    },
                    parent: tabContainer
                });
                    
                    const span2 = create({
                        type: "span",
                        textContent: "TAB 2",
                        parent: tab2
                    });
                    
                const tab3 = create({
                    type: "div",
                    cl: "tab",
                    id: "contact-tab",
                    eventListener: {
                        type: "click",
                        callback: () => {
                            const textContainer = document.getElementById("text-container");
                            clear(textContainer);
                            displayContact();
                            setActiveTab("contact-tab");
                        }
                    },
                    parent: tabContainer
                });
                    
                    const span3 = create({
                        type: "span",
                        textContent: "TAB 3",
                        parent: tab3
                    });
            
            const textContainer = create({
                type: "div",
                id: "text-container",
                parent: mainContent
            });

    displayIntro();
};

export default init;

