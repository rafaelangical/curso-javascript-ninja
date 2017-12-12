/*
Crie um array com 5 items (tipos variados).
*/
// ?
var arr = [{name: 'rafael'}, [1,2,3], 'Souza', 2, 0.3 ];
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?
function addItem(item){
  arr.push(item);
  console.log(arr);
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?

addItem([0, {estado: 'piaui'}, "Hello Js"]);
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?

console.log('segundo elemnto do array e ', arr[1]);
segundo elemnto do array e  [ 1, 2, 3 ]

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log('o primeiro array tem ',arr.length ,' items');
o primeiro array tem  8  items

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log('o segundoa array criado tem ',arr[7].length,' items');
o segundoa array criado tem  3  items
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var num = 10;
console.log(while num % 2 === 0 && num<= 20){
  console.log(num);
  num++;
}
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

var num = 10;
console.log(while num % 2 != 0 && num<= 20){
  console.log(num);
  num++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
var num = 0;
for(num=100;num<=120;num+=2){
  console.log(num);
}
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?

for(num=111;num<=125;num+=2){
  console.log(num);
}
