// Crie um objeto que receba ao menos três propriedades sobre você.

// Adicione uma nova propriedade sem alterar seu objeto inicial.

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.


/*
let estudantes = {
    nome: 'Gabriel',
    idade: 37,
    time: 'Flamengo'
}
*/

/*
let estudantes = {
    nome: 'Gabriel',
    idade: 37,
    time: 'Flamengo'
}
console.log(estudantes)
estudantes.cabelo = 'Não tenho!'
*/

/*
let estudantes = {
    nome: 'Gabriel',
    idade: 37,
    time: 'Flamengo'
}

console.log(estudantes)
delete estudantes.idade
*/


let cadastro = [{
    nome:'Laura',
    idade:15,
    telefone:'9999-9999',
    amigos:['Tunico', 'Tinoco', 'Zezé' , 'Luciano']
},
{
    nome:'Luana',
    idade:15,
    telefone:'9999-9999',
    amigos:['Leandro', 'Leonardo', 'Peninha' , 'Renato']
},
{
    nome:'Paula',
    idade:15,
    telefone:'9999-9999',
    amigos:['Silvinho', 'Artur' , 'Pedro' , 'Marcio']
},
{
    nome:'Ticiane',
    idade:15,
    telefone:'9999-9999',
    amigos:['Copolla', 'Caio', 'Luis' , 'Cassio']
},
{
    nome:'Lorena',
    idade:15,
    telefone:'91385-5861',
    amigos:['Frodo', 'Sam', 'Gandalf' , 'Galadriel']
}]

console.log(cadastro)
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[0])