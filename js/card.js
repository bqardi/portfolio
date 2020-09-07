function card() {
    let cardDetails = [{
        imageSrc: "./images/svg-icon-list.jpg",
        imageAlt: "SVG icon list",
        imagePlacement: "Top",
        title: "SVG icon list",
        text: "En kollektion af SVG ikoner, som kan sorteres/filtreres og med et enkelt klik på ikonet, kopieres til udklipsholderen.",
        gitHubLink: "",
        siteLink: "https://bqardi.dk/material-design-icons/index.html",
        keyWords: ["Privat projekt", "Værktøjer", "Mobil venlig"]
    }, {
        imageSrc: "./images/workflow-helper.jpg",
        imageAlt: "Workflow helper - Snippet generator for VSCode",
        imagePlacement: "Top",
        title: "Workflow helper",
        text: "Et avanceret, men nemt at bruge -værktøj til at lave snippets til Visual Studio Code.",
        gitHubLink: "",
        siteLink: "https://bqardi.dk/workflow-helper/index.html",
        keyWords: ["Privat projekt", "Værktøjer"]
    }, {
        imageSrc: "./images/login-eksempel.jpg",
        imageAlt: "Login eksempel",
        imagePlacement: "Top",
        title: "Login eksempel",
        text: "Et lille projekt hvor vi fik til opgave at lave et login eksempel, udfra et design givet til os i Adobe XD format.",
        gitHubLink: "https://github.com/bqardi/login-example/",
        siteLink: "https://bqardi.github.io/login-example/",
        keyWords: ["GitHub", "Skole projekt", "Mobil venlig"]
    }, {
        imageSrc: "./images/rogue-survivor.jpg",
        imageAlt: "Rogue Survivor",
        imagePlacement: "Center",
        title: "Rogue Survivor",
        text: "Et større projekt jeg har haft gang i, i et stykke tid nu. Det er et turbaseret eventyrspil, hvor du kan udføre quests, kæmpe mod monstre og udvikle din karakters spells og styrke ved hjælp af indsamlede ædelstene. Der kan også indsamles diverse andre objekter, som våben, armor, nøgler og health-potions.",
        gitHubLink: "https://github.com/bqardi/rogue-survivor/",
        siteLink: "https://bqardi.github.io/rogue-survivor/",
        keyWords: ["GitHub", "Privat projekt", "Spil", "Sjov"]
    }, {
        imageSrc: "./images/kryds-og-bolle.jpg",
        imageAlt: "Kryds og bolle",
        imagePlacement: "Top",
        title: "Kryds og bolle",
        text: "Et lille spil jeg lavede til min 7 årige søn, fordi han fandt ud af at han kunne finde ud af at spille det og fandt det sjovt.",
        gitHubLink: "https://github.com/bqardi/kryds-og-bolle",
        siteLink: "https://bqardi.github.io/kryds-og-bolle/",
        keyWords: ["GitHub", "Privat projekt", "Spil", "Sjov", "Mobil venlig"]
    }, {
        imageSrc: "./images/cph-architects.jpg",
        imageAlt: "CPH Architects",
        imagePlacement: "Top",
        title: "CPH Architects",
        text: "Et projekt fokuseret på HTML, CSS, JavaScript, responsiveness og komponenter.",
        gitHubLink: "https://github.com/bqardi/cph-architects",
        siteLink: "https://bqardi.github.io/cph-architects/",
        keyWords: ["GitHub", "Skole projekt", "Mobil venlig"]
    }, {
        imageSrc: "./images/professor.jpg",
        imageAlt: "Professor terning",
        imagePlacement: "Top",
        title: "Professor terning",
        text: "Hvordan man løser en Rubiks Cube/professor terning. En begynder metode til at løse en professor terning/Rubiks Cube på, med udførlige trin for trin forklaringer.",
        gitHubLink: "https://github.com/bqardi/professor",
        siteLink: "https://bqardi.github.io/professor/",
        keyWords: ["GitHub", "Skole projekt", "Tutorial", "Sjov", "Mobil venlig"]
    }, {
        imageSrc: "./images/quiz.jpg",
        imageAlt: "Quiz",
        imagePlacement: "Top",
        title: "Quiz",
        text: "En sjov lille quiz hvor du kan teste dit kendskab til sjov, irrelevant viden.",
        gitHubLink: "https://github.com/bqardi/quiz-example",
        siteLink: "https://bqardi.github.io/quiz-example/",
        keyWords: ["GitHub", "Skole projekt", "Sjov", "Mobil venlig"]
    }, {
        imageSrc: "./images/object-builder.jpg",
        imageAlt: "Object builder",
        imagePlacement: "Top",
        title: "Object builder",
        text: "Et værktøj der kan hjælpe med at lave JavaScript/JSON objekter med et visuelt \"node-system\". Peg og klik for at bygge dine \"nodes\", og kopiér til sidst den genererede kode.",
        gitHubLink: "",
        siteLink: "https://bqardi.dk/object-builder/index.html",
        keyWords: ["Privat projekt", "Værktøjer", "Mobil venlig"]
    }, {
        imageSrc: "./images/space-invaders-clone.jpg",
        imageAlt: "Space Invaders Clone",
        imagePlacement: "Top",
        title: "Space Invaders Clone",
        text: "Et lille Space Invaders klon spil, lavet i JavaScript med <a class=\"card__link\" href=\"https://svgjs.com/docs/3.0/\">svg.js</a> framework.",
        gitHubLink: "",
        siteLink: "https://bqardi.dk/spaceinvaders/index.php",
        keyWords: ["Skole projekt", "Spil", "Sjov"]
    }, {
        imageSrc: "./images/svg-mini-tutorial.jpg",
        imageAlt: "SVG mini tutorial",
        imagePlacement: "Top",
        title: "SVG mini tutorial",
        text: "En kort og nem introduktion til SVG filer og brugen af dem.",
        gitHubLink: "",
        siteLink: "https://bqardi.dk/tutorials/html/svg/index.php",
        keyWords: ["Privat projekt", "Tutorial"]
    }, {
        imageSrc: "./images/lego-klods-major.jpg",
        imageAlt: "Lego klods major",
        imagePlacement: "Center",
        title: "Lego klods major",
        text: "En lille video af nogle lego mænd der er temmelig klodsede. Et projekt jeg havde da jeg gik på Digital Media GF2. Legomændene er lavet i 3D programmet Maya",
        gitHubLink: "",
        siteLink: "https://bqardi.dk/dmgf2-videoer/index.html",
        keyWords: ["Skole projekt", "Sjov", "3D", "Video"]
    }, {
        imageSrc: "./images/lego-fun.jpg",
        imageAlt: "Lego fun",
        imagePlacement: "Center",
        title: "Lego fun",
        text: "Et lille 3D program jeg har lavet i Unity hvor du kan bygge med legoklodser",
        gitHubLink: "",
        siteLink: "https://bqardi.dk/unity-games/lego-fun/index.html",
        keyWords: ["Skole projekt", "Sjov", "3D"]
    }, ]

    let keyWords = [];

    let cardTemplate = document.getElementById("cardTemplate");
    let keyWordContainer = document.querySelector(".keyWordButtons");
    let container = document.getElementById("cardContainer");

    keyWords.push("Vis alle");

    cardDetails.forEach(cardDetail => {
        let clonedElement = cardTemplate.content.cloneNode(true);
        createCard(container, clonedElement, cardDetail);
        pushUnique(cardDetail.keyWords);
    });

    keyWords.forEach((keyWord, index) => {
        let keyWordElement = document.createElement("A");
        keyWordElement.classList.add("keyWord");
        if (index === 0) {
            keyWordElement.classList.add("js-selected");
        }
        keyWordElement.href = "#";
        keyWordElement.textContent = keyWord;
        keyWordContainer.appendChild(keyWordElement);
    });

    keyWordContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("keyWord")) {
            event.preventDefault();
            for (let i = 0; i < keyWordContainer.children.length; i++) {
                const keyWordBtn = keyWordContainer.children[i];
                if (keyWordBtn.classList.contains("keyWord")) {
                    keyWordBtn.classList.remove("js-selected");
                }
            }
            cardDetails.forEach(cardDetail => {
                event.target.classList.add("js-selected");
                if (event.target.textContent === "Vis alle" || cardDetail.keyWords.includes(event.target.textContent)) {
                    cardDetail.element.classList.remove("js-hidden");
                } else {
                    cardDetail.element.classList.add("js-hidden");
                }
            });
        }
    })

    function createCard(container, clonedElement, cardDetail) {
        let img = clonedElement.querySelector(".header__image");
        img.src = cardDetail.imageSrc;
        img.alt = cardDetail.title;
        img.classList.add("image" + cardDetail.imagePlacement);

        clonedElement.querySelector(".content__title").textContent = cardDetail.title;
        clonedElement.querySelector(".content__text").innerHTML = cardDetail.text;

        clonedElement.querySelector(".goTo").href = cardDetail.siteLink;

        let gitHubLink = clonedElement.querySelector(".gitHub");
        if (cardDetail.gitHubLink === "") {
            gitHubLink.remove();
        } else {
            gitHubLink.href = cardDetail.gitHubLink;
        }

        cardDetail.element = clonedElement.querySelector(".card");
        container.appendChild(clonedElement);
    }

    function pushUnique(arr) {
        arr.forEach(arrStr => {
            if (!keyWords.includes(arrStr)) {
                keyWords.push(arrStr);
            }
        });
    }
}

export default card;