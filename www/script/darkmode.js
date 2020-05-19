let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector(".theme-toggle input");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");

    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");

    localStorage.setItem("darkMode", "disabled");
};

//Check localStorage on init and toggle checkbox accordingly
if (darkMode === "enabled") {
    enableDarkMode();
    if(darkModeToggle.checked === false) {
        darkModeToggle.click();
    }
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
