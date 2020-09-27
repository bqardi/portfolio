function card(cardDetails) {
    let keyWords = [];

    let cardTemplate = document.getElementById("cardTemplate");
    let keyWordContainer = document.querySelector(".keyWordButtons");
    let cardContainer = document.getElementById("cardContainer");

    let showAllButton = createKeyWordButton("Alle");
    showAllButton.classList.add("js-selected");

    cardDetails.forEach(cardDetail => {
        let clonedElement = cardTemplate.content.cloneNode(true);
        createCard(cardContainer, clonedElement, cardDetail);
        keyWords.push(...cardDetail.keyWords);
    });

    keyWords = Array.from(new Set(keyWords));

    keyWords.forEach(keyWord => {
        createKeyWordButton(keyWord);
    });

    keyWordContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("keyWord")) {
            event.preventDefault();
            filterCards(event.target);
        }
    });

    document.querySelector(".js-gridView").addEventListener("click", function(event){
        event.preventDefault();
        cardContainer.classList.remove("js-list");
    });

    document.querySelector(".js-listView").addEventListener("click", function(event){
        event.preventDefault();
        cardContainer.classList.add("js-list");
    });

    document.addEventListener("click", zoomCancel);

    function createKeyWordButton(keyWord) {
        let keyWordElement = document.createElement("A");
        keyWordElement.classList.add("keyWord");
        keyWordElement.setAttribute("aria-label", "Filtrering efter " + keyWord);
        keyWordElement.href = "#";
        keyWordElement.textContent = keyWord;
        keyWordContainer.appendChild(keyWordElement);
        return keyWordElement;
    }

    function filterCards(target) {
        for (let i = 0; i < keyWordContainer.children.length; i++) {
            const keyWordBtn = keyWordContainer.children[i];
            if (keyWordBtn.classList.contains("keyWord")) {
                keyWordBtn.classList.remove("js-selected");
            }
        }
        target.classList.add("js-selected");
        cardDetails.forEach(cardDetail => {
            if (target.textContent === "Alle" || cardDetail.keyWords.includes(target.textContent)) {
                cardDetail.element.classList.remove("js-hidden");
            } else {
                cardDetail.element.classList.add("js-hidden");
            }
        });
    }

    function createCard(container, clonedElement, cardDetail) {
        let img = clonedElement.querySelector(".header__image");
        img.src = cardDetail.imageSrc;
        img.alt = cardDetail.title;
        img.classList.add("image" + cardDetail.imagePlacement);

        let imgContainer = clonedElement.querySelector(".card__header");
        imgContainer.addEventListener("mousemove", zoomMove);
        imgContainer.addEventListener("click", zoomStart);

        let keyWordContainer = clonedElement.querySelector(".card__keyWords");
        cardDetail.keyWords.forEach((keyWord, index) => {
            keyWordContainer.innerHTML += index === 0 ? `<span aria-label="Kategori: ${keyWord}">${keyWord}</span>` : `<span class="card__separator"> | </span><span aria-label="Kategori: ${keyWord}">${keyWord}</span>`;
        });

        clonedElement.querySelector(".content__title").textContent = cardDetail.title;
        clonedElement.querySelector(".content__text").innerHTML = cardDetail.text;

        let gitHubLink = clonedElement.querySelector(".gitHub");
        if (cardDetail.gitHubLink === "") {
            gitHubLink.remove();
        } else {
            gitHubLink.href = cardDetail.gitHubLink;
            gitHubLink.setAttribute("aria-label", `${cardDetail.title} - Se koden i mit repository på GitHub`);
            gitHubLink.setAttribute("title", `${cardDetail.title} - Se koden i mit repository på GitHub`);
        }

        let goToLink = clonedElement.querySelector(".goTo")
        goToLink.href = cardDetail.siteLink;
        goToLink.setAttribute("aria-label", `Gå til "${cardDetail.title}" -site.`);
        goToLink.setAttribute("title", `Se "${cardDetail.title}" live på ${cardDetail.siteLink}`);

        cardDetail.element = clonedElement.querySelector(".card");

        container.appendChild(clonedElement);
    }

    let img = null;
    let imgContainer = null;
    let timeout = null;
    let transitionTime = 300;

    function zoomStart(event) {
        if (timeout) {
            clearTimeout(timeout);
        }
        if (img) {
            return;
        }
        if (event.target.classList.contains("card__header")) {
            event.stopPropagation();
            imgContainer = event.target;
            img = imgContainer.querySelector(".header__image");
            img.style.transform = `scale(2)`;

            let mouse = zoomCoordinates(event);

            if (!mouse) {
                return;
            }

            img.style.left = `${mouse.x}px`;
            img.style.top = `${mouse.y}px`;

            imgContainer.style.cursor = "zoom-out";

            img.style.transition = `all ${transitionTime}ms`;
            setTimeout(() => {
                img.style.transition = `transform ${transitionTime}ms`;
            }, transitionTime);
        }
    }

    function zoomMove(event) {
        if (event.target.classList.contains("card__header")) {
            if (event.target.querySelector(".header__image") != img) {
                return;
            }
            let mouse = zoomCoordinates(event);

            if (!mouse) {
                return;
            }

            img.style.left = `${mouse.x}px`;
            img.style.top = `${mouse.y}px`;
        }
    }

    function zoomCancel() {
        if (timeout) {
            clearTimeout(timeout);
        }
        if (img) {
            img.style.transform = `scale(1)`;
            img.style.left = 0;
            img.style.top = 0;
            img.style.transition = `all 300ms`;
            img = null;

            imgContainer.removeAttribute("style");
            imgContainer = null;
        }
    }

    function zoomCoordinates(event) {
        if (!img) {
            return false;
        }
        let x = ((event.offsetX * -2 + img.offsetWidth) / 2) * 1.4;
        let y = ((event.offsetY * -2 + img.offsetHeight) / 2) * 1.4;
        return { x, y };
    }

    return function() {
        filterCards(showAllButton);
    }
}

export default card;