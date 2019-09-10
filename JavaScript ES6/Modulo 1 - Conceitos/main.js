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

function soma(a=1, b=3){								// Valores Padrão! "a=1, b=3"
		return a+b;
}

console.log(soma(2));

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