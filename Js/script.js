document.addEventListener('DOMContentLoaded', function () {
    // Inicialize o Swiper quando o conteúdo da página estiver totalmente carregado
    let mySwiper = new Swiper('.swiper-container', {
        // Swiper
        loop: true,
        autoplay: {
            delay: 3000, // 3 segundos
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
