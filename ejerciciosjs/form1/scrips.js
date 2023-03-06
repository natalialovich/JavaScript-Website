function actualizaInfo(maxCaracteres) {

    let elemento = document.getElementById("texto");
    let info = document.getElementById("info");

    if (elemento.value.length >= maxCaracteres) {
        info.textContent = "Ya has llegado al máximo de carácteres permitidos";
    } else {
        info.innerHTML = "Puedes escribir hasta " + (maxCaracteres - elemento.value.length) + " caracteres más";
    }
}
