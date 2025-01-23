let listaNombres = [];
let nombreAmigo;
let amigoAleatorio;
let amigoSorteado;

// Función para recorrer el array y actualizar la lista.
function mostrarListaAmigos() {
    elementoHTML = document.getElementById("listaAmigos"); // Seleccionamos la lista en el HTML
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
    document.querySelector("#amigo").value = ""; // selencionamos el valor del elemento html con id amigo
};

// Una funcion para cambiar texto de los elemento html
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
};

// Funcion que agrega el valor del input con id amigo y lo almacena en la lista llamada listaNombre
function agregarAmigo() {
    nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        listaNombres.push(nombreAmigo);
    }
    mostrarListaAmigos();
    limpiarCaja();
};

// Funcion que sortea de forma aleatoria la lista para seleccionar uno de los valores y mostrarlo en pantallla
function sortearAmigo() {
    // valida que la lista tenga nombres
    if (listaNombres.length == 0) {
        alert("No hay nombres en la lista, por favor inserte algunos nombres");
        return;
    }
    
    amigoAleatorio = Math.floor(Math.random() * listaNombres.length);
    amigoSorteado = listaNombres[amigoAleatorio]

    document.getElementById("resultado").innerHTML = `Amigo: ${amigoSorteado}`;
}