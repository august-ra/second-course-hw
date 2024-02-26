import * as common from "./common.js"

const password = "1"

let confirm
let answer

let a
let b
let d
let e
let result

export function printEN(root) {
    common.startTasks()

    root.innerHTML = `<h1 class="heading">There's a page for <b>JS</b>.</h1><br>`

    // task #01

    root.innerHTML += common.printEnTask()

    if (!confirm)
        confirm = prompt(`Input the password.`)

    if (password === confirm)
        root.innerHTML += `<p>Nice! <b style="color: #036421;">Correct password!</b> Mr. Smith, The Matrix has been waiting for you!</p>`
    else
        root.innerHTML += `<p>Warning! <b style="color: #9C0332;">Incorrect password!</b> <i>Someboby</i>, call the police.</p>`

    // task #02

    const arr = [0, 10, -3, 2]

    root.innerHTML += common.printEnTask()
    root.innerHTML += `<p>Checking that the range <b>(0; 10)</b> includes numbers from a set.</p>`

    for (const item of arr) {
        if (item > 0 && item < 10)
            answer = "Right!"
        else
            answer = "Wrong!"

        root.innerHTML += `<p>For value <b>${item}</b> the system has said <b>"${answer}"</b>.</p>`
    }

    // task #03

    d = 42
    e = 168

    if (d > 100 || e > 100)
        answer = "Right!"
    else
        answer = "Wrong!"

    root.innerHTML += common.printEnTask()
    root.innerHTML += `<p>For values <b>${d}</b> and <b>${e}</b> the system has said <b>"${answer}"</b>.</p>`

    // task #04

    a = "2";
    b = "3";

    root.innerHTML += common.printEnTask()
    root.innerHTML += `<p>There was two strings <b>${a}</b> и <b>${b}</b> but the summary is <b>${Number(a) + Number(b)}</b>.</p>`

    // task #05

    let monthNumber = 12

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            answer = "winter"
            break
        case 3:
        case 4:
        case 5:
            answer = "spring"
            break
        case 6:
        case 7:
        case 8:
            answer = "summer"
            break
        case 9:
        case 10:
        case 11:
            answer = "autumn"
            break
        default:
            answer = null
    }

    root.innerHTML += common.printEnTask()

    if (answer === null)
        root.innerHTML += `<p>There isn't month with <b>${monthNumber}</b> number in a year.</p>`
    else
        root.innerHTML += `<p>Month <b>${monthNumber}</b> is <u>${answer}</u>.</p>`

    // task #06

    root.innerHTML += common.printEnTask()
    root.innerHTML += common.printEnLink()
}

export function printRU(root) {
    common.startTasks()

    root.innerHTML = `<h1 class="heading">ВНИМАНИЕ! Страница исполнения <b>JS</b>.</h1><br>`

    // task #01

    root.innerHTML += common.printRuTask()

    if (!confirm)
        confirm = prompt(`Введите пароль.`)

    if (password === confirm)
        root.innerHTML += `<p>Прекрасно! <b style="color: #039C32;">Пароль введён верно!</b> Мистер Смит, Матрица ждёт Вас!</p>`
    else
        root.innerHTML += `<p>Внимание! <b style="color: #9C0332;">Пароль введён неправильно!</b> <i>Кто-нибудь</i> вызовите полицию.</p>`

    // task #02

    const arr = [0, 10, -3, 2]

    root.innerHTML += common.printRuTask()
    root.innerHTML += `<p>Проверяем значения на вхождение в диапазон <b>(0; 10)</b> <i>(невключительно)</i>.</p>`

    for (const item of arr) {
        if (item > 0 && item < 10)
            answer = "Верно!"
        else
            answer = "Неверно!"

        root.innerHTML += `<p>Для значения <b>${item}</b> система ответила <b>"${answer}"</b>.</p>`
    }

    // task #03

    d = 42
    e = 168

    if (d > 100 || e > 100)
        answer = "Верно!"
    else
        answer = "Неверно!"

    root.innerHTML += common.printRuTask()
    root.innerHTML += `<p>Для значений <b>${d}</b> и <b>${e}</b> система ответила <b>"${answer}"</b>.</p>`

    // task #04

    a = "2";
    b = "3";

    root.innerHTML += common.printRuTask()
    root.innerHTML += `<p>Были числа <b>${a}</b> и <b>${b}</b> в виде строк, а получили <s>артишок</s> цифру <b>${Number(a) + Number(b)}</b>.</p>`

    // task #05

    let monthNumber = 12

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            answer = "зима"
            break
        case 3:
        case 4:
        case 5:
            answer = "весна"
            break
        case 6:
        case 7:
        case 8:
            answer = "лето"
            break
        case 9:
        case 10:
        case 11:
            answer = "осень"
            break
        default:
            answer = null
    }

    root.innerHTML += common.printRuTask()

    if (answer === null)
        root.innerHTML += `<p>В году нет <b>${monthNumber}-го</b> месяца.</p>`
    else
        root.innerHTML += `<p><b>${monthNumber}-й</b> месяц это <u>${answer}</u>.</p>`

    // task #06

    root.innerHTML += common.printRuTask()
    root.innerHTML += common.printRuLink()
}
