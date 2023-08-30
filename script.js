// JavaScript - Portfolio pierregoudet.io
// Date : 06/08/2023
// Créé par : Pierre GOUDET

// Cette ligne de code écoute l'événement "DOMContentLoaded" sur le document, ce qui signifie que le code à l'intérieur de la fonction anonyme sera exécuté lorsque le contenu HTML de la page est complètement chargé.
document.addEventListener('DOMContentLoaded', function () {
    // On récupère l'élément avec l'ID "loader" et on le stocke dans la variable "loader".
    var loader = document.getElementById('loader');
    // On récupère l'élément "body" (le corps) du document HTML et on le stocke dans la variable "body".
    var body = document.body;

    // On ajoute la classe CSS "no-scroll" à l'élément "body", ce qui empêchera le défilement de la page.
    body.classList.add('no-scroll');

    // On appelle la fonction "createYouTubePlayer" avec le premier élément du tableau "videoIds" comme ID de vidéo et l'ID "player0" comme ID d'élément HTML où la vidéo sera intégrée.
    createYouTubePlayer(videoIds[0], 'player0');
});

// Cette partie du code s'exécute lorsque tout le contenu de la page, y compris les images et autres ressources, est complètement chargée.
window.onload = function () {
    // On récupère l'élément avec l'ID "loader" et on le stocke dans la variable "loader".
    var loader = document.getElementById('loader');
    // On récupère l'élément "body" (le corps) du document HTML et on le stocke dans la variable "body".
    var body = document.body;

    // On supprime la classe CSS "no-scroll" de l'élément "body", permettant ainsi à la page de défiler normalement.
    body.classList.remove('no-scroll');

    // On change le style de l'élément "loader" en définissant sa propriété "display" à "none", ce qui le rend invisible et le cache.
    loader.style.display = 'none';
};

// Cette fonction gère le basculement (ou collapse) d'un seul élément rétractable.
function myFunctionCollapse() {
    // On récupère l'élément avec l'ID "collapse" et on le stocke dans la variable "x".
    var x = document.getElementById("collapse");
    // On récupère l'élément avec l'ID "collapseParagraph" et on le stocke dans la variable "paragraph".
    var paragraph = document.getElementById("collapseParagraph");

    // Si l'élément "x" a une valeur de style "maxHeight" (c'est-à-dire qu'il est actuellement ouvert),
    // alors on le réduit en définissant sa hauteur maximale à null, ce qui le cache.
    // On change également le contenu du paragraphe pour indiquer "Plus".
    if (x.style.maxHeight) {
        x.style.maxHeight = null;
        paragraph.innerHTML = "Plus";
    } else {
        // Sinon, s'il n'a pas de valeur de style "maxHeight" (c'est-à-dire qu'il est actuellement fermé),
        // on ajuste la hauteur maximale à la hauteur totale de son contenu (scrollHeight) en pixels,
        // ce qui l'ouvre. On change aussi le contenu du paragraphe pour indiquer "Moins".
        x.style.maxHeight = x.scrollHeight + "px";
        paragraph.innerHTML = "Moins";
    }
}

// Cette fonction gère le basculement de plusieurs éléments rétractables (classe "collapse2").
function myFunctionCollapse2() {
    // On récupère tous les éléments avec la classe "collapse2" et on les stocke dans la variable "elements".
    const elements = document.getElementsByClassName("collapse2");

    // On transforme la collection d'éléments en un tableau et on itère à travers chaque élément.
    Array.from(elements).forEach((x) => {
        // Si l'élément "x" a une valeur de style "maxHeight" (c'est-à-dire qu'il est actuellement ouvert),
        // alors on le réduit en définissant sa hauteur maximale à null, ce qui le cache.
        if (x.style.maxHeight) {
            x.style.maxHeight = null;
        } else {
            // Sinon, s'il n'a pas de valeur de style "maxHeight" (c'est-à-dire qu'il est actuellement fermé),
            // on ajuste la hauteur maximale à la hauteur totale de son contenu (scrollHeight) en pixels, ce qui l'ouvre.
            x.style.maxHeight = x.scrollHeight + "px";
        }
    });
}

// Cette fonction permet de basculer entre le mode sombre et le mode clair pour les éléments ayant la classe "darkable".
function toggleMode() {
    // On sélectionne tous les éléments avec la classe "darkable" en utilisant querySelectorAll
    const darkableElements = document.querySelectorAll('.darkable');

    // On itère à travers chaque élément avec la classe "darkable"
    darkableElements.forEach(element => {
        // Si l'élément a déjà la classe "dark-mode",
        // cela signifie qu'il est dans le mode sombre, donc on la supprime pour passer au mode clair.
        if (element.classList.contains('dark-mode')) {
            element.classList.remove('dark-mode');
        } else {
            // Sinon, si l'élément n'a pas la classe "dark-mode",
            // cela signifie qu'il est dans le mode clair, donc on l'ajoute pour passer au mode sombre.
            element.classList.add('dark-mode');
        }
    });
}

// Cette fonction permet de basculer entre le mode plein écran et le mode normal pour l'élément racine du document (document.documentElement).
function toggleFullscreen() {
    // On récupère l'élément racine du document (document.documentElement) et on le stocke dans la variable "element".
    const element = document.documentElement;

    // On vérifie si le navigateur prend en charge la méthode requestFullscreen pour activer le mode plein écran.
    if (element.requestFullscreen) {
        // Si un élément est déjà en mode plein écran, on le désactive (sortie du mode plein écran).
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            // Sinon, si aucun élément n'est en mode plein écran, on active le mode plein écran pour "element".
            element.requestFullscreen();
        }
    } else if (element.mozRequestFullScreen) { // Pour Firefox
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            element.mozRequestFullScreen();
        }
    } else if (element.webkitRequestFullscreen) { // Pour Chrome, Safari et Opera
        if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else {
            element.webkitRequestFullscreen();
        }
    } else if (element.msRequestFullscreen) { // Pour Internet Explorer et Edge
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            element.msRequestFullscreen();
        }
    }
}

// Cette fonction permet de basculer l'affichage d'éléments en fonction d'une étiquette (tag) donnée.
function toggleElements(tag) {
    var elementsToShow;

    // Si la balise (tag) est 'all', on montre tous les éléments avec la classe 'myTag'.
    if (tag === 'all') {
        elementsToShow = document.getElementsByClassName('myTag');
    } else {
        // Sinon, on sélectionne les éléments avec la classe 'myTag' qui ont la classe correspondant à la balise donnée.
        var elements = document.getElementsByClassName('myTag');
        elementsToShow = Array.from(elements).filter(function (element) {
            return element.classList.contains(tag);
        });
    }

    // On sélectionne tous les éléments avec la classe 'myTag'.
    var allElements = document.getElementsByClassName('myTag');

    // On itère à travers chaque élément avec la classe 'myTag'.
    for (var i = 0; i < allElements.length; i++) {
        var element = allElements[i];
        // Si l'élément fait partie des éléments à afficher, on le montre en supprimant la classe 'hidden'
        // et en ajoutant la classe 'd-flex' (probablement pour un affichage flexbox).
        if (elementsToShow.includes(element)) {
            element.classList.remove('hidden');
            element.classList.add('d-flex');
        } else {
            // Sinon, on cache l'élément en supprimant la classe 'd-flex' et en ajoutant la classe 'hidden'.
            element.classList.remove('d-flex');
            element.classList.add('hidden');
        }
    }

    // On sélectionne tous les éléments <span> avec la classe 'myTagBtn'.
    var spans = document.querySelectorAll('span.myTagBtn');

    // On itère à travers chaque élément <span>.
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        // On supprime la classe 'active' de tous les éléments <span>.
        span.classList.remove('active');
    }

    // On sélectionne l'élément <span> correspondant à la balise (tag) donnée et on lui ajoute la classe 'active'.
    var activeSpan = document.getElementById(tag + 'Btn');
    activeSpan.classList.add('active');
}

// Cette fonction crée un lecteur vidéo YouTube intégré dans un élément HTML spécifié.

var apiKey = '';

var videoIds = [
    'ymEEtztYZCM', 'JLrdzv2fADA', 'ZuHmKU9ALKw', 'Ofyj6JjdiYA', 'bevH0MbOt90', '8bkbf6vWPBA', 'UPBb9YMhJY4', 'pNDGYlI9N7Q', '045U4OsqFkk', 'E8BsztXiUgs', 'N-0SwjclxiE', 'wjjWOZ-RLms'
];

var players = {};

function createYouTubePlayer(videoId, playerDivId) {
    // Création d'un nouvel objet YT.Player en utilisant le constructeur.
    var player = new YT.Player(playerDivId, {
        height: '360',                  // Hauteur du lecteur vidéo en pixels.
        width: '640',                   // Largeur du lecteur vidéo en pixels.
        videoId: videoId,               // Identifiant de la vidéo YouTube à charger.
        playerVars: {                   // Paramètres du lecteur vidéo.
            'key': apiKey,              // Clé d'API YouTube pour accéder à l'API.
            'rel': 0,                   // Désactiver les vidéos suggérées à la fin.
            'modestbranding': 1,        // Masquer le logo YouTube.
            'autoplay': 1               // Lancer automatiquement la lecture de la vidéo.
        },
    });

    // Stockage de l'instance du lecteur vidéo dans l'objet "players" avec l'identifiant de l'élément.
    players[playerDivId] = player;
}


// Cette fonction bascule l'affichage des éléments .box en fonction de l'index actif.
function toggleDivs(activeIndex) {
    // Sélection de tous les éléments avec la classe .box (qui sont les conteneurs de section).
    var divs = document.querySelectorAll('.box');

    // Itération à travers chaque élément .box.
    divs.forEach(function (div, index) {
        // Si l'index de l'élément actuel correspond à l'index actif - 1 (en raison de la numérotation 0-based des tableaux).
        if (index === activeIndex - 1) {
            // Affichage de l'élément actuel en supprimant la classe 'hidden'.
            div.classList.remove('hidden');

            // Construction de l'identifiant du lecteur vidéo.
            var playerDivId = 'player' + (activeIndex - 1);

            // Si le lecteur n'a pas encore été créé, on le crée avec l'ID de la vidéo approprié.
            if (!players[playerDivId]) {
                var videoId = videoIds[activeIndex - 1];
                createYouTubePlayer(videoId, playerDivId);
            } else {
                // Si le lecteur existe déjà, on le lance.
                players[playerDivId].playVideo();
            }
        } else {
            // Si l'index ne correspond pas à l'index actif, on cache l'élément en ajoutant la classe 'hidden'.
            div.classList.add('hidden');

            // Construction de l'identifiant du lecteur vidéo pour l'élément actuel.
            var playerDivId = 'player' + index;

            // Si le lecteur existe déjà, on le met en pause.
            if (players[playerDivId]) {
                players[playerDivId].pauseVideo();
            }
        }
    });

    // Faire défiler la fenêtre vers le haut de la page en douceur.
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Cette fonction est appelée lorsque l'API IFrame YouTube est prête à être utilisée.
function onYouTubeIframeAPIReady() {
    // Sélection de tous les éléments avec la classe .box.
    var divs = document.querySelectorAll('.box');

    // Itération à travers chaque élément .box.
    divs.forEach(function (div, index) {
        // Si l'index de l'élément actuel n'est pas le premier (index 0),
        // on ajoute la classe 'hidden' pour cacher cet élément.
        if (index !== 0) {
            div.classList.add('hidden');
        }
    });

    // Sélection de l'identifiant de la première vidéo et de l'élément où le lecteur sera intégré.
    var videoId = videoIds[0];
    var playerDivId = 'player0';

    // Création du lecteur vidéo pour la première vidéo et son intégration dans l'élément.
    createYouTubePlayer(videoId, playerDivId);
}

// Cette fonction initialise le défilement fluide (smooth scrolling) pour une div spécifiée
// avec les flèches de défilement gauche et droite associées.
function initializeSmoothScrolling(divId, leftArrowId, rightArrowId) {
    // Récupération des éléments HTML en fonction de leurs IDs.
    const maDiv = document.getElementById(divId);
    const flecheGauche = document.getElementById(leftArrowId);
    const flecheDroite = document.getElementById(rightArrowId);

    // Variables pour gérer le défilement en cas de mouvement de souris.
    let isScrolling = false;
    let startX;
    let scrollLeft;

    // Fonction pour vérifier la visibilité des flèches en fonction du contenu déroulant de la div.
    function checkArrowsVisibility() {
        if (maDiv.scrollWidth > maDiv.clientWidth) {
            flecheGauche.style.display = 'block';
            flecheDroite.style.display = 'block';
        } else {
            flecheGauche.style.display = 'none';
            flecheDroite.style.display = 'none';
        }
    }

    // Écouteur d'événement pour la flèche de défilement gauche.
    flecheGauche.addEventListener('click', () => {
        const scrollAmount = 100;
        smoothScrollTo(maDiv, maDiv.scrollLeft - scrollAmount, 500);
    });

    // Écouteur d'événement pour la flèche de défilement droite.
    flecheDroite.addEventListener('click', () => {
        const scrollAmount = 100;
        smoothScrollTo(maDiv, maDiv.scrollLeft + scrollAmount, 500);
    });

    // Écouteur d'événement pour le clic de la souris dans la div.
    maDiv.addEventListener('mousedown', (event) => {
        event.preventDefault();
        isScrolling = true;
        startX = event.pageX - maDiv.offsetLeft;
        scrollLeft = maDiv.scrollLeft;
    });

    // Écouteur d'événement pour le relâchement du clic de la souris.
    maDiv.addEventListener('mouseup', () => {
        isScrolling = false;
    });

    // Écouteur d'événement pour le mouvement de la souris dans la div.
    maDiv.addEventListener('mousemove', (event) => {
        if (!isScrolling) return;
        event.preventDefault();
        const x = event.pageX - maDiv.offsetLeft;
        const walk = (x - startX) * 1;
        maDiv.scrollLeft = scrollLeft - walk;
    });

    // Écouteurs d'événements pour vérifier la visibilité des flèches lorsque la page est chargée et lorsqu'elle est redimensionnée.
    window.addEventListener('load', checkArrowsVisibility);
    window.addEventListener('resize', checkArrowsVisibility);
}

// Écouteur d'événement qui se déclenche lorsque le contenu DOM est complètement chargé.
window.addEventListener('DOMContentLoaded', () => {
    // Appel de la fonction pour initialiser le défilement fluide pour le premier ensemble de sliders.
    // Les arguments sont les IDs des éléments div et flèches spécifiques pour ce slider.
    initializeSmoothScrolling('slider1Div', 'slider1FlecheGauche', 'slider1FlecheDroite');

    // Appel de la fonction pour initialiser le défilement fluide pour le deuxième ensemble de sliders.
    // Les arguments sont les IDs des éléments div et flèches spécifiques pour ce slider.
    initializeSmoothScrolling('slider2Div', 'slider2FlecheGauche', 'slider2FlecheDroite');
});

// Cette fonction réalise un défilement fluide (smooth scrolling) vers une destination donnée
// à l'intérieur d'un élément spécifié.
function smoothScrollTo(element, destination, duration) {
    // Récupération de la position de départ du défilement.
    const start = element.scrollLeft;

    // Calcul de la différence entre la destination et la position de départ.
    const difference = destination - start;

    // Récupération du moment de départ.
    const startTime = performance.now();

    // Fonction pour appliquer une courbe d'accélération et de décélération au défilement.
    function easeInOutQuad(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    }

    // Fonction récursive pour effectuer le défilement en utilisant requestAnimationFrame.
    function scroll(timestamp) {
        // Calcul du temps écoulé depuis le début du défilement.
        const currentTime = timestamp - startTime;

        // Calcul de la nouvelle position du défilement en fonction du temps écoulé.
        const scrollTo = easeInOutQuad(currentTime / duration) * difference + start;

        // Mise à jour de la position de défilement de l'élément.
        element.scrollLeft = scrollTo;

        // Si le temps écoulé est inférieur à la durée spécifiée, on continue le défilement.
        if (currentTime < duration) {
            window.requestAnimationFrame(scroll);
        }
    }

    // Premier appel à requestAnimationFrame pour commencer le défilement.
    window.requestAnimationFrame(scroll);
}

// Attend que le contenu du DOM soit complètement chargé avant d'exécuter le code.
document.addEventListener('DOMContentLoaded', function () {
    // Sélection d'éléments par leurs IDs.
    var showButton = document.getElementById('addButton');
    var hideButton = document.getElementById('removeButton');
    var hideButton2 = document.getElementById('removeButton2');
    var element = document.getElementById('myElement');
    var secondElement = document.getElementById('secondElement');

    // Ajout d'un écouteur d'événement pour le clic sur le bouton d'affichage.
    showButton.addEventListener('click', function () {
        // Ajout des classes 'highlight' et 'slide-in-left' pour modifier l'apparence de l'élément et du second élément.
        element.classList.add('highlight');
        secondElement.classList.add('slide-in-left');
        // Ajout de la classe 'no-scroll' au corps du document pour désactiver le défilement.
        document.body.classList.add('no-scroll');
    });

    // Ajout d'un écouteur d'événement pour le clic sur le bouton de masquage.
    hideButton.addEventListener('click', function () {
        // Suppression des classes 'highlight' et 'slide-in-left' pour réinitialiser l'apparence des éléments.
        element.classList.remove('highlight');
        secondElement.classList.remove('slide-in-left');
        // Suppression de la classe 'no-scroll' du corps du document pour réactiver le défilement.
        document.body.classList.remove('no-scroll');
    });

    // Ajout d'un écouteur d'événement pour le clic sur le deuxième bouton de masquage.
    hideButton2.addEventListener('click', function () {
        // Suppression des classes 'highlight' et 'slide-in-left' pour réinitialiser l'apparence des éléments.
        element.classList.remove('highlight');
        secondElement.classList.remove('slide-in-left');
        // Suppression de la classe 'no-scroll' du corps du document pour réactiver le défilement.
        document.body.classList.remove('no-scroll');
    });
});
