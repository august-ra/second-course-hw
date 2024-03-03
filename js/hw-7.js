import { promptNumber } from "./common.js"

let data

function task01() {
    data = 'js'
    console.log(data.toUpperCase())
}

task01()

function task02() {
    const filter = (arrayStr, string) => arrayStr.filter(str => str.toLowerCase().startsWith(string.toLowerCase()))

    data = ['Кошка', 'Кит', 'Комар', 'Носорог']
    const template = 'ко'

    console.log(filter(data, template))
}

task02()

function task03() {
    data = 32.58884

    console.log(`Искомое число: ${data}`)
    console.log(`После округления вниз: ${Math.floor(data)}`)
    console.log(`После округления вверх: ${Math.ceil(data)}`)
    console.log(`После округления до ближайшего: ${Math.round(data)}`)
}

task03()

function task04() {
    data = [52, 53, 49, 77, 21, 32]

    console.log(Math.min(...data))
    console.log(Math.max(...data))
}

task04()

function task05() {
    const getRandomNum = () => Math.floor(Math.random() * 10 + 1)

    console.log(getRandomNum())
}

task05()

function task06() {
    const getRandomNumbers = (bound) => {
        const result = []
        const length = Math.floor(bound / 2)

        for (let i = 0; i < length; ++i)
            result.push(Math.round(Math.random() * bound))

        return result
    }

    let value = promptNumber('Введите число', 8)

    if (typeof value === "string")
        console.log(value)
    else if (value <= 0)
        console.log('0 и отрицательные числа не реботают =(')
    else
        console.log(getRandomNumbers(value))
}

task06()

function task07() {
    const getRandomNum = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

    const maximum = promptNumber('Введите число от 10 до 20', 20)

    if (typeof maximum === "string")
        return console.log(maximum)
    else if (maximum < 10 || maximum > 20)
        return console.log('Число не из предложенного диапазона')

    const minimum = promptNumber('Введите число от 0 до 5', 0)

    if (typeof minimum == "string")
        return console.log(minimum)
    else if (minimum < 0 || minimum > 5)
        return console.log('Число не из предложенного диапазона')

    console.log(`Число в диапазоне указанных чисел: ${getRandomNum(minimum, maximum)}`)
}

task07()

function task08() {
    data = new Date()

    console.log(`Текущая дата: ${data}`)
}

task08()

function task09() {
    console.log(`Через 73 дня будет: ${new Date(data.setDate(data.getDate() + 73))}`)
}

task09()

function task10() {
    const formatDate = (date) => {
        String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1)
        }
        Number.prototype.twix = function () {
            return this.toString().padStart(2, '0')
        }

        const month = (date) => [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
        ][date.getMonth()].capitalize()

        const weekday = (date) => {
            let index = date.getDay() - 1

            if (index === -1)
                index = 6

            return [
                'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье',
            ][index].capitalize()
        }

        const formattedDate = `Дата: ${date.getDate()} ${month(date)} ${date.getFullYear()},  ${weekday(date)}`
        const formattedTime = `Время: ${date.getHours().twix()}:${date.getMinutes().twix()}:${date.getSeconds().twix()}`

        return `${formattedDate}\n${formattedTime}`
    }

    data = new Date()
    console.log(formatDate(data))
}

task10()
