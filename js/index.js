import card from "./card.js";
import game from "./game.js";
import mainMenu from "./main-menu.js";
import modal from "./modal.js";

let showAllCards;

fetch("../data/cards.json")
    .then(function(response) {
        if (!response.ok) {
            console.log("Noget gik galt!");
            return;
        }
        return response.json();
    })
    .then(function(data) {
        showAllCards = card(data.cards);
    });

let menu = mainMenu();

modal(function(state) {
    if (state === "displayed") {
        menu.close();
        onSettingsDisplay();
    }
    if (state === "cancelled") {
        onSettingsCancel();
    }
    if (state === "accepted") {
        onSettingsAccept();
    }
});

// game();

let settingsContainer = document.querySelector(".settingsContainer");
let settingsVideoSoundLabel = settingsContainer.querySelector(".settingsVideoSoundLabel");
let settingsVolume = settingsVideoSoundLabel.querySelector(".settingsVolume");

let hero = document.querySelector(".hero");
let heroVideo = hero.querySelector(".heroVideo");
let keyWords = document.querySelector(".keyWords");

let tabs = document.querySelectorAll(".modal .tab");

let settingsDisplayed = false;
let activeElementIndex = 0;
let heroVideoVolume = 0;
let fadeDuration = 2000;
let startTime = 0;

settingsPlayVideo.addEventListener("click", function() {
    settingsVideoSoundLabel.classList.toggle("js-disabled");
    settingsVideoSound.disabled = !this.checked;
});
settingsVideoSound.addEventListener("input", function() {
    settingsVolume.textContent = this.value;
    heroVideo.volume = this.value / 100;
});
document.addEventListener("keydown", function(event) {
    if (!settingsDisplayed) {
        return;
    }
    if (event.key === "Tab") {
        event.preventDefault();
        if (event.shiftKey) {
            previousElement();
        } else {
            nextElement();
        }
    }
});

heroVideo.muted = false;
heroVideo.volume = 0;

function onSettingsDisplay() {
    activeElementIndex = 0;
    settingsDisplayed = true;
    restoreInputValues();
    activateTabElement(activeElementIndex);
}

function nextElement() {
    activeElementIndex++;
    if (activeElementIndex >= tabs.length) {
        activeElementIndex = 0;
    }
    if (tabs[activeElementIndex].disabled) {
        nextElement();
    }
    activateTabElement();
}

function previousElement() {
    activeElementIndex--;
    if (activeElementIndex < 0) {
        activeElementIndex = tabs.length - 1;
    }
    if (tabs[activeElementIndex].disabled) {
        previousElement();
    }
    activateTabElement();
}

function activateTabElement() {
    tabs.forEach(tab => {
        tab.setAttribute("tabindex", "-1");
        if (tab.tagName === "INPUT") {
            tab.parentElement.classList.remove("js-active");
        }
    });
    if (tabs[activeElementIndex].tagName === "INPUT") {
        tabs[activeElementIndex].parentElement.classList.add("js-active");
    }
    tabs[activeElementIndex].setAttribute("tabindex", "0");
    tabs[activeElementIndex].focus();
}

function onSettingsCancel() {
    if (heroVideo.volume != heroVideoVolume) {
        fadeVolume();
    }
    settingsDisplayed = false;
}

function onSettingsAccept() {
    if (settingsPlayVideo.checked) {
        heroVideoVolume = settingsVideoSound.value / 100;
        hero.classList.remove("js-hidden");
        heroVideo.play();
    } else {
        hero.classList.add("js-hidden");
        heroVideo.pause();
    }
    if (settingsSortByKeywords.checked) {
        keyWords.classList.remove("js-hidden");
    } else {
        keyWords.classList.add("js-hidden");
        showAllCards();
    }
    onSettingsCancel();
}

function fadeVolume() {
    startTime = new Date().getTime();
    runAnimationFrames();
}

function restoreInputValues() {
    settingsPlayVideo.checked = !hero.classList.contains("js-hidden");
    let volume = Math.round(heroVideo.volume * 100);
    settingsVolume.textContent = volume;
    settingsVideoSound.disabled = !settingsPlayVideo.checked;
    settingsVideoSound.value = volume;
    if (settingsVideoSound.disabled) {
        settingsVideoSoundLabel.classList.add("js-disabled");
    } else {
        settingsVideoSoundLabel.classList.remove("js-disabled");
    }
    settingsSortByKeywords.checked = !keyWords.classList.contains("js-hidden");
}

function lerp(from, to, t) {
    const range = to - from;
    const current = range * t + from;
    return current;
}

function runAnimationFrames() {
    if (startTime === 0) {
        return;
    }
    let currentTime = new Date().getTime();
    let elapsed = currentTime - startTime;
    if (elapsed >= fadeDuration) {
        heroVideo.volume = heroVideoVolume;
        startTime = 0;
        return;
    }
    let t = 1 / fadeDuration * elapsed;
    let volumeAdjustment = lerp(heroVideo.volume, heroVideoVolume, t);
    heroVideo.volume = volumeAdjustment;

    requestAnimationFrame(runAnimationFrames);
}