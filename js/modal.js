function modal(onState) {
    let settings = document.querySelector(".settings");
    let modalBackground = document.querySelector(".modal");
    let modalWindow = document.querySelector(".modal__window");
    let modalClose = document.querySelector(".modal__close");
    let modalLink = document.querySelector(".modal__link");

    settings.addEventListener("click", function(event) {
        event.preventDefault();
        onState("displayed");
        modalBackground.classList.add("js-active");
    });
    modalBackground.addEventListener("click", function(event) {
        event.preventDefault();
        modalBackground.classList.remove("js-active");
        onState("cancelled");
    });
    modalClose.addEventListener("click", function(event) {
        event.preventDefault();
        modalBackground.classList.remove("js-active");
        onState("cancelled");
    });
    modalWindow.addEventListener("click", function(event) {
        event.stopPropagation();
    });
    modalLink.addEventListener("click", function(event) {
        event.preventDefault();
        modalBackground.classList.remove("js-active");
        onState("accepted");
    });
}

export default modal;