"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector(".skills").addEventListener('click', onSkillClick);
}

function onSkillClick(event) {
    if (event.target.tagName.toLowerCase() !== 'li') {
        return;
    }
    let text = event.target.innerText.replace('#', '%23');

    window.open('https://www.ecosia.org/search?q=' + text, '_blank');
}