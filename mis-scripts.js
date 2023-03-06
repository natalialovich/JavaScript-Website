//Trabajo final. Presentado por Natalia Lovich para la asignatura de programación web de SEAS

window.onload = function () {

  document.getElementById('default-tab').click();
  cambiaTab()

}

let tab = document.getElementsByClassName("tab");

function cambiarTema(evt, tema) {
  let i, contenedorDesc;

  // Esconde los elementos "contenedor-desc"
  contenedorDesc = document.getElementsByClassName("contenedor-desc");
  for (i = 0; i < contenedorDesc.length; i++) {
    contenedorDesc[i].style.display = "none";
  }

  // Quita la clase "active" de los tabs
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }

  // Muestra el tab seleccionado
  document.getElementById(tema).style.display = "block";
  evt.currentTarget.className += " active";
}

//Tabs de html, css y js
function cambiarTema2(evt, tema) {
  let i, contEj;

  contEj = document.getElementsByClassName("cont-ej");
  for (i = 0; i < contEj.length; i++) {
    contEj[i].style.display = "none";
  }
  
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }

  document.getElementById(tema).style.display = "block";
  evt.currentTarget.className += " active";
}
//cambia el estilo de las pestañas de navegación

function cambiaTab() {

  let navItem = document.getElementsByClassName("nav-item");

  for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', tabEncima());
  }

  function tabEncima() {
    //    let navTab = location.pathname.split("/").slice(-1)
    //    switch (navTab) {
    //      case "index.html":
    //        navItem[0].firstChild.style.backgroundColor = "black"; break;
    //        
    //      case "dom-y-eventos.html": navItem[1].firstChild.style.backgroundColor = "black"; break;
    //      case "avanzado-en-js.html": break;
    //      case "ajax-y-jquery.html": break;
    //      case "html5-y-css3.html": break;
    //
    //    }
    if (location.pathname.split("/").slice(-1) == "index.html") {
      navItem[0].firstChild.style.backgroundColor = "#001219";
    }
    else if (location.pathname.split("/").slice(-1) == "dom-y-eventos.html") {
      navItem[1].firstChild.style.backgroundColor = "#001219";
      navItem[1].style.zIndex = "50";
    }
    else if (location.pathname.split("/").slice(-1) == "avanzado-en-js.html") {
      navItem[2].firstChild.style.backgroundColor = "#001219";
      navItem[2].style.zIndex = "50";
    }
    else if (location.pathname.split("/").slice(-1) == "ajax-y-jquery.html") {
      navItem[3].firstChild.style.backgroundColor = "#001219";
      navItem[3].style.zIndex = "50";
    }
    else if (location.pathname.split("/").slice(-1) == "html5-y-css3.html") {
      navItem[4].firstChild.style.backgroundColor = "#001219";
      navItem[4].style.zIndex = "50";
    }
  }
}