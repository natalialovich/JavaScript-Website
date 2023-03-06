
let result = document.getElementById("result");
let contar = 0;
let totalContador = document.getElementById("contador-1");


function masUno() {

    contar += 1;
    totalContador.textContent = contar;

}

function save() {


    result.textContent += contar + " - ";
    contar = 0;
    totalContador.textContent = 0;

}
