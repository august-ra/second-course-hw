console.log('testing...')

let a
let b
let result

// task #01

a = 10
alert(`There's a variable "a" with its value ${a}.\nIt's the last time when I've used *alert* function. I'm so sorry to you.`)

a = 20
document.write(`<h2>Task #1</h2>`)
document.write(`<p><b>Variable "a" is </b>${a}.</p>`)

// task #02

let yearOfPresentation = 2007

document.write(`<h2>Task #2</h2>`)
document.write(`<p>The first iPhone was presented by Steve Jobs in <b>${yearOfPresentation}</b> in San Francisco!<br>`)
document.write(`<i>Do you remember how it was?</i></p>`)

// task #03

let creatorName = "Brendan Eich"
let companyName = "Netscape"
let yearOfCreating = 1995

document.write(`<h2>Task #3</h2>`)
document.write(`<p>JavaScript was designed by <b>${creatorName}</b> in <u>${yearOfCreating} year</u> in <b>${companyName}</b>.</p>`)

// task #04

a = 10
b = 2

document.write(`<h2>Task #4</h2>`)
document.write(`<p>`)
document.write(`You should imagine two numbers <b>${a}</b> and <b>${b}</b>.<br>`)
document.write(`You can do <u>summation</u> those digits and get <b>${a + b}</b>.<br>`)
document.write(`You can do <u>subtraction</u> second from first and get <b>${a - b}</b>.<br>`)
document.write(`You can <u>multiply</u> first to second and get <b>${a * b}</b>.<br>`)
document.write(`You can <u>divide</u> first by second and get <b>${a / b}</b>.<br>`)
document.write(`</p>`)

// task #05

a = 2
b = 5
result = Math.pow(a, b)

// document.write(`<p>Exponentiation of base 2 to exponent 5 should return 32. You may check if you want.</p>`)
document.write(`<h2>Task #5</h2>`)
document.write(`<p><u>Exponentiation</u> of base <b>${a}</b> to exponent <b>${b}</b> should return <b>${result}</b>. You may check if you want.</p>`)

// task #06

a = 9
b = 2
result = a % b

document.write(`<h2>Task #6</h2>`)
document.write(`<p><u>Reminder</u> of division <b>${a}</b> on <b>${b}</b> is <b>${result}</b>. Sure, it was really easy!</p>`)

// task #07 // <s>stupidity</s> stuff

let num = 1
num += 5
num -= 3
num *= 7
num /= 3
++num
--num

document.write(`<h2>Task #7</h2>`)
document.write(`<p>I've done some calculation without any reasons and result is <b>${num}</b>. You can do anything with it...</p>`)

// task #08

// let age = prompt("Input you age, please")
let age = prompt("How old are you?")

document.write(`<h2>Task #8</h2>`)
document.write(`<p>You've entered <u>your age</u>. If it's true, that you are <b>${age}</b> years old, you look perfect. Well-preserved.</p>`)

// task #09

let user = {
    name: "homeless Jesus",
    age: 33,
    isAdmin: false,
    punisher: "Pontius Pilate",
}

//

user.cityOfResidence = "Jerusalem"
user.theEnd = true
user.symbol = "☨"
user.age = 34 // it could be but not...
user.age = 33

//

delete user.cityOfResidence

//

result = prompt("What you want to know about the guy?")

document.write(`<h2>Task #9</h2>`)

if (user.hasOwnProperty(result))
    document.write(`<p>You have asked a <u>${result}</u>. I have the answer: <b>${user[result]}</b>.</p>`)

//

document.write(`<p>I wanted to say a story about <u>${user.punisher}</u>. But in the last moment I've decided not to do that... <i>Ameno.</i> ${user.symbol}</p>`)

// task #10

result = prompt("Say your name")

document.write(`<h2>Task #10</h2>`)
document.write(`<p>Salut, <b>${result}</b>!</p>`)
