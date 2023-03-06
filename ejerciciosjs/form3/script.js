

function calcula() {
    let contadorFecha = document.getElementById("contador");
    let inputFecha = document.getElementById("inputFecha");
    let fecha = new Date(inputFecha.value + 'T00:00:00');
    let hoy = new Date()
    let dias = 0
    let horas = 0
    let minutos = 0
    let segundos = 0
    if (fecha > hoy) {
        var diferencia = (fecha.getTime() - hoy.getTime()) / 1000
        dias = Math.floor(diferencia / 86400)
        diferencia = diferencia - (86400 * dias)
        horas = Math.floor(diferencia / 3600)
        diferencia = diferencia - (3600 * horas)
        minutos = Math.floor(diferencia / 60)
        diferencia = diferencia - (60 * minutos)
        segundos = Math.floor(diferencia)
        contadorFecha.textContent = 'Quedan ' + dias + ' Dias, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos para el ' + inputFecha.value; 
        if (dias > 0 || horas > 0 || minutos > 0 || segundos > 0) {
            setTimeout("calcula(\"" + contadorFecha + "\")", 1000)
        }
    }
    else {
        contadorFecha.textContent = "Esta fecha ya ha pasado, por favor ingresa otra fecha"
    }
    
}
