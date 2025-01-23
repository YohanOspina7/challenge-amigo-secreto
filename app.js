let listaNombres = [];
let amigo;

function agregarAmigo() {
    amigo = document.getElementById("amigo")

    if (amigo == "") {
        alert("Por favor, inserte un nombre.")
        return;
    } else {
        listaNombres.push(amigo)
    }
};