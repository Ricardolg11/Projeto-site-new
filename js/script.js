document.addEventListener('DOMContentLoaded', function () {
    // Inicialize o Swiper quando o conteúdo da página estiver totalmente carregado
    let mySwiper = new Swiper('.swiper-container', {
        // Swiper impedir a rolagem lateral 
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 2500, // 3 segundos
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

    // Adicione um ouvinte de evento para cada link que rolará suavemente
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Use o método scrollIntoView para rolar suavemente até o elemento alvo
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});