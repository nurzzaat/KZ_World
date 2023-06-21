const navbar = document.querySelector('nav');
const header_content = document.querySelector('header');

const options = {
    rootMargin: '-12%'
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            navbar.classList.remove('changeColor');
        else
            navbar.classList.add('changeColor');
    })
}, options);
observer.observe(header_content);

function zoomIn(pic) {
    var width = pic.clientWidth;
    var height = pic.clientHeight;
    pic.style.width = width + 10 + "px";
    pic.style.height = height + 10 + "px";
}

function zoomOut(pic) {
    var width = pic.clientWidth;
    var height = pic.clientHeight;
    pic.style.width = width - 10 + "px";
    pic.style.height = height - 10 + "px";
}