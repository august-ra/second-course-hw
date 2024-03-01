import { promptNumber } from "./common.js"

let data

function task01() {
    const data = [
        { name: 'Глеб',   age: 29 },
        { name: 'Анна',   age: 17 },
        { name: 'Олег',   age:  7 },
        { name: 'Оксана', age: 47 },
    ]

    console.log(data.sort((lhs, rhs) => lhs.age > rhs.age ? 1 : -1 ))
}

task01()

function task02() {
    const isPositive = (value) => value > 0
    const isMale = (value) => value.gender === 'male'
    const filter = (data, callback) => {
        const result = []

        for (const item of data) {
            if (callback(item))
                result.push(item)
        }

        return result
    }

    data = [3, -4, 1, 9]

    console.log(filter(data, isPositive))

    data = [
        {name: 'Глеб',   gender:   'male'},
        {name: 'Анна',   gender: 'female'},
        {name: 'Олег',   gender:   'male'},
        {name: 'Оксана', gender: 'female'}
    ]

    console.log(filter(data, isMale))
}

task02()

function task03() {
    let counter = 0

    const id = setInterval(() => {
        console.log(new Date())

        ++counter

        if (counter === 10) {
            clearInterval(id)

            console.log('Прошло 30 секунд')
        }
    }, 3000)
}

task03()

function task04() {
    const delayForSecond = (callback) => {
        setTimeout(callback, 1000)
    }

    delayForSecond( () => console.log('Привет, Глеб!'))
}

task04()

function task05() {
    function delayForSecond(callback) {
        setTimeout(() => {
            console.log('Прошла одна секунда')

            if (callback)
                callback()
        }, 1000)
    }

    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }

    delayForSecond(() => sayHi('Глеб'))
}

task05()
