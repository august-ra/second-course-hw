// import * as common from "./common.js"

let age, number

export function printEN(root) {
    root.innerHTML = `<h1 class="heading">There's a page for <b>JS</b>.</h1><br>`

    // task #1

    const getMinValueWithComment = (lhs, rhs) => {
        const sentence = `There are two numbers <b>${lhs}</b> and <b>${rhs}</b>.`

        if (lhs === rhs)
            return `${sentence} They are equal, so it returns <b>${lhs}</b> as minimal.`
        else if (lhs < rhs)
            return `${sentence} First is less, so it returns <b>${lhs}</b>.`
        else
            return `${sentence} Second is less, so it returns <b>${rhs}</b>.`
    }

    root.innerHTML += `<h2>Task #1</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${getMinValueWithComment(8, 4)}<br>`
    root.innerHTML += `${getMinValueWithComment(6, 6)}`
    root.innerHTML += `</p>`

    // task #2

    const checkEvenNumberWithComment = (value) => {
        const sentence = `There is a number <b>${value}</b>.`

        if (value % 2)
            return `${sentence} Number is <b>odd</b>.`
        else
            return `${sentence} Number is <b>even</b>.`
    }

    root.innerHTML += `<h2>Task #2</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${checkEvenNumberWithComment(42)}<br>`
    root.innerHTML += `${checkEvenNumberWithComment(13)}`
    root.innerHTML += `</p>`

    // task #3

    const getSquareNumberWithComment = (value) => {
        const result = value ** 2
        const printSquare = () => {
            console.log(`${value}² => ${result}`)
        }

        printSquare()

        return `Number <b>${value}</b> has its square number <b>${result}</b>.`
    }

    root.innerHTML += `<h2>Task #3</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${getSquareNumberWithComment(16)}<br>`
    root.innerHTML += `${getSquareNumberWithComment(9)}`
    root.innerHTML += `</p>`

    // task #4

    const checkAge = () => {
        let sentence = 'How old are you?'

        if (!age)
            age = Number(prompt(sentence))

        sentence = `${sentence} <i>Answer: <b>${age}</b>.</i>`

        if (age < 0)
            return `${sentence}<br>You have entered a wrong age.`
        else if (age <= 12)
            return `${sentence}<br>Hi, dude!`
        else if (age <= 70)
            return `${sentence}<br>You are welcome!`
        else
            return `${sentence}<br>What's up, dady?`
    }

    root.innerHTML += `<h2>Task #4</h2>`
    root.innerHTML += `<p>${checkAge()}</p>`

    // task #5

    const checkNumbersWithComment = (lhs, rhs) => {
        let errorsCount = 0

        const formatValue = (value) => {
            const number = Number(value)

            if (isNaN(number)) {
                ++errorsCount
                return `„${value}“`
            }

            return number
        }

        lhs = formatValue(lhs)
        rhs = formatValue(rhs)

        const sentence = `There are two values <b>${lhs}</b> and <b>${rhs}</b>.`

        if (errorsCount > 1)
            return `${sentence} Both aren't numbers.`
        else if (errorsCount)
            return `${sentence} Either isn't number.`
        else
            return `${sentence} Production of them is <b>${lhs * rhs}</b>.`
    }

    root.innerHTML += `<h2>Task #5</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${checkNumbersWithComment(11, 13)}<br>`
    root.innerHTML += `${checkNumbersWithComment(13, 'error')}`
    root.innerHTML += `</p>`

    // task #6

    const getCubicNumberWithComment = (value) => {
        let number = Number(value)

        if (isNaN(number))
            return `Value «${value.trim()}» is not a number.`

        return `Number <b>${number}</b> has its cubic <b>${number ** 3}</b>.`
    }

    if (!number)
        number = prompt('Input a number to calc cubic number')

    root.innerHTML += `<h2>Task №6</h2>`
    root.innerHTML += `<p>${getCubicNumberWithComment(number)}</p>`

    // task #7

    const print = (circle) => {
        const radius    = circle.radius
        const perimeter = circle.getPerimeter()
        const area      = circle.getArea()

        return `For circle with a radius <b>${radius}</b>: perimeter is <b>${perimeter}</b> and area is <b>${area}</b>.`
    }

    root.innerHTML += `<h2>Задача №6</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${print(circle1)}<br>`
    root.innerHTML += `${print(circle2)}`
    root.innerHTML += `</p>`

    // task #8

    root.innerHTML += `<h2>Task #8</h2>`
    root.innerHTML += `<p>There is my games' page. <a href="../index.html">Tap it!</a></p>`
}

export function printRU(root) {
    root.innerHTML = `<h1 class="heading">ВНИМАНИЕ! Страница исполнения <b>JS</b>.</h1><br>`

    // task #01

    const getMinValueWithComment = (lhs, rhs) => {
        const sentence = `Имеем два числа <b>${lhs}</b> и <b>${rhs}</b>.`

        if (lhs === rhs)
            return `${sentence} Они равны, потому в качестве минимального система выбрает <b>${lhs}</b>.`
        else if (lhs < rhs)
            return `${sentence} Первое меньше, система выбрает <b>${lhs}</b>.`
        else
            return `${sentence} Второе меньше, система выбрает <b>${rhs}</b>.`
    }

    root.innerHTML += `<h2>Задача №1</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${getMinValueWithComment(8, 4)}<br>`
    root.innerHTML += `${getMinValueWithComment(6, 6)}`
    root.innerHTML += `</p>`

    // task #02

    const checkEvenNumberWithComment = (value) => {
        if (value % 2)
            return `Число <b>${value}</b>: <b>нечётное</b>.`
        else
            return `Число <b>${value}</b>: <b>чётное</b>.`
    }

    root.innerHTML += `<h2>Задача №2</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${checkEvenNumberWithComment(42)}<br>`
    root.innerHTML += `${checkEvenNumberWithComment(13)}`
    root.innerHTML += `</p>`

    // task #03

    const getSquareNumberWithComment = (value) => {
        const result = value ** 2

        const printSquare = () => {
            console.log(`${value}² => ${result}`)
        }

        printSquare()

        return `Квадрат числа <b>${value}</b> равен <b>${result}</b>.`
    }

    root.innerHTML += `<h2>Задача #3</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${getSquareNumberWithComment(16)}<br>`
    root.innerHTML += `${getSquareNumberWithComment(9)}`
    root.innerHTML += `</p>`

    // task #04

    const checkAge = () => {
        let sentence = 'Сколько Вам лет?'

        if (!age)
            age = Number(prompt(sentence))

        sentence = `${sentence} <i>Ответ: <b>${age}</b>.</i>`

        if (age < 0)
            return `${sentence}<br>Вы ввели неправильное значение.`
        else if (age <= 12)
            return `${sentence}<br><i>Привет, молодой!</i>`
        else if (age <= 70)
            return `${sentence}<br><i>Добро пожаловать!</i>`
        else
            return `${sentence}<br><i>Как ты, старичок?</i>`
    }

    root.innerHTML += `<h2>Задача №4</h2>`
    root.innerHTML += `<p>${checkAge()}</p>`

    // task #05

    const checkNumbersWithComment = (lhs, rhs) => {
        let errorsCount = 0

        const formatValue = (value) => {
            const number = Number(value)

            if (isNaN(number)) {
                ++errorsCount
                return `«${value}»`
            }

            return number
        }

        lhs = formatValue(lhs)
        rhs = formatValue(rhs)

        const sentence = `There are two values <b>${lhs}</b> and <b>${rhs}</b>.`

        if (errorsCount > 1)
            return `${sentence} Оба — не числа.`
        else if (errorsCount)
            return `${sentence} Одно из них — не число.`
        else
            return `${sentence} Их произведение равно <b>${lhs * rhs}</b>.`
    }

    root.innerHTML += `<h2>Задача №5</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${checkNumbersWithComment(11, 13)}<br>`
    root.innerHTML += `${checkNumbersWithComment(13, 'ошибка')}`
    root.innerHTML += `</p>`

    // task #06

    const getCubicNumberWithComment = (value) => {
        let number = Number(value)

        if (isNaN(number))
            return `Значение «${value.trim()}» не является числом.`

        return `Число <b>${number}</b> в кубе равно <b>${number ** 3}</b>.`
    }

    if (!number)
        number = prompt('Введите число, которое будем возводить в третью степень')

    root.innerHTML += `<h2>Задача №6</h2>`
    root.innerHTML += `<p>${getCubicNumberWithComment(number)}</p>`

    // task #7

    const print = (circle) => {
        const radius    = circle.radius
        const perimeter = circle.getPerimeter().toLocaleString('ru-RU')
        const area      = circle.getArea().toLocaleString('ru-RU')

        return `Для круга c радиусом <b>${radius}</b> периметр равен <b>${perimeter}</b> и площадь равна <b>${area}</b>.`
    }

    root.innerHTML += `<h2>Задача №7</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `${print(circle1)}<br>`
    root.innerHTML += `${print(circle2)}`
    root.innerHTML += `</p>`

    // task #08

    root.innerHTML += `<h2>Задача №8</h2>`
    root.innerHTML += `<p>Переход на страницу с играми <a href="../index.html">здесь</a>!</p>`
}


// task #7

function getPerimeter() {
    return Math.floor(200 * Math.PI * this.radius) / 100
}

function getArea() {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100
}

const circle1 = {
    radius: 5,
    getPerimeter: getPerimeter,
    getArea: getArea,
}

const circle2 = {
    radius: 6,
    getPerimeter: getPerimeter,
    getArea: getArea,
}
