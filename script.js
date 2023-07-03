document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById('loader');
    var body = document.body;

    // Ajouter la classe 'no-scroll' au body lors du chargement
    body.classList.add('no-scroll');

    setTimeout(function () {
        // Supprimer la classe 'no-scroll' après le délai spécifié
        body.classList.remove('no-scroll');
        // Cacher le loader
        loader.style.display = 'none';
    }, 2000); // Définissez la durée du délai en millisecondes (dans cet exemple, 2000 ms soit 2 secondes)
});

function myFunctionCollapse() {
    var x = document.getElementById("collapse");
    var paragraph = document.getElementById("collapseParagraph");

    if (x.style.maxHeight) {
        // Si le contenu est déjà étendu, on le réduit
        x.style.maxHeight = null;
        paragraph.innerHTML = "Plus"; // Remplacer le texte du paragraphe par "Read More"
    } else {
        // Si le contenu est réduit, on l'étend pour afficher le texte complet
        x.style.maxHeight = x.scrollHeight + "px";
        paragraph.innerHTML = "Moins"; // Remplacer le texte du paragraphe par "Read Less"
    }
}

function myFunctionCollapse2(className) {
    const elements = document.getElementsByClassName("collapse2");
    Array.from(elements).forEach((x) => {
        if (x.style.maxHeight) {
            x.style.maxHeight = null;
        } else {
            x.style.maxHeight = x.scrollHeight + "px";
        }
    });
}

function toggleMode() {
    const darkableElements = document.querySelectorAll('.darkable');

    darkableElements.forEach(element => {
        if (element.classList.contains('dark-mode')) {
            element.classList.remove('dark-mode');
        } else {
            element.classList.add('dark-mode');
        }
    });
}

function reduceVolume() {
    const video = document.getElementById('myVideo');
    if (video) {
        video.volume = 0.2;
    }
}

function toggleFullscreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            element.requestFullscreen();
        }
    } else if (element.mozRequestFullScreen) {
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            element.mozRequestFullScreen();
        }
    } else if (element.webkitRequestFullscreen) {
        if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else {
            element.webkitRequestFullscreen();
        }
    } else if (element.msRequestFullscreen) {
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            element.msRequestFullscreen();
        }
    }
}

function toggleElements(tag) {
    var elementsToShow;

    if (tag === 'all') {
        elementsToShow = document.getElementsByClassName('myTag');
    } else {
        var elements = document.getElementsByClassName('myTag');
        elementsToShow = Array.from(elements).filter(function (element) {
            return element.classList.contains(tag);
        });
    }

    var allElements = document.getElementsByClassName('myTag');

    for (var i = 0; i < allElements.length; i++) {
        var element = allElements[i];
        if (elementsToShow.includes(element)) {
            element.classList.remove('hidden');
            element.classList.add('d-flex');
        } else {
            element.classList.remove('d-flex');
            element.classList.add('hidden');
        }
    }

    // Gérer les classes actives des spans
    var spans = document.querySelectorAll('span.myTagBtn');
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        span.classList.remove('active');
    }

    var activeSpan = document.getElementById(tag + 'Btn');
    activeSpan.classList.add('active');
}

function stopVideos(container) {
    var videos = container.querySelectorAll('video');
    videos.forEach(function (video) {
        video.pause();
        video.currentTime = 0;
    });
}

function toggleDivs(activeIndex) {
    var divs = document.querySelectorAll('.box');

    divs.forEach(function (div, index) {
        var video = div.querySelector('video');

        if (index === activeIndex - 1) {
            div.classList.remove('hidden');
            video.load();
            video.autoplay = true; // Ajoute l'autoplay à la vidéo
        } else {
            div.classList.add('hidden');
            stopVideos(div);
            video.autoplay = false; // Désactive l'autoplay pour les autres vidéos
        }
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function initializeSmoothScrolling(divId, leftArrowId, rightArrowId) {
    const maDiv = document.getElementById(divId);
    const flecheGauche = document.getElementById(leftArrowId);
    const flecheDroite = document.getElementById(rightArrowId);

    let isScrolling = false;
    let startX;
    let scrollLeft;

    // Fonction pour vérifier la visibilité des flèches
    function checkArrowsVisibility() {
        if (maDiv.scrollWidth > maDiv.clientWidth) {
            flecheGauche.style.display = 'block'; // Afficher la flèche gauche si le contenu nécessite un défilement
            flecheDroite.style.display = 'block'; // Afficher la flèche droite si le contenu nécessite un défilement
        } else {
            flecheGauche.style.display = 'none'; // Masquer la flèche gauche si le contenu n'a pas besoin de défilement
            flecheDroite.style.display = 'none'; // Masquer la flèche droite si le contenu n'a pas besoin de défilement
        }
    }

    flecheGauche.addEventListener('click', () => {
        const scrollAmount = 100; // Set the desired number of pixels to scroll
        smoothScrollTo(maDiv, maDiv.scrollLeft - scrollAmount, 500);
    });

    flecheDroite.addEventListener('click', () => {
        const scrollAmount = 100; // Set the desired number of pixels to scroll
        smoothScrollTo(maDiv, maDiv.scrollLeft + scrollAmount, 500);
    });

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
        const walk = (x - startX) * 1; // Adjust the scroll speed by multiplying the difference
        maDiv.scrollLeft = scrollLeft - walk;
    });

    // Vérifier la visibilité des flèches au chargement et lors du redimensionnement de la fenêtre
    window.addEventListener('load', checkArrowsVisibility);
    window.addEventListener('resize', checkArrowsVisibility);
}

window.addEventListener('DOMContentLoaded', () => {
    initializeSmoothScrolling('slider1Div', 'slider1FlecheGauche', 'slider1FlecheDroite');
    initializeSmoothScrolling('slider2Div', 'slider2FlecheGauche', 'slider2FlecheDroite');
});

function smoothScrollTo(element, destination, duration) {
    const start = element.scrollLeft;
    const difference = destination - start;
    const startTime = performance.now();

    function easeInOutQuad(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    }

    function scroll(timestamp) {
        const currentTime = timestamp - startTime;
        const scrollTo = easeInOutQuad(currentTime / duration) * difference + start;
        element.scrollLeft = scrollTo;

        if (currentTime < duration) {
            window.requestAnimationFrame(scroll);
        }
    }

    window.requestAnimationFrame(scroll);
}

document.addEventListener('DOMContentLoaded', function() {
    var showButton = document.getElementById('addButton');
    var hideButton = document.getElementById('removeButton');
    var hideButton2 = document.getElementById('removeButton2');
    var element = document.getElementById('myElement');
    var secondElement = document.getElementById('secondElement');

    showButton.addEventListener('click', function() {
        // Ajoute la classe CSS 'highlight' pour afficher l'élément
        element.classList.add('highlight');
        secondElement.classList.add('slide-in-left');
        document.body.classList.add('no-scroll');
    });

    hideButton.addEventListener('click', function() {
        // Supprime la classe CSS 'highlight' pour masquer l'élément
        element.classList.remove('highlight');
        secondElement.classList.remove('slide-in-left');
        document.body.classList.remove('no-scroll');
    });

    hideButton2.addEventListener('click', function() {
        // Supprime la classe CSS 'highlight' pour masquer l'élément
        element.classList.remove('highlight');
        secondElement.classList.remove('slide-in-left');
        document.body.classList.remove('no-scroll');
    });
});














