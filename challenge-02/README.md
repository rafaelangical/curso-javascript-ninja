# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(i,j){
  return i+j;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var sum = soma(1,3)+5;

// Qual o valor atualizado dessa variável?
9;

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function add(nova){
  nova = 10;
  return "O valor da variavel e:"+nova;
}

// Invoque a função criada acima.
add();

// Qual o retorno da função? (Use comentários de bloco).
'o valor da variavel e:10'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function thereArguments(i,j,k){
  if(i == null || i == undefined || j == null || j--undefined || k==null || k==undefined){
    return "Preencha os dados corretamente";
  }else{
    return (i*j*k)+2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
thereArguments(2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
"Preencha os dados corretamente"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
thereArguments(2,3,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//SAIDA = 
26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
			if(i === null && i ===undefined && j === null && j === undefined && k === null && k === undefined){
				return false;
			}

			//verifica e retorna se so foi passado um como parametro
			else if(i!==null && i!==undefined && j === null || j === undefined && k === null || k === undefined){
				return "Valor de i: "+i;
			}
			else if(j!==null && j!==undefined && i === null || i === undefined && k === null || k === undefined){
				return "Valor de j: "+j;
			}
			else if(k!==null && k!==undefined && j === null || j === undefined && i === null || i === undefined){
				return "Valor de k: "+k;
			}

			//verifica e retorna a soma se foi passado dois como parametros
			else if(i!==null && i!==undefined && j !== null && j !== undefined && k === null || k === undefined){
				var soma = i+j;
				return "Soma: "+soma;
			}

			else if(i!==null && i!==undefined && j === null && j === undefined && k !== null && k !== undefined){
				var soma = i+k;
				return "Soma: "+soma;
			}
			else if(i === null && i === undefined && j !== null && j !== undefined && k !== null && k !== undefined){
				var soma = j+k;
				return "Soma: "+soma;
			}

			//verifica se todos os argumentos foram passados e retorna a soma dos dois primeiros dividido pelo terceiro
			else if(i !== null && i !== undefined && j !== null && j !== undefined && k !== null && k !== undefined){
				var soma = (i+j)/k;
				return "Soma(i,j) e divisao(k): "+soma;
			}			

			//verifica se
			else{
				return null;
			}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
```
