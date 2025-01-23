let listaNombres = [];
let nombreAmigo;

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
};

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    nombreAmigo = document.getElementById("amigo")

    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.")
        return;
    } else {
        listaNombres.push(nombreAmigo)
    }
    limpiarCaja();
}; 