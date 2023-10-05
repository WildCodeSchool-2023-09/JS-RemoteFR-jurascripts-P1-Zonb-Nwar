
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

if (window.location.pathname === "/second.html") {
    setTimeout(function () {
        window.location.href = "/index.html";
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