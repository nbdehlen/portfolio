const langData = {
    en: {
        strings: {
            hi: "Hello!",
            introStart: "I'm ",
            introEnd: "a Fullstack Web developer student at Chas Academy in Stockholm.",
            about: "I've always liked coding and so on",

            skillsIntro: "I'm a believer in the right tools for the job and am always up for learning new tech-related skills or improve the ones I'm already familiar with.",
            skillsExp: "EXPERIENCE WITH:",

            languages: "LANGUAGES",
            frameworks: "FRAMEWORKS",
            tools: "TOOLS",
        
            projectHeader: "PROJECTS:",
            projectInProgress: "picture overlay goes here",
            projectIssueTitle: "Issues I ran into:",
            projectSolutionTitle: "How I solved them:",

            projectDate1: "5th May 2020",
            projectSize1: "Group",
            projectTitle1: "Meetingplace for developers",
            projectProblem1: "",
            projectSolution1: "",

            readMore: "Read more",

            projectDate2: "1st April 2020",
            projectSize2: "Group",
            projectTitle2: "Weather App",
            projectProblem2: "I wanted to graph 3 hour temperature forecasts together with the daily highs and lows gathered \
            from the 3 hour data. In order for Chart.js to display stacked charts correctly both data sources needed to be the same length \
            in total and match amount of data points per date.",
            projectSolution2: "My teammate had created a function for another purpose where he took out the \
            highs and low for each day. I modified it to loop over all data points in each day, find the daily high and low value for that day then for each data \
            point per day push that high and low value to new arrays to match the 3 hour forecast data points per date.",
            projectDate3: "1st March 2020",
            projectSize3: "",
            projectTitle3: "Movie App",
            projectProblem3: "",
            projectSolution3: "",

            projectDate4: "23rd January 2020",
            projectSize4: "Group",
            projectTitle4: "Shop with Rest-API",
            projectProblem4: "",
            projectSolution4: "",
        }
    },
    sv: {
        strings: {
            hi: "Hejsan!",
            introStart: "Jag heter ",
            introEnd: " och studerar Fullstack Webbutvecklare på Chas Academy i Stockholm.",

            about: "Jag har alltid varit intresserad av kod osv",

            skillsIntro: "Jag tror på rätt verktyg för jobbet och är alltid nyfiken på att lära mig nya färdigheter eller förbättra de jag redan har erfarenhet av.",
            skillsExp: "ERFARENHET AV:",

            languages: "SPRÅK",
            frameworks: "RAMVERK",
            tools: "VERKTYG",

            projectHeader: "PROJEKT:",
            projectInProgress: "picture overlay goes here",
            projectIssueTitle: "Problem jag sprang in i:",
            projectSolutionTitle: "Hur jag löste dom:",

            projectDate1: "5te Maj 2020",
            projectSize1: "Grupp",
            projectTitle1: "Mötesplats för utvecklare",
            projectProblem1: "",
            projectSolution1: "",

            projectDate2: "1a April 2020",
            projectSize2: "Grupp",
            projectTitle2: "Väderapplikaton",
            projectProblem2: "",
            projectSolution2: "",

            projectDate3: "1a Mars 2020",
            projectSize3: "",
            projectTitle3: "Filmapplikation",
            projectProblem3: "",
            projectSolution3: "",

            projectDate4: "23dje Januari 2020",
            projectSize4: "Grupp",
            projectTitle4: "Butik med Rest-API",
            projectProblem4: "",
            projectSolution4: "",
        }
        }
    }

    let langLocalStorage = localStorage.getItem("lang");
    const langToggle = document.querySelector("#lang-label input");
    const langSpan = document.querySelector('#lang-span')
    
    //Check localStorage on init
    if (langLocalStorage === "en") {
        localStorage.setItem("lang", "en");
        document.documentElement.lang = "en";
    
        if(langToggle.checked === false) {
            langToggle.click();
            langSpan.textContent = "In Swedish";
        } 
    } else {
        localStorage.setItem('lang', 'sv')
        langSpan.textContent = "På Engelska";
        document.documentElement.lang = "sv";
    }
    

    langToggle.addEventListener('click', () => {
        langLocalStorage = localStorage.getItem("lang");
    
        if (langLocalStorage !== "en") {
            localStorage.setItem("lang", "en");
            langSpan.textContent = "In Swedish";
            document.documentElement.lang = "en";
        } else {
            localStorage.setItem("lang", "sv");
            langSpan.textContent = "På Engelska";
            document.documentElement.lang = "sv";
        }
        setLocale();
    })
    
const setLocale = () => {
    let zones = document.querySelectorAll('html [lang]');
    // console.log(zones);
    
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

    // console.log(container);
    
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
const html = document.querySelector("html")