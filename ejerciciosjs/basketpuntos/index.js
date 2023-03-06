
//listen for clicks
//add the sum to each button when clicked
//display the sum 
let puntosHome = document.getElementById("puntos-home")
let puntosGuest = document.getElementById("puntos-guest")
let resetButton = document.getElementById("reset-button")
let contar = 0
let contar2 = 0


function suma1Home () {

    contar += 1;
    puntosHome.textContent = contar
}

function suma2Home () {
    contar += 2;
    puntosHome.textContent = contar
    
}

function suma3Home () {
    contar += 3;
    puntosHome.textContent = contar
    
}

function suma1Guest () {

    contar2 += 1;
    puntosGuest.textContent = contar2
   
}

function suma2Guest () {
    contar2 += 2;
    puntosGuest.textContent = contar2
    
}

function suma3Guest () {
    contar2 += 3;
    puntosGuest.textContent = contar2
    
}

function nuevoJuego() {
    contar = 0;
    contar2= 0;
    puntosHome.textContent = 0;
    puntosGuest.textContent = 0;

}