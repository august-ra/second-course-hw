
function jumpToSection(id) {

  if (!id)
    return

  const element = document.getElementById(id)

  if (element)
      element.scrollIntoView({behavior: "smooth"})

}

function scrollToGames() {

  jumpToSection("games")

}

const collection = document.getElementsByClassName("header__start")

for (const button of collection) {
  button.addEventListener("click", scrollToGames)
}
