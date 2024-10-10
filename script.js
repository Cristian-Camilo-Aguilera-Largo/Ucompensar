document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarClose = document.querySelector('.navbar-close');
    var navbarCollapse = document.querySelector('#navbarSupportedContent');

    // Evento para mostrar la "X" cuando el menú colapsado está visible
    navbarToggler.addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
            navbarClose.classList.add('d-none'); // Oculta la "X"
        } else {
            navbarClose.classList.remove('d-none'); // Muestra la "X"
        }
    });

    // Evento para cerrar el menú cuando se hace clic en la "X"
    navbarClose.addEventListener('click', function() {
        navbarCollapse.classList.remove('show'); // Cierra el menú
        navbarClose.classList.add('d-none'); // Oculta la "X"
        navbarToggler.classList.remove('d-none'); // Muestra el botón de hamburguesa
    });
});


function mostrarContenido(opcion) {
    // Ocultar todas las opciones
    document.getElementById('opcion1').style.display = 'none';
    document.getElementById('opcion2').style.display = 'none';
    document.getElementById('opcion3').style.display = 'none';
    document.getElementById('opcion4').style.display = 'none';
    document.getElementById('opcion5').style.display = 'none';

    // Mostrar solo la opción seleccionada
    document.getElementById(opcion).style.display = 'block';

    // Cambiar la imagen según la opción
    const imagen = document.getElementById('imagen-principal');
    switch (opcion) {
        case 'opcion1':
            imagen.src = '/imagenes/asset 13.png';
            imagen.alt = '8.309 Estudiantes';
            break;
        case 'opcion2':
            imagen.src = '/imagenes/asset 14.png';
            imagen.alt = '20.000 Graduados';
            break;
        case 'opcion3':
            imagen.src = '/imagenes/asset 15.png';
            imagen.alt = '+1.000 Convenios';
            break;
        case 'opcion4':
            imagen.src = '/imagenes/asset 16.png';
            imagen.alt = 'Becas y Descuentos';
            break;
        case 'opcion5':
            imagen.src = '/imagenes/asset 17.png';
            imagen.alt = '3 Facultades';
            break;
    }
}