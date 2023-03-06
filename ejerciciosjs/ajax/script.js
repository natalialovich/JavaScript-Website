window.onload = function () {
    valida;
    masUno;
    total;
    printFact;
    var formu = document.querySelector("#formu");
}

//función para aumentar la cantidad del producto
let contar = 0;
let contar2 = 0;
let contar3 = 0;

function masUno(id) {
    let totalContador = id;
    let sib = totalContador.nextElementSibling;

    switch (sib.id) {
        case "contador-1":
            sib.addEventListener("change", function () {
                contar = parseFloat(sib.value);
            });
            contar += 1;
            sib.value = contar; break;
        case "contador-2":
            sib.addEventListener("change", function () {
                contar2 = parseFloat(sib.value);
            }); contar2 += 1;
            sib.value = contar2; break;
        case "contador-3":
            sib.addEventListener("change", function () {
                contar3 = parseFloat(sib.value);
            }); contar3 += 1;
            sib.value = contar3; break;
    }
}
//objeto factura
var factura = {
    empresa: {
        nombre: "",
        direccion: "",
        telefono: "",
        nif: ""
    },
    cliente: {
        nombre: "",
        direccion: "",
        telefono: "",
        nif: ""
    },
    productos: [
        { descripcion: "", cantidad: 1, precio: 0 },
        { descripcion: "", cantidad: 1, precio: 0 },
        { descripcion: "", cantidad: 1, precio: 0 }
    ],
    informacion: {
        baseImponible: 0,
        iva: 0.21,
        total: 0
    }
};

function valida() {
    formu.addEventListener("submit", function (event) { event.preventDefault() });
    datos = $('form').serializeArray();
    factura.empresa.nombre = datos[0].value;
    factura.empresa.direccion = datos[1].value;
    factura.empresa.telefono = datos[2].value;
    factura.empresa.nif = datos[3].value;
    factura.cliente.nombre = datos[4].value;
    factura.cliente.direccion = datos[5].value;
    factura.cliente.telefono = datos[6].value;
    factura.cliente.nif = datos[7].value;
    factura.productos[0].descripcion = datos[8].value;
    factura.productos[0].cantidad = datos[9].value;
    factura.productos[0].precio = datos[10].value;
    factura.productos[1].descripcion = datos[11].value;
    factura.productos[1].cantidad = datos[12].value;
    factura.productos[1].precio = datos[13].value
    factura.productos[2].descripcion = datos[14].value;
    factura.productos[2].cantidad = datos[15].value;
    factura.productos[2].precio = datos[16].value;
    total();
    printFact()
}

// Cálculo del total 
function total() {
    for (var i = 0; i < factura.productos.length; i++) {
        factura.informacion.baseImponible += parseInt(factura.productos[i].cantidad, 10) * parseFloat(factura.productos[i].precio, 10);
    }
    factura.informacion.total = factura.informacion.baseImponible + parseFloat((factura.informacion.baseImponible * factura.informacion.iva).toFixed(2));
    console.log(factura.informacion.total)

}
console.log(factura.cliente)
function printFact() {
    formu.style.display = "none"
    const generaHtml =
        `<div class="caja">
  <h2>Empresa</h2>
    <p class="print">${JSON.stringify(factura.empresa).replace(/["'{}]/g, " ").replace(/[,]/g, '<br>')}</p>
  </div>
  <div class="caja">
  <h2>Cliente</h2>
    <p class="print">${JSON.stringify(factura.cliente).replace(/["'{}]/g, " ").replace(/[,]/g, '<br>')}</p>
  </div>
  <div class="caja">
  <h2>Factura</h2>
  <h3>Productos:</h3>
    <p class="print">${JSON.stringify(factura.productos).replace(/[\[\]'"'{}]/g, " ").replace(/[,]/g, '<br>')}</p>
    <h3>Total:</h3>
    <p class="print">${JSON.stringify(factura.informacion).replace(/["'{}]/g, " ").replace(/[,]/g, '<br>').replace(/[e]/g, 'e ')}</p>
  </div>
  <p id="imprimir" class="btn-crear">Imprimir</p>
  <p id="n-fact" class="btn-crear">Nueva factura</p>`;

    document.getElementById('container').innerHTML = generaHtml;
    let nFact = document.getElementById('n-fact');
    nFact.addEventListener('click', function(){location.reload()})
    document.getElementById('imprimir').addEventListener('click', function(){window.print()})

}

