import * as HW2 from "./hw-2.js"
import * as HW3 from "./hw-3.js"
import * as HW4 from "./hw-4.js"

console.log("testing...")

const arr = window.location.search.substring(1).split("&")
let HW = HW4

for (const item of arr) {
    if (!item.includes("hwnum"))
        continue

    let hwnum = Number(item.split("=")[1])

    switch (hwnum) {
        case 2:
            HW = HW2
            break
        case 3:
            HW = HW3
            break
        default:
            HW = HW4
    }

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
