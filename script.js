import * as HW2 from "./hw-2.js"
import * as HW3 from "./hw-3.js"

console.log("testing...")

const arr = window.location.search.substring(1).split("&")
let HW = HW3

for (const item of arr) {
    if (!item.includes("hwnum"))
        continue

    let hwnum = Number(item.split("=")[1])

    if (hwnum === 2)
        HW = HW2
    else
        HW = HW3

    break
}

const root = document.getElementById("root")

const select = document.getElementById("lang")
const label = document.getElementById("lang-result")

function print() {
    if (select.value === "ru")
        HW.printRU(root)
    else
        HW.printEN(root)
}

select.addEventListener("change", function () {
    if (select.value === "en")
        label.innerHTML = `<i>Да, у них даже будущего времени нет! И падежей! И суффиксов!<br>Ну, ладно, какие-то суффиксы у них, всё же, есть...</i>`
    else
        label.innerHTML = ""

    print()
})

print()
