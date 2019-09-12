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