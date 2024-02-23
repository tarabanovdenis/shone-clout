
var body = document.getElementsByTagName('body')[0],
    scrollTop = 0;

body.addEventListener('click', function(e) {
    if(e.target.classList.contains('g-burger')) {
        body.classList.toggle('menu-overlay_open');
    } else if(e.target.classList.contains('g-popup')) {
        body.classList.toggle('popup_open');
    } else {
        body.classList.remove('menu-overlay_open', 'popup_open');
    }
});

window.onscroll = function (e) {
    scrollTop = this.scrollY
    if (scrollTop >= 150) {
        body.classList.add('g-scroll');
    } else {
        body.classList.remove('g-scroll');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});