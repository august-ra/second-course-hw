
export function calcUnits(value, unit_0, unit_1, unit_2) {
    let reminder = value % 100

    if (reminder >= 11 && reminder <= 19)
        return unit_0

    reminder = reminder % 10

    if (reminder === 1)
        return unit_1
    else if (reminder >= 2 && reminder <= 4)
        return unit_2
    else
        return unit_0
}

///////

export function promptNumber(message, defaultValue) {
    let value = prompt(message, defaultValue)

    if (value === null || value.trim() === '')
        return 'Ничего не введено или отмена ввода'

    value = Number(value)

    if (isNaN(value))
        return 'Нужно вводить только цифры'

    return value
}

///////

let num = 0

export const startTasks = () => num = 0

export const printEnHead = () => `<h1 class="heading">There's a page for <b>JS</b>.</h1><br>`
export const printEnTask = () => `<h2>Task #${(++num).toLocaleString('en-GB', { minimumIntegerDigits: 2 })}</h2>`
export const printEnLink = () => `<p>There is my games' page. <a href="../index.html">Tap it!</a></p>`

export const printRuHead = () => `<h1 class="heading">ВНИМАНИЕ! Страница исполнения <b>JS</b>.</h1><br>`
export const printRuTask = () => `<h2>Задача №${(++num).toLocaleString('ru-Ru', { minimumIntegerDigits: 2 })}</h2>`
export const printRuLink = () => `<p>Переход на страницу с играми <a href="../index.html">здесь</a>!</p>`
