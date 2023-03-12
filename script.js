// we toggle CSS class "open"
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function toTop() {
    document.body.scrollTop = 0; //for safari

    document.documentElement.scrollTop =0; //for rest of browsers
}