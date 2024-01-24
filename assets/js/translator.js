
/*
I made a Translator script for my website. How it works, is that you add a duplicate section of the same section,
but you change the language of it. This allows the script to take both of the sections and display the one with the chosen language.
However, I am not using this script since for some reason, it doens't make the page as responsive anymore. I will fix this soon.
But for now, I decided to leave the script here for the purpose of coming back to it later. 
*/

/*

var typingEffectEn = new Typed(".multiTextEn", {
    strings: ["a Software Developer", "a Programmer", "a Stack Overflow User", "a Software Engineer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});

var typingEffectFi = new Typed(".multiTextFi", {
    strings: ["Ohjelmistokehittäjä", "Ohjelmoija", "Stack Overflow -käyttäjä", "Ohjelmistoinsinööri"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});


function translateText(languageCode) {
    var newTexts = [];

    switch (languageCode) {
        case 'en':
            newTexts = ["a Software Developer", "a Programmer", "a Stack Overflow User", "a Software Engineer"];
            break;
        case 'fi':
            newTexts = ["Ohjelmistokehittäjä", "Ohjelmoija", "Stack Overflow -käyttäjä", "Ohjelmistoinsinööri"];
            break;
        default:
            newTexts = ["Software Developer", "Programmer", "Stack Overflow User", "Software Engineer"];
            break;
    }

    if (languageCode === 'en') {
        typingEffectEn.start();
        typingEffectFi.stop();
    } else {
        typingEffectEn.stop();
        typingEffectFi.start();
    }


    const homeEn = document.querySelector('.home .en');
    const homeFi = document.querySelector('.home .fi');

    if (languageCode === 'en') {
        homeEn.style.display = 'block';
        homeFi.style.display = 'none';
    } else {
        homeEn.style.display = 'none';
        homeFi.style.display = 'block';
    }

    const sectionsEn = document.querySelectorAll('.en');
    const sectionsFi = document.querySelectorAll('.fi');
    
    if (languageCode === 'en') {
        sectionsEn.forEach(section => section.style.display = 'block');
        sectionsFi.forEach(section => section.style.display = 'none');
        } else {
            sectionsEn.forEach(section => section.style.display = 'none');
            sectionsFi.forEach(section => section.style.display = 'block');
        }
}

*/
