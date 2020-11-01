const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")


for(let card of cards) {

    card.addEventListener("click", () => {
        const courseId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = courseId
    })
}

document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximize-modal").addEventListener("click", () => {

    if(modal.classList.contains("maximize") === false)   modal.classList.add("maximize")
    else modal.classList.remove("maximize")    

})
