"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["jogador de futebol"] = 0] = "jogador de futebol";
    profissao[profissao["Contador"] = 1] = "Contador";
    profissao[profissao["Programador"] = 2] = "Programador";
})(profissao || (profissao = {}));
const vanessa = {
    nomea: "vanessa",
    idade: 26,
    profissao: profissao.Contador
};
const jessica = {
    nomea: "jessica",
    idade: 21,
    profissao: profissao["jogador de futebol"],
    materias: ["portugues", "ingles"]
};
function listar(lista) {
    for (const item of lista) {
        console.log("- " + item);
    }
}
listar(jessica.materias);
