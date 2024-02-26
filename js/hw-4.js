import * as common from "./common.js"

let arr
let delimiter

export function printEN(root) {
    common.startTasks()

    root.innerHTML = `<h1 class="heading">There's a page for <b>JS</b>.</h1><br>`

    // task #01

    const double = [1, 2]
    arr = ['—', 'Doctor', 'any things ', 'I say', 'I\'m saying ', 'twice', '.<br>', '—', 'Hello!']
    delimiter = ', '
    let index = 0

    root.innerHTML += common.printEnTask()
    root.innerHTML += `<p>`

    for (const text of arr) {
        ++index

        say_twice:
            for (const step of double) {
                if (index !== 2 || step !== 2)
                    root.innerHTML += text
                else
                    root.innerHTML += text.toLowerCase()

                if (index === 6 && step === 2)
                    delimiter = ''
                else if (index === 8)
                    delimiter = ' '

                if ([1, 3, 5, 7, 8].includes(index))
                    break say_twice
                else
                    root.innerHTML += delimiter
            }
    }

    root.innerHTML += `</p>`

    // task #02

    delimiter = ''

    root.innerHTML += common.printEnTask()
    root.innerHTML += `<p>`

    arr = ['one', 'two', 'three', 'four', 'five']

    for (let index = 0; index < 5; ++index) {
        root.innerHTML += delimiter
        root.innerHTML += arr[index]

        delimiter = ', '
    }

    root.innerHTML += `</p>`

    // task #03

    delimiter = ''

    root.innerHTML += common.printEnTask()
    root.innerHTML += `<p>`

    for (let index = 7; index <= 22; ++index) {
        root.innerHTML += delimiter
        root.innerHTML += index

        delimiter = ', '
    }

    root.innerHTML += `</p>`

    // task #04

    const data = {
        'Bob': 200,
        'Jack': 300,
        'John': 400,
    }

    root.innerHTML += common.printEnTask()
    root.innerHTML += `<p>`

    for (const key in data) {
        root.innerHTML += `${key} — salary is $${data[key]};<br>`
    }

    root.innerHTML += `<i>Be better than those people! Be like Henry.</i>`
    root.innerHTML += `</p>`

    // task #05

    let num = 1000
    let counter = 0

    while (num >= 50) {
        ++counter
        num /= 2
    }

    root.innerHTML += common.printEnTask()
    root.innerHTML += `<p>The system makes <b>${counter} divisions</b> to get <b>${num}</b>.</p>`

    // task #06

    root.innerHTML += common.printEnTask()

    new Schedule().printFridays(root, 'en')
}

export function printRU(root) {
    common.startTasks()

    root.innerHTML = `<h1 class="heading">ВНИМАНИЕ! Страница исполнения <b>JS</b>.</h1><br>`

    // task #01

    const double = [1, 2]
    arr = ['—', 'Доктор', 'всё, что я бы ', 'ни говорил', 'я повторяю ', 'по два раза', '.<br>—', 'Привет!']
    delimiter = ', '
    let index = 0

    root.innerHTML += common.printRuTask()
    root.innerHTML += `<p>`

    for (const text of arr) {
        ++index

        say_twice:
            for (const step of double) {
                if (index !== 2 || step !== 2)
                    root.innerHTML += text
                else
                    root.innerHTML += text.toLowerCase()

                if (index === 6 && step === 2)
                    delimiter = ''
                else if (index === 8)
                    delimiter = ' '

                if ([1, 3, 5, 7].includes(index))
                    break say_twice
                else
                    root.innerHTML += delimiter
            }
    }

    root.innerHTML += `</p>`

    // task #02

    delimiter = ''

    root.innerHTML += common.printRuTask()
    root.innerHTML += `<p>`

    arr = ['раз', 'два', 'три', 'четыре', 'пять']

    for (let index = 0; index < 5; ++index) {
        root.innerHTML += delimiter
        root.innerHTML += arr[index]

        delimiter = ', '
    }

    root.innerHTML += `</p>`

    // task #03

    delimiter = ''

    root.innerHTML += common.printRuTask()
    root.innerHTML += `<p>`

    for (let index = 7; index <= 22; ++index) {
        root.innerHTML += delimiter
        root.innerHTML += index

        delimiter = ', '
    }

    root.innerHTML += `</p>`

    // task #04

    const data = {
        'Коля': 200,
        'Вася': 300,
        'Петя': 400,
    }

    root.innerHTML += common.printRuTask()
    root.innerHTML += `<p>`

    for (const key in data) {
        root.innerHTML += `${key} — зарплата ${data[key]} долларов<br>`
    }

    root.innerHTML += `<i>Не будь, как эти трое! Будь, как Михаил.</i>`
    root.innerHTML += `</p>`

    // task #05

    let num = 1000
    let counter = 0

    while (num >= 50) {
        ++counter
        num /= 2
    }

    const units = common.calcUnits(counter, 'делений', 'деление', 'деления')

    root.innerHTML += common.printRuTask()
    root.innerHTML += `<p>Система произвела <b>${counter} ${units}</b> и получила <b>${num.toLocaleString('ru-RU')}</b>.</p>`

    // task #06

    root.innerHTML += common.printRuTask()

    new Schedule().printFridays(root, 'ru')
}


class Schedule {
    constructor(month) {
        this.date = new Date()
        this.year = this.date.getFullYear()
        this.month = month ? month - 1 : this.date.getMonth()
        this.day = 0
        this.dayOfWeek = -1
        this.lastDayOfMonth = new Date(this.year, this.month + 1, this.day).getDate()
    }

    printFridays = (root, lang) => {
        do {
            ++this.day

            this.date = new Date(this.year, this.month, this.day)
            this.dayOfWeek = this.date.getDay()
        }
        while (this.dayOfWeek !== 5)

        while (this.day <= this.lastDayOfMonth) {
            root.innerHTML += `<p>`

            if (lang === 'ru') {
                root.innerHTML += `<b>${this.date.toLocaleDateString('ru-RU')}</b><br>`
                root.innerHTML += `Сегодня ${this.day}-е число. Это пятница — садись делать отчёт.`
            }
            else {
                root.innerHTML += `<b>${this.date.toLocaleDateString('en-GB')}</b><br>`
                root.innerHTML += `It's a friday the ${this.day}th. Do the report for your boss.`
            }

            root.innerHTML += `</p>`

            this.day += 7
            this.date = new Date(this.year, this.month, this.day)
        }
    }

}
