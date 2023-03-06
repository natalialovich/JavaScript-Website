
document.onmousemove = posicionRaton
function posicionRaton(event) {
    event = event;
    coordenadaX = event.clientX;
    coordenadaY = event.clientY;
    muestraInformacion(['Ratón', 'Posición: X: ' + coordenadaX + ' Y: ' + coordenadaY]);
}


document.onkeydown = infoTecla;
function infoTecla(event) {
    var event = event;
    var caracter = event.charCode || event.keyCode;
    var letra = String.fromCharCode(caracter);
    var codigo = letra.charCodeAt(0);
    muestraInformacion2(['Teclado', 'Carácter [' + letra + ']', 'Código [' + codigo + ']']);
}


function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
    for (var i = 1; i < mensaje.length; i++) {
        document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
    }
}

function muestraInformacion2(mensaje) {
    document.getElementById("info2").innerHTML = '<h1>' + mensaje[0] + '</h1>';
    for (var i = 1; i < mensaje.length; i++) {
        document.getElementById("info2").innerHTML += '<p>' + mensaje[i] + '</p>';
    }
}



