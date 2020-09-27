function mainMenu() {
    let menuNavigation = document.querySelector(".menu__navigation");
    let burgerButton = document.querySelector(".burger__link");
    let menuLinks = menuNavigation.querySelectorAll(".menu__link");

    let menuObj = {
        displayed: false,
        activeLinkIndex: 0,
        toggle() {
            this.displayed = !this.displayed;
            menuNavigation.classList.toggle("js-hidden");
            if (this.displayed) {
                this.activeLinkIndex = menuLinks.length;
                activateLink(burgerButton);
            } else {
                setLinkTabindex();
                burgerButton.removeAttribute("tabindex");
            }
        },
        close() {
            this.displayed = false;
            menuNavigation.classList.add("js-hidden");
            setLinkTabindex();
            burgerButton.removeAttribute("tabindex");
        }
    }

    menuNavigation.addEventListener("click", function() {
        menuObj.close();
        burgerButton.focus();
    });

    burgerButton.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        menuObj.toggle();
    });

    document.addEventListener("click", menuObj.close);

    document.addEventListener("keydown", function(event) {
        if (!menuObj.displayed) {
            return;
        }
        if (event.key === "Escape") {
            menuObj.close();
            burgerButton.focus();
        }
        if (event.key === "Tab") {
            event.preventDefault();
            if (event.shiftKey) {
                previousLinkIndex();
            } else {
                nextLinkIndex();
            }
        }
    });

    window.addEventListener("resize", setLinkTabindex);

    setLinkTabindex();

    function setLinkTabindex() {
        if (innerWidth <= 720) {
            deactivateLinks();
        } else {
            activateLinks();
        }
    }

    function activateLink(element) {
        deactivateLinks();
        element.setAttribute("tabindex", "0");
        element.focus();
    }

    function deactivateLinks() {
        menuLinks.forEach(function(menuLink) {
            menuLink.setAttribute("tabindex", "-1");
        });
    }

    function activateLinks() {
        menuLinks.forEach(function(menuLink) {
            menuLink.setAttribute("tabindex", "0");
        });
    }

    function nextLinkIndex() {
        menuObj.activeLinkIndex++;
        if (menuObj.activeLinkIndex > menuLinks.length) {
            menuObj.activeLinkIndex = 0;
        }
        if (menuObj.activeLinkIndex === menuLinks.length) {
            activateLink(burgerButton);
        } else {
            burgerButton.setAttribute("tabindex", "-1");
            activateLink(menuLinks[menuObj.activeLinkIndex]);
        }
    }

    function previousLinkIndex() {
        menuObj.activeLinkIndex--;
        if (menuObj.activeLinkIndex < 0) {
            menuObj.activeLinkIndex = menuLinks.length;
            activateLink(burgerButton);
            return;
        }
        burgerButton.setAttribute("tabindex", "-1");
        activateLink(menuLinks[menuObj.activeLinkIndex]);
    }

    return menuObj;
}
export default mainMenu;