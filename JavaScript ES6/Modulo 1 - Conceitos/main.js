/*class TodoList{
	constructor(){
		this.todos = [];
	}

	addTodo(){
		this.todos.push('Novo todo');
		console.log(this.todos);
	}
}*/

/*
class Matematica{							// Classe estática!

	static soma(a, b){
		return a+b;
	}
}

	console.log(Matematica.soma(1, 2));
*/

const usuario = {nome : 'Fabio'}; 								// É uma constante!

usuario.nome = 'Cleiton';										// Constante pode mutar!

let y = 2;											// Variável de Escopo: As chaves "{}" são o escopo! 



class List{
	constructor(){
		this.data = [];
	}

	add(data){
		this.data.push(data);
		console.log(this.data);
	}
}

class TodoList extends List{							// Herança POO
	constructor(){
		super();

		this.usuario = 'Fabio';
	}

	mostraUsuario(){
		console.log(this.usuario);
	}
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
	MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();


// Vetores

const arr = [1,3,4,5,8];

const newArr = arr.map(function (item) {				// Função MAP percorre o vetor e seus itens.
	return item * 2;
});

const newArr2 = arr.map(function (item, index) {
	return item + index;
});

console.log(newArr);
console.log(newArr2);

const sum = arr.reduce(function (total, next) {			// Função REDUCE pega informação total do vetor.
	return total + next;
});

console.log(sum);

const filter = arr.filter(function (item) {				// Função FILTER filtra os valores retornando os TRUE e removendo os FALSE (ou vice-versa) estipulado por uma condição!
	return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function (item) {					// Função FIND encontra um item dentro do ARRAY.
	return item === 4;
});

console.log(find);

// Arrow Functions "=>"

const newArr3 = arr.map(item => item * 2);				// Quando tem 1 parametro pode remover os "()".

console.log(newArr3);

const teste = () => 'Fabio';							// Não é recomendado esse tipo de 'function';
const teste1 = () => ({nome: 'Fabio'});					// Para retorna objeto utiliza-se "()".

console.log(teste());
console.log(teste1());


// Valores Padrão!

function soma(a=1, b=3){								// Valores Padrão! "a=1, b=3"
		return a+b;
}

console.log(soma(2));


// Desestruturação

const user = {
	nome: 'Fabio',
	idade: 25,
	endereco:{
		cidade: 'Januaria',
		estado: 'MG',
	},
};

console.log(user);

const name = user.nome;									// Referênciamento NORMAL;

const {nome, idade, endereco: {cidade} } = user;		// Desestruturação

console.log(idade);
console.log(cidade);

function mostraNome({nome, idade}) {					// Desestruturação
	console.log(nome, idade);
}

mostraNome(user);


// Operadores REST/SPREAD

// REST pega o 'resto' de Desestruturação e de Parametros de Função

const user2 = {
	nome: 'Diego',
	idade: 23,
	empresa: 'Rocketseat'
};

const { nome2, ...resto } = user2;

console.log(nome);
console.log(resto);

const arr2 = [1,2,3,4];

const [a,b, ...c] = arr2;

console.log(a);
console.log(b);
console.log(c);

/*function somar(...params){
		return params.reduce((total, next) => total + next);
}*/

function somar(a,b, ...params){
		return params;
}

console.log(somar(1, 3, 4, 4, 5));							// Ex: console.log(1=a, 3=b, "o resto" = params);

// SPREAD

const vet = [1,2,3];
const vet1 = [4,5,6];

const vet2 = [ ...vet, ...vet1];

console.log(vet2);

const user3 = {												// Usado para modificar uma unica propriedade.
	nome: 'Kido',
	idade: 25,
	empresa: 'Desempregados.org'
};

const user4 = { ...user3, nome: 'Quido'};

console.log(user4);

// Templates Literals

const nom = 'Fabio';
const idad = 25;

//console.log('Meu nome é '+nom+' e tenho '+idad+' anos');

console.log(`Meu nome é ${nom} e tenho ${idad} anos.`);			// Usa-se a CRASE (`) em vez das ASPAS ("''")!


// Object Short Syntax

const nom1 = 'Fabio';
const idad1 = 25;

const usuario1 = {												// Não precisa repetir o nome da propriedade se forem iguais.
	nom1,
	idad1,
	empresa: 'Rocketseat'
}

console.log(usuario1);

