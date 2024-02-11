
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

/////////////

// games

document.getElementById("start_1").addEventListener('click', () => {
    let month = Number(prompt('Введите номер месяца, чтобы узнать время года.'))

    if (month === 1 || month === 2 || month === 12)
        console.log('Время года — Зима.')
    else if (month >= 3 && month <= 5)
        console.log('Время года — Весна.')
    else if (month >= 6 && month <= 8)
        console.log('Время года — Лето.')
    else if (month >= 9 && month <= 11)
        console.log('Время года — Осень.')
    else
        console.log('Введите НОМЕР месяца')
})
