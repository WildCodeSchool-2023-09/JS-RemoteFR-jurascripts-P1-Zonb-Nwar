/* EFFET FLIP CARD */

const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.onclick = function () {
        card.classList.toggle("flipCard")
    }
})

/* POP-UP LOGIN */
const alertUser = (text) => {
    alert(text)

}

/* PAGE 404 */

if (window.location.pathname === "https://wildcodeschool-2023-09.github.io/JS-RemoteFR-jurascripts-P1-Zonb-Nwar/404.html") {
    setTimeout(function () {
        window.location.href = "https://wildcodeschool-2023-09.github.io/JS-RemoteFR-jurascripts-P1-Zonb-Nwar/";
    }, 5000);
}

/* FONCTION SWITCH DARK MODE */

const toggleCheckbox = document.getElementById('toggle-checkbox');

const body = document.body;

const dark_theme_class = 'dark';

toggleCheckbox.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add(dark_theme_class);
    } else {
        body.classList.remove(dark_theme_class);
    }
});


/* BOUTON RETOUR EN HAUT */

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    button.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
