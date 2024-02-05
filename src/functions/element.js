const createHtmlElement = function(obj) {
    const element = document.createElement(obj.type);
    if(obj.id) element.id = obj.id;
    if(obj.arrayClasses)
        obj.arrayClasses.forEach((myClass) => element.classList.add(myClass));
    if(obj.content) element.textContent = obj.content;

    return element;
}

export default createHtmlElement;