window.addEventListener('scroll',(e) => {
    let scrolled  =  window.pageYOffset;
    const overlay = document.querySelector('.overlay');
    overlay.style.top = - (scrolled * 6.2) + `px`;
});