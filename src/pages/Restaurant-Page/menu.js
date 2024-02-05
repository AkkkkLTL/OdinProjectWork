import createHtmlElement from "../../functions/element";

const menuItem = [
    {
        name: "Pan canilla",
        desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price: "$20"
    },
    {
        name: "Pan sobado",
        desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price: "$25"
    },
    {
        name: "Pan Andino",
        desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price: "$33"
    }
]

const menu = function() {
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
        content: "Menu"
    });
    $main.appendChild($title);

    const $hr = createHtmlElement({
        type: "hr"
    });
    $main.appendChild($hr);

    menuItem.forEach((item) => {
        const $div = createHtmlElement({
            type: "div",
            arrayClasses: ["menu-item"]
        });
        
        const $name = createHtmlElement({
            type: "h2",
            arrayClasses: ["golden"],
            content: item.name
        });
        $div.appendChild($name);

        const $description = createHtmlElement({
            type: "p",
            arrayClasses: ["gray"],
            content: item.desription
        });
        $div.appendChild($description);

        const $price = createHtmlElement({
            type: "h2",
            arrayClasses: ["golden"],
            content: item.price
        });
        $div.appendChild($price);

        const $hr = createHtmlElement({
            type: "hr",
            arrayClasses: ["menu-hr"]
        });
        $div.appendChild($hr);

        $main.appendChild($div);
    });

    $content.appendChild($main);
}

export default menu;