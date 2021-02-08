const cards = document.querySelectorAll('.card')
const buttons = document.querySelectorAll('.button')
const i = document.querySelector('ul')
const p = document.querySelector('.recipe_preparation-content p')
const info = document.querySelector('.recipe_information-content p')

for (let card of cards) {
    card.addEventListener("click", () => {

        const index = card.getAttribute("id")

        window.location.href = `/recipe/${index}`

    })
}

for (let button of buttons) {
    button.addEventListener("click", () => {
        const buttonId = button.getAttribute("id")

        function hideShow(btn) {
            btn.classList.toggle("hide")
            btn.className == "hide" ? button.textContent = "Show" : button.textContent = "Hide"
        }

        switch (buttonId) {
            case 'ingredients':
                hideShow(i)
                break;
            case 'preparation':
                hideShow(p)
                break;
            case 'information':
                hideShow(info)
                break;
        }
    })
}

