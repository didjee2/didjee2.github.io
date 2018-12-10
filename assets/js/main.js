"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector('dbs-special').addEventListener('click', onSpecialClick);
    document.querySelector('.skills').addEventListener('click', onSkillClick);
}

function onSpecialClick(event) {
    event.preventDefault();
    event.stopPropagation();
    let target = event.target;

    if (target.hasAttribute("href")) {
        let href = target.getAttribute("href");

        openLink(href, '_blank');
    }
}

function onSkillClick(event) {
    if (event.target.tagName.toLowerCase() !== 'li') {
        return;
    }
    let text = event.target.innerText.replace('#', '%23');

    openLink('https://www.ecosia.org/search?q=' + text, '_blank');
}

function openLink(url, action = '_self') {
    window.open(url, action);
}