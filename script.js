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

function toggleDivs(activeIndex) {
    var divs = document.querySelectorAll('.box');

    divs.forEach(function (div, index) {
        if (index === activeIndex - 1) {
            div.classList.remove('hidden');
            stopVideos(div);
        } else {
            div.classList.add('hidden');
            stopVideos(div);
        }
    });

    // Remonter en haut de la page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function stopVideos(container) {
    var videos = container.querySelectorAll('video');
    videos.forEach(function (video) {
        video.pause();
        video.currentTime = 0;
    });
}












