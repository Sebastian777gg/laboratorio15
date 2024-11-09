function mostrarMensaje(seccion) { 
    alert(`toco moto 1 ${seccion}`);
}

document.getElementById('about').addEventListener('click', function(){ mostrarMensaje ('esta en la seccion de la moto 3');});