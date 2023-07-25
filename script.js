document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById('loader');
    var body = document.body;

    body.classList.add('no-scroll');
    createYouTubePlayer(videoIds[0], 'player0');
});

window.onload = function () {
    var loader = document.getElementById('loader');
    var body = document.body;

    body.classList.remove('no-scroll');
    loader.style.display = 'none';
};

function myFunctionCollapse() {
    var x = document.getElementById("collapse");
    var paragraph = document.getElementById("collapseParagraph");

    if (x.style.maxHeight) {
        x.style.maxHeight = null;
        paragraph.innerHTML = "Plus";
    } else {
        x.style.maxHeight = x.scrollHeight + "px";
        paragraph.innerHTML = "Moins";
    }
}

function myFunctionCollapse2() {
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

    var spans = document.querySelectorAll('span.myTagBtn');
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        span.classList.remove('active');
    }

    var activeSpan = document.getElementById(tag + 'Btn');
    activeSpan.classList.add('active');
}

var apiKey = '';

var videoIds = [
    'ymEEtztYZCM', 'JLrdzv2fADA', 'ZuHmKU9ALKw', 'Ofyj6JjdiYA', 'bevH0MbOt90', '8bkbf6vWPBA', 'UPBb9YMhJY4', 'pNDGYlI9N7Q', '045U4OsqFkk', 'E8BsztXiUgs', 'N-0SwjclxiE', 'wjjWOZ-RLms'
];

var players = {};

function createYouTubePlayer(videoId, playerDivId) {
    var player = new YT.Player(playerDivId, {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'key': apiKey,
            'rel': 0,
            'modestbranding': 1,
            'autoplay': 1
        },
    });

    players[playerDivId] = player;
}

function toggleDivs(activeIndex) {
    var divs = document.querySelectorAll('.box');

    divs.forEach(function (div, index) {
        if (index === activeIndex - 1) {
            div.classList.remove('hidden');
            var playerDivId = 'player' + (activeIndex - 1);
            if (!players[playerDivId]) {
                var videoId = videoIds[activeIndex - 1];
                createYouTubePlayer(videoId, playerDivId);
            } else {

                players[playerDivId].playVideo();
            }
        } else {
            div.classList.add('hidden');
            var playerDivId = 'player' + index;
            if (players[playerDivId]) {
                players[playerDivId].pauseVideo();
            }
        }
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function onYouTubeIframeAPIReady() {
    var divs = document.querySelectorAll('.box');
    divs.forEach(function (div, index) {
        if (index !== 0) {
            div.classList.add('hidden');
        }
    });

    var videoId = videoIds[0];
    var playerDivId = 'player0';
    createYouTubePlayer(videoId, playerDivId);
}

function initializeSmoothScrolling(divId, leftArrowId, rightArrowId) {
    const maDiv = document.getElementById(divId);
    const flecheGauche = document.getElementById(leftArrowId);
    const flecheDroite = document.getElementById(rightArrowId);

    let isScrolling = false;
    let startX;
    let scrollLeft;

    function checkArrowsVisibility() {
        if (maDiv.scrollWidth > maDiv.clientWidth) {
            flecheGauche.style.display = 'block';
            flecheDroite.style.display = 'block';
        } else {
            flecheGauche.style.display = 'none';
            flecheDroite.style.display = 'none';
        }
    }

    flecheGauche.addEventListener('click', () => {
        const scrollAmount = 100;
        smoothScrollTo(maDiv, maDiv.scrollLeft - scrollAmount, 500);
    });

    flecheDroite.addEventListener('click', () => {
        const scrollAmount = 100;
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
        const walk = (x - startX) * 1;
        maDiv.scrollLeft = scrollLeft - walk;
    });

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

document.addEventListener('DOMContentLoaded', function () {
    var showButton = document.getElementById('addButton');
    var hideButton = document.getElementById('removeButton');
    var hideButton2 = document.getElementById('removeButton2');
    var element = document.getElementById('myElement');
    var secondElement = document.getElementById('secondElement');

    showButton.addEventListener('click', function () {
        element.classList.add('highlight');
        secondElement.classList.add('slide-in-left');
        document.body.classList.add('no-scroll');
    });

    hideButton.addEventListener('click', function () {
        element.classList.remove('highlight');
        secondElement.classList.remove('slide-in-left');
        document.body.classList.remove('no-scroll');
    });

    hideButton2.addEventListener('click', function () {
        element.classList.remove('highlight');
        secondElement.classList.remove('slide-in-left');
        document.body.classList.remove('no-scroll');
    });
});