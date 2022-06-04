// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee = {};
employee.code = 10;
employee.name = "John";
*/

//Para evitar erro, foi criado uma interface para gerir os tipos relacionados ao objeto
interface iEmployee{
    code:number,
    name:string
}
let employee:iEmployee = {
    code:10,
    name:"John"
};
