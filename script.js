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
const toggle_btn = document.getElementById('theme-btn');

const body = document.getElementsByTagName('body')[0];

const dark_theme_class = 'dark';



toggle_btn.addEventListener('click', function () {

    if (body.classList.contains(dark_theme_class)) {



        body.classList.remove(dark_theme_class);

    }

    else {

        body.classList.add(dark_theme_class);

    }

});