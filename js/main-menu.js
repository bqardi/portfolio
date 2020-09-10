function mainMenu() {
    let menuNavigation = document.querySelector(".menu__navigation");
    let burgerButton = document.querySelector(".burger__link");

    let obj = {
        toggle() {
            menuNavigation.classList.toggle("js-hidden");
        },
        close() {
            menuNavigation.classList.add("js-hidden");
        }
    }

    burgerButton.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        obj.toggle();
    });
    document.addEventListener("click", function() {
        obj.close();
    });
    return obj;
}
export default mainMenu;