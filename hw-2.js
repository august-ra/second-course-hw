import * as common from "./common.js"

let a
let b
let result

let userName = null
let userAge = null
let fieldName = null

export function printEN(root) {
    root.innerHTML = `<h1 class="heading">There's a page for <b>JS</b>.</h1><br>`

    // task #01

    a = 10

    if (!userName)
        alert(`There's a variable "a" with its value ${a}.\nIt's the last time when I've used *alert* function. I'm so sorry to you.`)

    a = 20
    root.innerHTML += `<h2>Task #1</h2>`
    root.innerHTML += `<p>Variable "a" is <b>${a}</b>.</p>`

    // task #02

    let yearOfPresentation = 2007

    root.innerHTML += `<h2>Task #2</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `The first iPhone was presented by Steve Jobs in <b>${yearOfPresentation}</b> year in San Francisco!<br>`
    root.innerHTML += `<i>Do you remember how it was?</i>`
    root.innerHTML += `</p>`

    // task #03

    let creatorName = "Brendan Eich"
    let companyName = "Netscape"
    let yearOfCreating = 1995

    root.innerHTML += `<h2>Task #3</h2>`
    root.innerHTML += `<p>JavaScript was designed by <b>${creatorName}</b> in <u>${yearOfCreating} year</u> in <b>${companyName}</b>.</p>`

    // task #04

    a = 10
    b = 2

    root.innerHTML += `<h2>Task #4</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `You should imagine two numbers <b>${a}</b> and <b>${b}</b>.<br>`
    root.innerHTML += `You can do <u>summation</u> those digits and get <b>${a + b}</b>.<br>`
    root.innerHTML += `You can do <u>subtraction</u> second from first and get <b>${a - b}</b>.<br>`
    root.innerHTML += `You can <u>multiply</u> first to second and get <b>${a * b}</b>.<br>`
    root.innerHTML += `You can <u>divide</u> first by second and get <b>${a / b}</b>.<br>`
    root.innerHTML += `</p>`

    // task #05

    a = 2
    b = 5
    result = Math.pow(a, b)

    // root.innerHTML += `<p>Exponentiation of base 2 to exponent 5 should return 32. You may check if you want.</p>`
    root.innerHTML += `<h2>Task #5</h2>`
    root.innerHTML += `<p><u>Exponentiation</u> of base <b>${a}</b> to exponent <b>${b}</b> should return <b>${result}</b>. <i>You may check if you want.</i></p>`

    // task #06

    a = 9
    b = 2
    result = a % b

    root.innerHTML += `<h2>Task #6</h2>`
    root.innerHTML += `<p><u>Reminder</u> of division <b>${a}</b> on <b>${b}</b> is <b>${result}</b>. <i>Sure, it was really easy!</i></p>`

    // task #07 // <s>stupidity</s> stuff

    let num = 1
    num += 5
    num -= 3
    num *= 7
    num /= 3
    ++num
    --num

    root.innerHTML += `<h2>Task #7</h2>`
    root.innerHTML += `<p>I've done some calculation without any reasons and result is <b>${num}</b>. <i>You can do anything with it...</i></p>`

    // task #08

    // let age = prompt("Input you age, please")
    if (!userAge)
        userAge = prompt("How old are you?")

    root.innerHTML += `<h2>Task #8</h2>`
    root.innerHTML += `<p>You've entered <u>your age</u>. If it's true, that you are <b>${userAge}</b> years old, you look perfect. Well-preserved.</p>`

    // task #09

    let user = {
        name: "homeless Jesus",
        age: 33,
        isAdmin: false,
        punisher: "Pontius Pilate",
    }

    //

    user["city of residence"] = "Jerusalem"
    user.theEnd = true
    user.symbol = "☨"
    user.age = 34 // it could be but not...
    user.age = 33

    //

    delete user["city of residence"]

    //

    if (!fieldName)
        fieldName = prompt("What you want to know about the guy?")

    root.innerHTML += `<h2>Task #9</h2>`

    if (fieldName && user.hasOwnProperty(fieldName))
        root.innerHTML += `<p>You have asked a <u>${fieldName}</u>. I have the answer: <b>${user[fieldName]}</b>.</p>`
    else
        root.innerHTML += `<p>You have asked something strange. I have no answer.</p>`

    //

    root.innerHTML += `<p>I wanted to say a story about <u>${user.punisher}</u>. But in the last moment I've decided not to do that... <i>Ameno.</i> ${user.symbol}</p>`

    // task #10

    if (!userName)
        userName = prompt("Say your name")

    root.innerHTML += `<h2>Task #10</h2>`
    root.innerHTML += `<p>Salut, <b>${userName}</b>!</p>`
}

export function printRU(root) {
    root.innerHTML = `<h1 class="heading">ВНИМАНИЕ! Страница исполнения <b>JS</b>.</h1><br>`

    // task #01

    a = 10

    if (!userName)
        alert(`Переменная "a" имеет значение ${a}.\nПрошу прощения за данное всплывающее окошко. Это был крайний раз, чеслово.`)

    a = 20
    root.innerHTML += `<h2>Задача №1</h2>`
    root.innerHTML += `<p>Переменная "a" содержит <b>${a}</b>.</p>`

    // task #02

    let yearOfPresentation = 2007

    root.innerHTML += `<h2>Задача №2</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `Первый iPhone был представлен Стивом Джобсом в <b>${yearOfPresentation}</b> году в Сан-Франциско!<br>`
    root.innerHTML += `<i>Помнишь эту презентацию?</i>`
    root.innerHTML += `</p>`

    // task #03

    let creatorName = "Брендан Эйх"
    let companyName = "Netscape"
    let yearOfCreating = 1995

    root.innerHTML += `<h2>Задача №3</h2>`
    root.innerHTML += `<p><b>${creatorName}</b> создал JavaScript в <u>${yearOfCreating} году</u> в <b>${companyName}</b>.</p>`

    // task #04

    a = 10
    b = 2

    root.innerHTML += `<h2>Задача №4</h2>`
    root.innerHTML += `<p>`
    root.innerHTML += `Представь два числа <b>${a}</b> и <b>${b}</b>.<br>`
    root.innerHTML += `Ты можешь <u>просуммировать</u> их и получить <b>${a + b}</b>.<br>`
    root.innerHTML += `Ты можешь <u>вычесть</u> из первого второе и получить <b>${a - b}</b>.<br>`
    root.innerHTML += `Ты можешь <u>перемножить</u> их и получить <b>${a * b}</b>.<br>`
    root.innerHTML += `Ты можешь <u>разделить</u> первое на второе и получить <b>${a / b}</b>.<br>`
    root.innerHTML += `</p>`

    // task #05

    a = 2
    b = 5
    result = Math.pow(a, b)

    // root.innerHTML += `<p>Возведение числа 2 в степень 5 должно вернуть 32. Сомневаешься — проверь, чё.</p>`
    root.innerHTML += `<h2>Задача №5</h2>`
    root.innerHTML += `<p><u>Возведение</u> числа <b>${a}</b> в степень <b>${b}</b> должно вернуть <b>${result}</b>. <i>Сомневаешься — проверь, чё.</i></p>`

    // task #06

    a = 9
    b = 2
    result = a % b

    root.innerHTML += `<h2>Задача №6</h2>`
    root.innerHTML += `<p><u>Остаток</u> от деления <b>${a}</b> на <b>${b}</b> равен <b>${result}</b>. <i>Ха, это было суперпросто!</i></p>`

    // task #07 // <s>stupidity</s> stuff

    let num = 1
    num += 5
    num -= 3
    num *= 7
    num /= 3
    ++num
    --num

    root.innerHTML += `<h2>Задача №7</h2>`
    root.innerHTML += `<p>Я сделал какие-то пространные вычисления и получил <b>${num}</b>. <i>Делай с этим что угодно теперь...</i></p>`

    // task #08

    let units

    if (!userAge) {
        userAge = prompt("Сколько тебе лет?")
        units = common.calcUnits(userAge, "лет", "год", "года")
    }

    root.innerHTML += `<h2>Задача №8</h2>`
    root.innerHTML += `<p>Ты ввёл <u>свой возраст</u>. Если тебе честно <b>${userAge}</b> ${units} — ты выглядишь превосходно. Где тебя хранили?</p>`

    // task #09

    let user = {
        name: "бродяга Иисус",
        age: 33,
        isAdmin: false,
        punisher: "Понтий Пилат",
    }

    //

    user["city of residence"] = "Иерусалим"
    user.theEnd = true
    user.symbol = "☨"
    user.age = 34 // it could be but not...
    user.age = 33

    //

    delete user["city of residence"]

    //

    if (!fieldName)
        fieldName = prompt("Что бы ты хотел узнать про этого парня?")

    root.innerHTML += `<h2>Задача №9</h2>`

    if (fieldName && user.hasOwnProperty(fieldName))
        root.innerHTML += `<p>Ты спросил <u>${fieldName}</u>. Мне удалось выяснить ответ: <b>${user[fieldName]}</b>.</p>`
    else
        root.innerHTML += `<p>Ты спросил что-то непонятное. Я не знаю ответ.</p>`

    //

    root.innerHTML += `<p>Я придумал рассказать тебе, кем был <u>${user.punisher}</u>. Но в последний момент передумал... <i>Аминь.</i> ${user.symbol}</p>`

    // task #10

    if (!userName)
        userName = prompt("Назови своё имя")

    root.innerHTML += `<h2>Задача №10</h2>`
    root.innerHTML += `<p>Салют, <b>${userName}</b>!</p>`
}
