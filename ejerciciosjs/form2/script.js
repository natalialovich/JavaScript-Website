function validarEntero(valor) {
    valor = parseInt(valor)
    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}

function validacion() {
    if (document.fvalida.nombre.value.length == 0) {
        alert("Por favor escriba su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0;
        }
    }
    if (document.fvalida.interes.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}
