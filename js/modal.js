function modal(onState) {
    let settings = document.querySelector(".settings");
    let modalBackground = document.querySelector(".modal");
    let modalWindow = document.querySelector(".modal__window");
    let modalClose = document.querySelector(".modal__close");
    let modalLink = document.querySelector(".modal__link");

    let modalDisplayed = false;
    let activeElement;

    settings.addEventListener("click", function(event) {
        event.preventDefault();
        activeElement = document.activeElement;
        onState("displayed");
        modalBackground.classList.add("js-active");
        modalDisplayed = true;
    });
    modalBackground.addEventListener("click", function(event) {
        event.preventDefault();
        onState("cancelled");
        closeModal();
    });
    modalClose.addEventListener("click", function(event) {
        event.preventDefault();
        onState("cancelled");
        closeModal();
    });
    modalWindow.addEventListener("click", function(event) {
        event.stopPropagation();
    });
    modalLink.addEventListener("click", function(event) {
        event.preventDefault();
        onState("accepted");
        closeModal();
    });
    document.addEventListener("keydown", function(event) {
        if (!modalDisplayed) {
            return;
        }
        if (event.key === "Escape") {
            onState("cancelled");
            closeModal();
        }
    });

    function closeModal() {
        modalBackground.classList.remove("js-active");
        modalDisplayed = false;
        activeElement.focus();
    }
}

export default modal;