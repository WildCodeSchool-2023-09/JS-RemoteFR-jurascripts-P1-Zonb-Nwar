const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.onclick = function () {
        card.classList.toggle("flipCard")
    }
})

