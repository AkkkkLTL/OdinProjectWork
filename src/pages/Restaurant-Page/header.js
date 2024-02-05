import createHtmlElement from "../../functions/element";

const headerDiv = function() {
    const header = createHtmlElement({
        type: "header",
        id: "header"
    });

    const $nav = createHtmlElement({
        type: "ul",
        id: "header-nav"
    })

    // Creating home page label
    const homeWeb = createHtmlElement({
        type: "li",
        content: "HOME",
        id: "home-web"
    });
    $nav.appendChild(homeWeb);

    // Creating menu page label
    const menuWeb = createHtmlElement({
        type: "li",
        content: "MENU",
        id: "menu-web"
    });
    $nav.appendChild(menuWeb);

    // Creating about page label
    const aboutWeb = createHtmlElement({
        type: "li",
        content: "ABOUT",
        id: "about-web"
    });
    $nav.appendChild(aboutWeb);

    header.appendChild($nav);

    return header;
}

export default headerDiv;