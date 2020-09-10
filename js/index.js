import card from "./card.js";
import mainMenu from "./main-menu.js";
import modal from "./modal.js";
card();
let menu = mainMenu();
modal(function(state) {
    if (state === "displayed") {
        menu.close();
    }
    if (state === "accepted") {
        updateSettings();
    }
});

let settingsVideoSoundLabel = document.querySelector(".settingsVideoSoundLabel");
let settingsVolume = settingsVideoSoundLabel.querySelector(".settingsVolume");
let hero = document.querySelector(".hero");
let heroVideo = hero.querySelector(".heroVideo");

settingsPlayVideo.addEventListener("click", function() {
    settingsVideoSoundLabel.classList.toggle("js-disabled");
    settingsVideoSound.disabled = !this.checked;
});
settingsVideoSound.addEventListener("input", function() {
    settingsVolume.textContent = this.value;
    heroVideo.volume = this.value / 100;
});

heroVideo.volume = 0;

function updateSettings() {
    let volume = settingsVideoSound.value;
    if (settingsPlayVideo.checked) {
        hero.classList.remove("js-hidden");
        heroVideo.volume = volume / 100;
        heroVideo.play();
    } else {
        hero.classList.add("js-hidden");
        heroVideo.pause();
    }
    let keyWords = document.querySelector(".keyWords");
    if (settingsSortByKeywords.checked) {
        keyWords.classList.remove("js-hidden");
    } else {
        keyWords.classList.add("js-hidden");
    }
}