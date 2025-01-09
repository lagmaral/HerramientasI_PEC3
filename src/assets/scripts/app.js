document.addEventListener('DOMContentLoaded', function() {
    // Efecto de desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación para las tarjetas de categorias
    const cards = document.querySelectorAll('.container__main__grid__card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
        card.addEventListener('click', () => {
            const data = card.getAttribute('data');
            if (data === 'olabarri') {
                //porque solo hemos hecho un detalle
                window.location.href = `detalle-${data}.html`;
            }else{
                window.location.href = '../index.html';
            }
        });
    });

    //Ocultar el enlace de mi pagina
    var currentPage = window.location.pathname.split("/").pop();
    var pageMap = {
        "categoria.html": "categoria",
        "presentacion.html": "presentacion",
        "enlaces.html": "enlaces"
    };

    var elementToHide = pageMap[currentPage];
    if (elementToHide) {
        var element = document.getElementById(elementToHide);
        if (element) {
            element.style.display = 'none';
            var prevElement = element.previousElementSibling;
            if (prevElement && prevElement.textContent.trim() === '|') {
                prevElement.style.display = 'none';
            }
        }
    }

});