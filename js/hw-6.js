
let data

// task #01

data = [1, 5, 4, 10, 0, 3]

function printBefore10(array) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === 10) {
            break
        }

        console.log(array[i])
    }
}

printBefore10(data)

// task #02

console.log(data[2])
console.log(data.indexOf(4))

// task #03

data = [1, 3, 5, 10, 20]
console.log(data.join(' '))

// task #04

function getMatrix() {
    let result = []

    for (let i = 0; i < 3; ++i) {
        let array = []

        for (let j = 0; j < 3; ++j) {
            array.push(1)
        }

        result.push(array)
    }

    return result
}

console.log(getMatrix())

// task #05

data = [1, 1, 1]
data.push(2, 2, 2)

console.log(data)

// task #06

data = [9, 8, 7, 'a', 6, 5]
data = data.sort()
data.pop()

console.log(data)

// task #07

data = [9, 8, 7, 6, 5]

function quiz(array) {
    let answer = Number(prompt("Угадайте число от 1 до 10"))

    if (isNaN(answer))
        console.log("Вы ввели не число!")
    else if (array.includes(answer))
        console.log("Вы угадали!")
    else
        console.log("К сожалению, вы не угадали...")
}

quiz(data)

// task #08

data = 'abcdef'

function invert(str) {
    let result = ''

    for (const char of str) {
        result = char + result
    }

    console.log(result)
}

invert(data)

// task #09

data = [[1, 2, 3,], [4, 5, 6]]

console.log(data.flat())

// task #10

data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function printSumsForPairs(array) {
    for (const i in array) {
        console.log(array[i] + array[i + 1])
    }
}

printSumsForPairs(data)

// task #11

data = [2, 5, 6]

console.log(data.map((item) => item ** 2))

// task #12

function getLengthsOfWords(array) {
    return array.map((item) => item.length)
}

console.log(getLengthsOfWords(['слово', '', 'слог', 'длинное предложение', 'буква']))

// task #13

function getNegativeNumbers(array) {
    return array.filter((item) => item < 0)
}

console.log(getNegativeNumbers([-1, 0, 5, -10, 56]))
console.log(getNegativeNumbers([-25, 25, 0, -1000, -2]))
