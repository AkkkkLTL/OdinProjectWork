import createHtmlElement from "../../functions/element";
import render from "../../functions/render";
import menu from "./menu";

const home = function () {
  const $content = document.querySelector("#content");

  const $main = createHtmlElement({
    type: "main",
    id: "main",
    arrayClasses: ["content-center"],
  });

  const $bienvenidos = createHtmlElement({
    type: "p",
    arrayClasses: ["cursive", "golden"],
    content: "Bienvenidos",
  });
  $main.appendChild($bienvenidos);

  const $title = createHtmlElement({
    type: "h1",
    arrayClasses: ["white"],
    content: "La panaderia",
  });
  $main.appendChild($title);

  const $hr = createHtmlElement({
    type: "hr",
  });
  $main.appendChild($hr);

  const $subtitle = createHtmlElement({
    type: "p",
    arrayClasses: ["text-center", "white"],
    content: "El placer de comer con las manos. Bien tierruo!",
  });
  $main.appendChild($subtitle);

  const $button = createHtmlElement({
    type: "button",
    content: "Ver el menu",
  });
  $button.addEventListener("click", () => {
    // Clearing content
    render();
    // Load menu page
    menu();
  });
  $main.appendChild($button);

  $content.appendChild($main);
};

export default home;
