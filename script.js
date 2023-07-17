document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const body = document.body;

    // Ajouter la classe 'no-scroll' au body lors du chargement
    body.classList.add('no-scroll');

    setTimeout(function () {
        // Supprimer la classe 'no-scroll' après le délai spécifié
        body.classList.remove('no-scroll');
        // Cacher le loader
        loader.style.display = 'none';
    }, 2000);
});

function myFunctionCollapse() {
    const x = document.getElementById('collapse');
    const paragraph = document.getElementById('collapseParagraph');

    if (x.style.maxHeight) {
        // Si le contenu est déjà étendu, on le réduit
        x.style.maxHeight = null;
        paragraph.innerHTML = 'Plus'; // Remplacer le texte du paragraphe par "Read More"
    } else {
        // Si le contenu est réduit, on l'étend pour afficher le texte complet
        x.style.maxHeight = x.scrollHeight + 'px';
        paragraph.innerHTML = 'Moins'; // Remplacer le texte du paragraphe par "Read Less"
    }
}

// Attendre que le contenu HTML soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader'); // Récupérer l'élément du loader
    const body = document.body; // Récupérer l'élément du corps de la page

    // Ajouter la classe 'no-scroll' au corps lors du chargement
    body.classList.add('no-scroll');

    setTimeout(function () {
        // Supprimer la classe 'no-scroll' après le délai spécifié
        body.classList.remove('no-scroll');
        // Cacher le loader en modifiant la propriété CSS 'display'
        loader.style.display = 'none';
    }, 2000); // Définir une temporisation de 2000 millisecondes (2 secondes)
});

// Fonction pour gérer l'expansion/réduction d'un élément
function myFunctionCollapse() {
    const x = document.getElementById('collapse'); // Récupérer l'élément à afficher/cacher
    const paragraph = document.getElementById('collapseParagraph'); // Récupérer le paragraphe associé

    if (x.style.maxHeight) {
        // Si le contenu est déjà étendu, on le réduit
        x.style.maxHeight = null; // Réinitialiser la valeur de 'maxHeight' pour cacher le contenu
        paragraph.innerHTML = 'Plus'; // Modifier le texte du paragraphe en "Plus"
    } else {
        // Si le contenu est réduit, on l'étend pour afficher le texte complet
        x.style.maxHeight = x.scrollHeight + 'px'; // Définir la valeur de 'maxHeight' pour afficher tout le contenu
        paragraph.innerHTML = 'Moins'; // Modifier le texte du paragraphe en "Moins"
    }
}

// Fonction pour gérer l'expansion/réduction de plusieurs éléments avec la même classe
function myFunctionCollapse2(className) {
    const elements = document.getElementsByClassName('collapse2'); // Récupérer tous les éléments à afficher/cacher
    Array.from(elements).forEach((x) => {
        // Parcourir chaque élément
        if (x.style.maxHeight) {
            x.style.maxHeight = null; // Réduire l'élément en réinitialisant la valeur de 'maxHeight'
        } else {
            x.style.maxHeight = x.scrollHeight + 'px'; // Étendre l'élément en définissant la valeur de 'maxHeight'
        }
    });
}

// Fonction pour basculer le mode d'affichage (classe) des éléments
function toggleMode() {
    const darkableElements = document.querySelectorAll('.darkable'); // Récupérer tous les éléments pouvant être sombres
    darkableElements.forEach((element) => {
        // Parcourir chaque élément
        element.classList.toggle('dark-mode'); // Inverser la présence de la classe 'dark-mode' sur l'élément
    });
}

// Fonction pour réduire le volume d'une vidéo spécifique
function reduceVolume() {
    const video = document.getElementById('myVideo'); // Récupérer l'élément de la vidéo
    if (video) {
        // Vérifier si l'élément de la vidéo existe
        video.volume = 0.2; // Définir le volume de la vidéo à 0.2 (20%)
    }
}

// Fonction pour basculer le mode plein écran du document
function toggleFullscreen() {
    const element = document.documentElement; // Récupérer l'élément racine (document)
    const fullscreenElement =
        document.fullscreenElement || // Standard
        document.mozFullScreenElement || // Mozilla
        document.webkitFullscreenElement || // WebKit
        document.msFullscreenElement; // Microsoft

    // Vérifier si le navigateur prend en charge le mode plein écran
    if (element.requestFullscreen) {
        // Utilisation de la méthode standard pour basculer le mode plein écran
        if (fullscreenElement) {
            document.exitFullscreen(); // Si l'élément est déjà en mode plein écran, le quitter
        } else {
            element.requestFullscreen(); // Si l'élément n'est pas en mode plein écran, y passer
        }
    } else if (element.mozRequestFullScreen) {
        // Utilisation de la méthode pour navigateur Mozilla
        if (fullscreenElement) {
            document.mozCancelFullScreen(); // Si l'élément est déjà en mode plein écran, le quitter
        } else {
            element.mozRequestFullScreen(); // Si l'élément n'est pas en mode plein écran, y passer
        }
    } else if (element.webkitRequestFullscreen) {
        // Utilisation de la méthode pour navigateur WebKit (Safari)
        if (fullscreenElement) {
            document.webkitExitFullscreen(); // Si l'élément est déjà en mode plein écran, le quitter
        } else {
            element.webkitRequestFullscreen(); // Si l'élément n'est pas en mode plein écran, y passer
        }
    } else if (element.msRequestFullscreen) {
        // Utilisation de la méthode pour navigateur Microsoft
        if (fullscreenElement) {
            document.msExitFullscreen(); // Si l'élément est déjà en mode plein écran, le quitter
        } else {
            element.msRequestFullscreen(); // Si l'élément n'est pas en mode plein écran, y passer
        }
    }
}

// Fonction pour basculer l'affichage des éléments en fonction d'un tag donné
function toggleElements(tag) {
    const elementsToShow =
        tag === 'all'
            ? document.getElementsByClassName('myTag') // Récupérer tous les éléments avec la classe 'myTag'
            : Array.from(document.getElementsByClassName('myTag')).filter((element) =>
                element.classList.contains(tag) // Filtrer les éléments ayant la classe spécifiée
            );

    const allElements = document.getElementsByClassName('myTag'); // Récupérer tous les éléments avec la classe 'myTag'

    // Parcourir tous les éléments et basculer leur affichage en fonction de leur présence dans 'elementsToShow'
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        if (elementsToShow.includes(element)) {
            // Si l'élément fait partie des éléments à afficher
            element.classList.remove('hidden'); // Supprimer la classe 'hidden'
            element.classList.add('d-flex'); // Ajouter la classe 'd-flex'
        } else {
            // Si l'élément ne fait pas partie des éléments à afficher
            element.classList.remove('d-flex'); // Supprimer la classe 'd-flex'
            element.classList.add('hidden'); // Ajouter la classe 'hidden'
        }
    }

    // Gérer les classes actives des spans (boutons)
    const spans = document.querySelectorAll('span.myTagBtn'); // Récupérer tous les spans avec la classe 'myTagBtn'
    spans.forEach((span) => {
        span.classList.toggle('active', span.id === tag + 'Btn'); // Inverser la présence de la classe 'active' en fonction du tag correspondant
    });
}

// Fonction pour arrêter la lecture des vidéos dans un conteneur spécifique
function stopVideos(container) {
    const videos = container.querySelectorAll('video'); // Récupérer toutes les vidéos dans le conteneur spécifié
    videos.forEach((video) => {
        // Parcourir chaque vidéo
        video.pause(); // Mettre la vidéo en pause
        video.currentTime = 0; // Remettre la position de lecture à 0
    });
}

// Fonction pour basculer l'affichage des divs en fonction de l'index actif
function toggleDivs(activeIndex) {
    const divs = document.querySelectorAll('.box'); // Récupérer toutes les divs avec la classe 'box'

    divs.forEach((div, index) => {
        const video = div.querySelector('video'); // Récupérer la vidéo à l'intérieur de la div

        if (index === activeIndex - 1) {
            // Si l'index correspond à l'index actif (soustrait 1 car les index commencent à partir de 0)
            div.classList.remove('hidden'); // Supprimer la classe 'hidden' pour afficher la div
            video.load(); // Charger la vidéo
            video.autoplay = true; // Activer l'autoplay pour la vidéo
        } else {
            // Si l'index ne correspond pas à l'index actif
            div.classList.add('hidden'); // Ajouter la classe 'hidden' pour masquer la div
            stopVideos(div); // Arrêter la lecture des vidéos dans la div
            video.autoplay = false; // Désactiver l'autoplay pour la vidéo
        }
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// Fonction pour initialiser le défilement fluide d'un élément
function initializeSmoothScrolling(divId, leftArrowId, rightArrowId) {
    const maDiv = document.getElementById(divId); // Récupérer l'élément div spécifié
    const flecheGauche = document.getElementById(leftArrowId); // Récupérer l'élément de flèche gauche spécifié
    const flecheDroite = document.getElementById(rightArrowId); // Récupérer l'élément de flèche droite spécifié

    let isScrolling = false;
    let startX;
    let scrollLeft;

    // Fonction pour vérifier la visibilité des flèches
    function checkArrowsVisibility() {
        const hasScroll = maDiv.scrollWidth > maDiv.clientWidth; // Vérifier si le contenu défile horizontalement
        flecheGauche.style.display = hasScroll ? 'block' : 'none'; // Afficher ou masquer la flèche gauche en fonction du défilement
        flecheDroite.style.display = hasScroll ? 'block' : 'none'; // Afficher ou masquer la flèche droite en fonction du défilement
    }

    // Écouteurs d'événements pour les flèches gauche et droite
    flecheGauche.addEventListener('click', () => {
        const scrollAmount = 100; // Définir la quantité de défilement en pixels
        smoothScrollTo(maDiv, maDiv.scrollLeft - scrollAmount, 500); // Appeler la fonction de défilement fluide
    });

    flecheDroite.addEventListener('click', () => {
        const scrollAmount = 100; // Définir la quantité de défilement en pixels
        smoothScrollTo(maDiv, maDiv.scrollLeft + scrollAmount, 500); // Appeler la fonction de défilement fluide
    });

    // Écouteurs d'événements pour la souris (défilement fluide manuel)
    maDiv.addEventListener('mousedown', (event) => {
        event.preventDefault();
        isScrolling = true;
        startX = event.pageX - maDiv.offsetLeft;
        scrollLeft = maDiv.scrollLeft;
    });

    maDiv.addEventListener('mouseup', () => {
        isScrolling = false;
    });

    maDiv.addEventListener('mousemove', (event) => {
        if (!isScrolling) return;
        event.preventDefault();
        const x = event.pageX - maDiv.offsetLeft;
        const walk = (x - startX) * 1; // Ajuster la vitesse de défilement en multipliant la différence
        maDiv.scrollLeft = scrollLeft - walk;
    });

    // Vérifier la visibilité des flèches au chargement et lors du redimensionnement de la fenêtre
    window.addEventListener('load', checkArrowsVisibility);
    window.addEventListener('resize', checkArrowsVisibility);
}

// Écouteurs d'événements pour les défilements fluides spécifiques
window.addEventListener('DOMContentLoaded', () => {
    initializeSmoothScrolling('slider1Div', 'slider1FlecheGauche', 'slider1FlecheDroite');
    initializeSmoothScrolling('slider2Div', 'slider2FlecheGauche', 'slider2FlecheDroite');
});

// Fonction pour effectuer un défilement fluide vers une destination spécifiée
function smoothScrollTo(element, destination, duration) {
    const start = element.scrollLeft; // Position de départ du défilement
    const difference = destination - start; // Différence entre la destination et la position de départ
    const startTime = performance.now(); // Heure de départ du défilement

    // Fonction d'accélération pour le défilement fluide (effet de transition)
    function easeInOutQuad(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    }

    // Fonction récursive pour effectuer le défilement fluide
    function scroll(timestamp) {
        const currentTime = timestamp - startTime; // Temps écoulé depuis le début du défilement
        const scrollTo = easeInOutQuad(currentTime / duration) * difference + start; // Position de défilement calculée en fonction du temps écoulé
        element.scrollLeft = scrollTo; // Appliquer la position de défilement à l'élément

        if (currentTime < duration) {
            // Si le temps écoulé n'a pas atteint la durée spécifiée
            window.requestAnimationFrame(scroll); // Continuer le défilement en appelant la fonction de manière récursive
        }
    }

    window.requestAnimationFrame(scroll); // Début du défilement fluide
}

document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.getElementById('addButton'); // Récupérer le bouton d'affichage
    const hideButton = document.getElementById('removeButton'); // Récupérer le bouton de masquage
    const hideButton2 = document.getElementById('removeButton2'); // Récupérer un autre bouton de masquage
    const element = document.getElementById('myElement'); // Récupérer l'élément à afficher/masquer
    const secondElement = document.getElementById('secondElement'); // Récupérer un autre élément à afficher/masquer

    // Ajouter un écouteur d'événement sur le bouton d'affichage
    showButton.addEventListener('click', function () {
        // Ajouter la classe 'highlight' pour afficher l'élément
        element.classList.add('highlight');
        secondElement.classList.add('slide-in-left');
        document.body.classList.add('no-scroll'); // Ajouter la classe 'no-scroll' au corps pour empêcher le défilement
    });

    // Ajouter un écouteur d'événement sur le bouton de masquage
    hideButton.addEventListener('click', function () {
        // Supprimer la classe 'highlight' pour masquer l'élément
        element.classList.remove('highlight');
        secondElement.classList.remove('slide-in-left');
        document.body.classList.remove('no-scroll'); // Supprimer la classe 'no-scroll' du corps pour réactiver le défilement
    });

    // Ajouter un autre écouteur d'événement sur un autre bouton de masquage
    hideButton2.addEventListener('click', function () {
        // Supprimer la classe 'highlight' pour masquer l'élément
        element.classList.remove('highlight');
        secondElement.classList.remove('slide-in-left');
        document.body.classList.remove('no-scroll'); // Supprimer la classe 'no-scroll' du corps pour réactiver le défilement
    });
});

