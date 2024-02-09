
function jumpToSection(id) {
    if (!id)
        return

    const element = document.getElementById(id)

    if (element)
        element.scrollIntoView({behavior: "smooth"})
}

/////////////

document.getElementById("start").addEventListener("click", () => jumpToSection("games"))
document.getElementById("game_1").addEventListener("click", () => jumpToSection("seasons"))
document.getElementById("game_2").addEventListener("click", () => jumpToSection("memory"))
document.getElementById("game_3").addEventListener("click", () => jumpToSection("quiz"))
