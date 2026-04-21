// bouton détails pour card formation
function toggleDetails(button) {

    const content = button.parentElement.nextElementSibling;

    if (content) {
        content.classList.toggle('is-hidden');

        const icon = button.querySelector('.fas');
        if (icon) {
            if (content.classList.contains('is-hidden')) {
                icon.style.transform = "rotate(0deg)";
            } else {
                icon.style.transform = "rotate(180deg)";
            }
        }
    }
}


// bouton burger pour navbar
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});


function showProjects(category) {
    const etudiants = document.getElementById('projets-etudiants');
    const personnels = document.getElementById('projets-personnels');

    if (category === 'etudiants') {
        etudiants.classList.remove('is-hidden');
        personnels.classList.add('is-hidden');
    } else {
        personnels.classList.remove('is-hidden');
        etudiants.classList.add('is-hidden');
    }
}


function showProjects(category) {
    const etudiants = document.getElementById('projets-etudiants');
    const personnels = document.getElementById('projets-personnels');
    const btnEtudiants = document.getElementById('btn-etudiants');
    const btnPersonnels = document.getElementById('btn-personnels');

    if (category === 'etudiants') {
        // Affichage des sections
        etudiants.classList.remove('is-hidden');
        personnels.classList.add('is-hidden');

        // État des boutons (Etudiants devient plein, Personnels devient contour)
        btnEtudiants.classList.remove('is-outlined');
        btnPersonnels.classList.add('is-outlined');
    } else {
        // Affichage des sections
        personnels.classList.remove('is-hidden');
        etudiants.classList.add('is-hidden');

        // État des boutons (Personnels devient plein, Etudiants devient contour)
        btnPersonnels.classList.remove('is-outlined');
        btnEtudiants.classList.add('is-outlined');
    }
}