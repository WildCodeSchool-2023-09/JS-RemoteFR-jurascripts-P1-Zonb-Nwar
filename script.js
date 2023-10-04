const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.onclick = function () {
        card.classList.toggle("flipCard")
    }
})
const alertUser = (text) => {
    alert(text)

}


if (window.location.pathname === "/second.html") {
    setTimeout(function () {
        window.location.href = "/index.html"; // Remplacez "/" par l'URL de votre page principale
    }, 5000);
}