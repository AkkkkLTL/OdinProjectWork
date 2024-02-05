import createHtmlElement from "../../functions/element";

const about = function() {
    const $content = document.querySelector("#content");

    const $main = createHtmlElement({
        type: "main",
        id: "main",
        arrayClasses: ["bg-white"]
    });

    const $bienvenidos = createHtmlElement({
        type: "p",
        arrayClasses: ["cursive", "golden"],
        content: "Bienvenidos"
    });
    $main.appendChild($bienvenidos);

    const $title = createHtmlElement({
        type: "h1",
        arrayClasses: ["gray"],
        content: "Nosotros"
    });
    $main.appendChild($title);

    const $hr = createHtmlElement({
        type: "hr"
    });
    $main.appendChild($hr);

    const $p = createHtmlElement({
        type: "p",
        arrayClasses: ["menu-item"],
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga velit labore perspiciatis, quidem deleniti iusto? Similique voluptatum cupiditate modi, error nihil ex libero praesentium odit sequi doloribus suscipit nisi rem."
    })
    $main.appendChild($p);

    $content.appendChild($main);
}

export default about;