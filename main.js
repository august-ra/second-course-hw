
function jumpToSection(id) {
    if (!id)
        return

    const element = document.getElementById(id)

    if (element)
        element.scrollIntoView({behavior: "smooth"})
}

/////////////

document.getElementById("btn_start").addEventListener("click", () => jumpToSection("games"))
document.getElementById("game_1").addEventListener("click", () => jumpToSection("seasons"))
document.getElementById("game_2").addEventListener("click", () => jumpToSection("memory"))
document.getElementById("game_3").addEventListener("click", () => jumpToSection("quiz"))

/////////////

// games

document.getElementById("btn_start_1").addEventListener("click", () => {
    jumpToSection("game-seasons")

    document.querySelector(".game-group.grid").style.gridTemplate = '"top" "bottom" 300px / 100%'

    let element = document.getElementById("game-seasons")
    element.style.height = "300px"
    element.style.zIndex = "5"

    element = element.children[0]
    element.style.display    = "inline-flex"
    element.style.alignItems = "center"
    element.style.gap        = "15px"
    element.style.opacity    = "1"
})

document.getElementById("btn_do_1").addEventListener("click", () => {
    const text  = document.getElementById("monthNumber").value.trim()
    const month = Number(text)

    const getMonth = () => {
        switch (month) {
            case  1: return "Январь"
            case  2: return "Февраль"
            case  3: return "Март"
            case  4: return "Апрель"
            case  5: return "Май"
            case  6: return "Июнь"
            case  7: return "Июль"
            case  8: return "Август"
            case  9: return "Сентябрь"
            case 10: return "Октябрь"
            case 11: return "Ноябрь"
            case 12:
            default: return "Декабрь"
        }
    }
    const getSeasons = () => {
        if (month >= 3 && month <= 5)
            return "Весна"
        else if (month >= 6 && month <= 8)
            return "Лето"
        else if (month >= 9 && month <= 11)
            return "Осень"
        else
            return "Зима"
    }

    let result = "<br>Не смогу определить сезон."
    const makeSpan =  (value) => `<span class="text-start">${value}</span>`

    if (text === "")
        result = `${makeSpan(`Вы ничего не ввели.${result}`)}`
    else if (isNaN(month))
        result = `«${text}»<br>${makeSpan(`Вы ввели не число.${result}`)}`
    else if (month < 0)
        result = `${makeSpan(`Вы ввели число меньшее, чем 0.${result}`)}`
    else if (month >= 1 && month <= 12)
        result = `Месяц: ${makeSpan(getMonth())}<br>Сезон: ${makeSpan(getSeasons())}`
    else
        result = `«${text}»<br>${makeSpan(`Вы ввели число большее, чем 12.${result}`)}`

    document.getElementById("game-seasons-result").innerHTML = result
})
