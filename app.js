let listaNombres = [];
let nombreAmigo;

function agregarAmigo() {
    nombreAmigo = document.getElementById("amigo")

    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.")
        return;
    } else {
        listaNombres.push(nombreAmigo)
    }
}; 