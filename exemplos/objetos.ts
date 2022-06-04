enum profissao{
    "jogador de futebol",
    "Contador",
    "Programador"
}
interface iPessoa{
    nomea?:String,
    idade:Number,
    profissao: profissao
}

interface iEstudante extends iPessoa{
    materias:String[]
}
const vanessa:iPessoa={
    nomea:"vanessa",
    idade:26,
    profissao:profissao.Contador
}

const jessica:iEstudante ={
    nomea:"jessica",
    idade:21,
    profissao:profissao["jogador de futebol"],
    materias:["portugues","ingles"]
}
function listar(lista:String[]){
    for(const item of lista){
        console.log("- " + item)
    }
}

listar(jessica.materias)