/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(x,y){
  return x+y;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// ?
console.log('A soma do valor' ,sum(10,0), 'e' ,sum(0,20), 'e igual a', sum(10,20));
A soma do valor 10 e 20 e igual a 30

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log('o nome da funcao criada acima e:',sum.name);
o nome da funcao criada acima e: calculateSum


/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(sum){
  return sum.name;
}
/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName(sum); 

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log('o nome da funcao e :', varShowName, 'retorna: ', varShowName);
o nome da funcao e : calculateSum retorna:  calculateSum


/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(op){
  return function(x,y){
    var result = x+'op'+y; 
    console.log('o resultado da operacao: ',x,op,y, ' = ',result);
  };
}


/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator();

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
sum(+)(2,5);

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtration = '-';
var division = '/';
var mod = '+';
var multiplication = '*';

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(calculator(subtration)(2,5));
-3

console.log(calculator(mod)(10,5));
15

console.log(calculator(division)(40,2));
20

console.log(calculator(multiplication)(2,5));
10

