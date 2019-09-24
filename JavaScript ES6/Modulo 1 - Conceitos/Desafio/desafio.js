// 1º Exercício

class Usuario{
	constructor(email, senha){
		this.email = email;
		this.senha = senha;
	}

	isAdmin(){
		if(this.admin === true){
			return 'User is Administrador';
		}else{
			return 'User is Usuario';
		}
	}
}

class Admin extends Usuario{
	constructor(email, senha){

		super(email, senha);

		this.admin = true;
	}
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('e-mail@teste.com', 'senha123');

//console.log(Adm1);

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true


// 2º Exercício

const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Utilizando MAP

const idades = usuarios.map(function (item) {
	return item.idade;
});

console.log(idades);


// Utilizando FILTER

const filter = usuarios.filter(function (item) {
	return (item.empresa === 'Rocketseat') && (item.idade >= 18);
});

console.log(filter);


// Utilizando FIND

const find = usuarios.find(function (item) {
	return item.empresa === 'Google';
});

console.log(find);


// Unindo Operações - Incompleta

const redu = usuarios.map(function (item) {
	return item.idade * 2;
});

console.log(redu);

const filter2 = usuarios.filter(function (item) {
	return item.idade <= 50;
});

console.log(filter2);


// 3º Exercício

// 3.1

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);

console.log(newArr);


// 3.2

const usuar = { nome: 'Diego', idade: 23 };

const mostraIdade = () => (usuar.idade);

console.log(mostraIdade());


// 3.3 - Incompleto

const nome = "Diego";
const idade = 23;

/*function mostraUsuario(nome = 'Diego', idade = 18) {
	return { nome, idade };
}*/

const mostraUsuario = (nom = 'Diego', idad = 18) => (nom, idad);

console.log(mostraUsuario(nome));
console.log(mostraUsuario(nome,idade));

// 3.4 - Incompleto

/*const promise = function() {
	return new Promise(function(resolve, reject) {
		return resolve();
	})
}*/

const promise = () => new Promise((resolve, reject) => {
	setTimeout({resolve('OK')}, 2000);
});


// 4 - Desestruturação

// 4.1

const empresa = {
		nome3: 'Rocketseat',
		endereco: {
		cidade: 'Rio do Sul',
		estado: 'SC',
	}
};

const {nome3, endereco: {cidade, estado} } = empresa;

console.log(nome3);
console.log(cidade);
console.log(estado);

// 4.2

const usuario = {
		nome: 'Diego',
		idade: 23,
	 	endereco: {
		cidade: 'Rio do Sul',
		uf: 'SC',
		pais: 'Brasil',
	}
};

function mostraInfo({nome, idade}) {
	return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo(usuario));


// 5.1 Rest

const arr1 = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr1;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params){
		return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


// 5.2 Spread

var usuario2 = { ...usuario, nome: 'Gabriel'};
console.log(usuario2);

var usuario3 = { ...usuario, endereco: {cidade: 'Lontras', uf: 'SC', pais: 'Brasil'} };
console.log(usuario3);


// 6 - Template Literals

const usuario0 = 'Diego';
const idade0 = 23;

console.log(`O usuário ${usuario0} possui ${idade0} anos`);


// 7 - Object Short Syntax

const nom = 'Diego';
const idad = 23;

const user0 = {
	nom,
	idad,
	cidade: 'Rio do Sul',
};

console.log(user0);