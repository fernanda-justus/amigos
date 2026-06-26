let amigo = document.getElementById("amigo");
let lista = document.getElementById('lista');

let amigos = []

document.getElementById('botao').onclick = () => {
    let nome = amigo.value.trim()
    amigos.push(nome)
    lista.innerHTML += ("<li>${nome}</li>")
}
