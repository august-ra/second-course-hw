import * as common from './common.js'

export function printEN(root) {
    root.innerHTML = `<h1 class="heading">There's a page for <b>JS</b>.</h1><br>`
}

export function printRU(root) {
    root.innerHTML = `<h1 class="heading">ВНИМАНИЕ! Страница исполнения <b>JS</b>.</h1><br>`
}
