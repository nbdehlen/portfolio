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
            projectInProgress: "(In progress)",
            projectIssueTitle: "Issues I ran into:",
            projectSolutionTitle: "How I solved them:",

            projectIntro1: "Chat, swipe and match with other developers.",
            projectDate1: "5th May 2020",
            projectSize1: "Group",
            projectTitle1: "Meeting App for developers",
            projectProblem1: "",
            projectSolution1: "",

            readMore: "Read more",

            projectIntro2: "Search locations or use geolocation with OpenWeatherMaps API.",
            projectDate2: "1st April 2020",
            projectSize2: "Group",
            projectTitle2: "Weather Forecast",
            projectProblem2: "We wanted to graph 3 hour temperature forecasts together with the daily highs and lows gathered \
            from the 3 hour data. In order for Chart.js to display stacked charts correctly both data sources needed to be the same length \
            in total and match amount of data points per date.",
            projectSolution2: "My teammate had created a function for another purpose where he took out the \
            highs and low for each day. I modified it to loop over all data points in each day, find the daily high and low value for that day then for each data \
            point per day push that high and low value to new arrays to match the 3 hour forecast data points per date.",
            
            projectIntro3: "",
            projectDate3: "1st March 2020",
            projectSize3: "",
            projectTitle3: "Movie App",
            projectProblem3: "",
            projectSolution3: "",

            projectIntro4: "",
            projectDate4: "23rd January 2020",
            projectSize4: "Group",
            projectTitle4: "Shop with Rest-API",
            projectProblem4: "We wanted to update search results from the item database as you type and be able to add items to the cart from those results.",
            projectSolution4: "Unfortunetly we couldn't find a way around Laravel not being able to deal with multiple ajax requests \
            and ended up scrapping the idea in order to meet the deadline.",
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
            projectInProgress: "(Under utveckling)",
            projectIssueTitle: "Problem jag sprang in i:",
            projectSolutionTitle: "Hur jag löste dom:",

            projectIntro1: "Chatta, swipa och matcha med andra utvecklare.",
            projectDate1: "5te Maj 2020",
            projectSize1: "Grupp",
            projectTitle1: "Mötesplats för utvecklare",
            projectProblem1: "",
            projectSolution1: "",

            projectIntro2: "Sök plats eller använd geolocation med OpenWeatherMaps API",
            projectDate2: "1a April 2020",
            projectSize2: "Grupp",
            projectTitle2: "Väderprognos",
            projectProblem2: "Jag ville visualisera väderprognosens temperatur med 3 timmars mellanrum tillsammans med dagliga högsta och lägsta temperaturerna \
            utvunna från 3-timmars data. För att få Chart.js att visa stackade grafer korrekt krävs det att båda datakällorna är samma längd \
            samt samma antal av dagens högsta/lägsta som det finns 3-timmars datapunkter för det datumet.",
            projectSolution2: "Min gruppkamrat hade skapat en funktion av en annan anledning för att ta ut högsta och lägsta temperaturerna\
            per dag. Jag byggde på den genom att efter ha hittat högsta och lägsta temperaturerna, pusha dom till en ny array lika många gånger som det fanns \
            3-timmars datapunkter per datum.",

            projectIntro3: "",
            projectDate3: "1a Mars 2020",
            projectSize3: "",
            projectTitle3: "Filmapplikation",
            projectProblem3: "",
            projectSolution3: "",

            projectIntro4: "",
            projectDate4: "23dje Januari 2020",
            projectSize4: "Grupp",
            projectTitle4: "Butik med Rest-API",
            projectProblem4: "Vi ville uppdatera sökresultaten i realtid från databasen samt kunna lägga till varor från de sökresultaten.",
            projectSolution4: "Tyvärr kunde vi inte hitta ett sätt runt att Laravel inte spelade snällt med flera ajax requests samtidigt \
            och det slutade med att vi la idén på is för att kunna slutföra projektet i tid.",
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
        readMore();
    })
    
const setLocale = () => {
    let zones = document.querySelectorAll('html [lang]');
    applyStrings(zones);
    zones.forEach(x => {x.classList.contains('lang-match') ? x.classList.remove('lang-match') : null})
    let lang = localStorage.getItem('lang')
    let container = document.querySelectorAll(`html [lang*=${lang}]`);
    container.forEach(x => x.className = 'lang-match')
}

const applyStrings = (containers) => {
    containers.forEach(container => {
        //find all data-keys
        let locale = container.getAttribute('lang');
       
        
        container.querySelectorAll(`[data-key]`).forEach(element => {
            let key = element.getAttribute('data-key');
            let lang = locale.substr(0, 2);
            
            if (key) {
                element.textContent = langData[lang].strings[key];  
            }
        })
    })
}
setLocale();
readMore();
// const html = document.querySelector("html")

// Needed access to readMore function on language change
//Need ternary for what language Read less etc

function readMore() {
     let readMoreText = "Read more";
     let readLessText = "Read less";
    localStorage.getItem("lang") === "sv" ? (readMoreText = "Läs mer", readLessText = "Läs mindre") :
    (readMoreText = "Read more", readLessText = "Read less")
    
    $('.read-more-2').readmore({ speed: 75, lessLink: `<a href="#" class="read-more">${readLessText}</a>`,
    moreLink: `<a href="#" class="read-more">${readMoreText}</a>`, collapsedHeight: 80, embedCSS: false,
    beforeToggle: function(trigger, element, expanded) {
            if (!expanded) {
                $('.read-more-2').css({maxHeight: '350px'});
                $('.text-shadow').css({boxShadow: 'unset'})
            } else {
                $('.text-shadow').css({boxShadow: 'inset 0 -20px 20px -10px var(--background)'})
            }
    }
    });
    }