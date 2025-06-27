function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    const items = document.querySelectorAll('.carousel-item');

    banner.style.background = `url("./image/${bg}") no-repeat`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });

    items.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.carousel');
//     M.Carousel.init(elems, {
//         duration: 300,
//         dist: -30,
//         shift: 0,
//         padding: 20,
//         numVisible: 5,
//         indicators: false
//     });
// });
