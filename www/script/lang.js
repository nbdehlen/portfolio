const langData = {
    en: {
        strings: {
            hi: "Hi",
            intro: "I'm Bastian Dehlén, a student at Chas Academy - Fullstack Web developer",
            about: "I've always liked coding and so on"
        }
    },
    sv: {
        strings: {
            hi: "Hej",
            intro: "Jag heter Bastian Dehlén och är student på Chas Academy - Fullstack Webbutvecklare",
            about: "Jag har alltid varit intresserad av kod osv" 
        }
    }
    }

    let langLocalStorage = localStorage.getItem("lang");
    const langToggle = document.querySelector("#lang-label input");
    const langSpan = document.querySelector('#lang-span')
    
    //Check localStorage on init
    if (langLocalStorage === "en") {
        localStorage.setItem("lang", "en");
    
        if(langToggle.checked === false) {
            langToggle.click();
            langSpan.textContent = "SE";
        } 
    } else {
        localStorage.setItem('lang', 'sv')
        langSpan.textContent = "EN";
    }
    

    langToggle.addEventListener('click', () => {
        langLocalStorage = localStorage.getItem("lang");
    
        if (langLocalStorage !== "en") {
            localStorage.setItem("lang", "en");
            langSpan.textContent = "SE";
        } else {
            localStorage.setItem("lang", "sv");
            langSpan.textContent = "EN";
        }
        setLocale();
    })
    
const setLocale = () => {
    let zones = document.querySelectorAll('html [lang]');
    console.log(zones);
    
    applyStrings(zones);

    //let lang = findLocaleMatch();
    //console.log(lang);

    // Dirty fix for clearing class
    // if (zones.classList.contains('lang-match')) {
    //     zones.classList.remove('lang.match');
    // }
    zones.forEach(x => {x.classList.contains('lang-match') ? x.classList.remove('lang-match') : null})


    let lang = localStorage.getItem('lang')

    let container = document.querySelectorAll(`html [lang*=${lang}]`);

    console.log(container);
    
    container.forEach(x => x.className = 'lang-match')
    //container.className = 'lang-match';
}

// document.addEventListener('DOMContentLoaded', setLocale)

const applyStrings = (containers) => {
    containers.forEach(container => {
        //find all data-keys
        let locale = container.getAttribute('lang');
       
        
        container.querySelectorAll(`[data-key]`).forEach(element => {
            let key = element.getAttribute('data-key');
           
            
            let lang = locale.substr(0, 2);
            //console.log(key);
            
            if (key) {
                element.textContent = langData[lang].strings[key];
               // console.log(element);
                
            }
        })
    })
}

setLocale();
// const findLocaleMatch = () => {
//    let keys = Object.keys(langData);
//    let locales = Intl.getCanonicalLocales(keys);

//    let lang = navigator.language;
//    let locale = Intl.getCanonicalLocales(lang);

//    console.log('browser language', lang);
//    console.log('locales from data file', locale);
   
//     let langMatch = document.documentElement.getAttribute('lang');
//     locales = locales.filter(l => locale == l);
//     langMatch = (locales.length > 0) ? locales[0] : langMatch;
    
    
//    return langMatch;
// }
