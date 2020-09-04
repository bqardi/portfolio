function mainMenu() {
    let menuNavigation = document.querySelector(".menu__navigation");
    let burgerButton = document.querySelector(".burger__link");
    burgerButton.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        menuNavigation.classList.toggle("js-hidden");
    });
    document.addEventListener("click", function() {
        menuNavigation.classList.add("js-hidden");
    });
}
export default mainMenu;