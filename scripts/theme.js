document.getElementById("colourSwitch").addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-bs-theme") == null 
    || document.documentElement.getAttribute("data-bs-theme") == "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
        document.getElementById("colourSwitch").textContent = "Switch to dark mode"
    }
    else if (document.documentElement.getAttribute("data-bs-theme") == "light") {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        document.getElementById("colourSwitch").textContent = "Switch to light mode"
    }
})