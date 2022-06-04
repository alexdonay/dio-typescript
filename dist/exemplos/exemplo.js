"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let frase = "A soma dos dois números é ";
function adicionarNumeros(numero1, numero2, devePrintar, fase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
}
if (button) {
    button.addEventListener("click", () => {
        if (input1 && input2) {
            adicionarNumeros(Number(input1.value), Number(input2.value), true, frase);
        }
    });
}
