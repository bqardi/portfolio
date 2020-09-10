import card from "./card.js";
import mainMenu from "./main-menu.js";
import modal from "./modal.js";
card();
let menu = mainMenu();
modal(function(state) {
    switch (state) {
        case "displayed":
            menu.close();
            break;
        case "cancelled":
            // Nothing!
            // console.log("Cancelled");
            break;
        case "accepted":
            updateSettings();
            break;

        default:
            break;
    }
});

let settingsVideoSoundLabel = document.querySelector(".settingsVideoSoundLabel");
settingsPlayVideo.addEventListener("click", function() {
    settingsVideoSoundLabel.classList.toggle("js-disabled");
    settingsVideoSound.disabled = !this.checked;
});

function updateSettings() {
    let hero = document.querySelector(".hero")
    let heroVideo = hero.querySelector(".heroVideo")
    if (settingsPlayVideo.checked) {
        hero.classList.remove("js-hidden");
        heroVideo.muted = !settingsVideoSound.checked;
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