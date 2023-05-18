var navLinks = document.querySelectorAll('.side-nav ul li a');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
});


// JavaScript
window.onscroll = function () { changeActiveNav() };

function changeActiveNav() {
    const sections = document.querySelectorAll('.container > div');
    const nav_links = document.querySelectorAll('.side-nav ul li a');

    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

    nav_links.forEach((link) => link.classList.remove('active'));
    nav_links[index].classList.add('active');
}






