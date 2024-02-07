import headerDiv from "../pages/Restaurant-Page/header";
import home from "../pages/Restaurant-Page/home";

const firstLoad = function() {
    const body = document.querySelector("body");
    const header = headerDiv();
    body.prepend(header);
    home();
};

export default firstLoad;