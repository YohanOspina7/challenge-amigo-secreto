let listaNombres = [];
let nombreAmigo;

// Función para recorrer el array y actualizar la lista.
function mostrarListaAmigos() {
    elementoHTML = document.getElementById("listaAmigos") // Seleccionamos la lista en el HTML
    elementoHTML.innerHTML = ""; // Limpiamos la lista para evitar duplicados
    
    // Recorremos el array listaNombres con un bucle for
    for (let i = 0; i < listaNombres.length; i++) {
        let listaLi = document.createElement("li"); // Creamos un nuevo <li>
        listaLi.textContent = listaNombres[i]; // Le asignamos el nombre del amigo
        elementoHTML.appendChild(listaLi); // Agregamos el <li> a la lista  
    } 
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
};

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.")
        return;
    } else {
        listaNombres.push(nombreAmigo)
    }
    limpiarCaja();
}; 