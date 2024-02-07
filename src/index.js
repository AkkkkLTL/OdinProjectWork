import "./styles/Restaurant-Page/common.css";
import "./styles/Restaurant-Page/header.css";
import "./styles/Restaurant-Page/home.css";
import "./styles/Restaurant-Page/menu.css";

import firstLoad from "./functions/firstLoad";
import render from "./functions/render";
import about from "./pages/Restaurant-Page/about";
import home from "./pages/Restaurant-Page/home";
import menu from "./pages/Restaurant-Page/menu";

firstLoad();

const $homeButton = document.querySelector("#home-web");
const $menuButton = document.querySelector("#menu-web");
const $aboutButton = document.querySelector("#about-web");

$homeButton.addEventListener("click", () =>{
    // Clearing content childnode
    render();
    home();
});

$menuButton.addEventListener("click", () =>{
    render();
    menu();
});

$aboutButton.addEventListener("click", () =>{
    render();
    about();
});