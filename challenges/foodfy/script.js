const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for(let card of cards) {

    card.addEventListener("click", () => {
        const imgId = card.querySelector(".card__image-container").getAttribute("id")
        const titleId = card.querySelector(".card__title").getAttribute("id")
        const authorId = card.querySelector(".card__author").getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = imgId
        modalOverlay.querySelector("h2").innerHTML = titleId
        modalOverlay.querySelector("p").innerHTML = authorId
       
    })
} 

document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ""
    modalOverlay.querySelector("h2").innerHTML = ""
    modalOverlay.querySelector("p").innerHTML = ""
})
