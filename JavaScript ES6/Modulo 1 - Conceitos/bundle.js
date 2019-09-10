"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var usuario = {
  nome: 'Fabio'
}; // É uma constante!

usuario.nome = 'Cleiton'; // Constante pode mutar!

var y = 2; // Variável de Escopo: As chaves "{}" são o escopo! 

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  // Herança POO
  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Fabio';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario(); // Vetores

var arr = [1, 3, 4, 5, 8];
var newArr = arr.map(function (item) {
  // Função MAP percorre o vetor e seus itens.
  return item * 2;
});
var newArr2 = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
console.log(newArr2);
var sum = arr.reduce(function (total, next) {
  // Função REDUCE pega informação total do vetor.
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  // Função FILTER filtra os valores retornando os TRUE e removendo os FALSE (ou vice-versa) estipulado por uma condição!
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  // Função FIND encontra um item dentro do ARRAY.
  return item === 4;
});
console.log(find); // Arrow Functions "=>"

var newArr3 = arr.map(function (item) {
  return item * 2;
}); // Quando tem 1 parametro pode remover os "()".

console.log(newArr3);

var teste = function teste() {
  return 'Fabio';
}; // Não é recomendado esse tipo de 'function';


var teste1 = function teste1() {
  return {
    nome: 'Fabio'
  };
}; // Para retorna objeto utiliza-se "()".


console.log(teste());
console.log(teste1());

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  // Valores Padrão! "a=1, b=3"
  return a + b;
}

console.log(soma(2));
var user = {
  nome: 'Fabio',
  idade: 25,
  endereco: {
    cidade: 'Januaria',
    estado: 'MG'
  }
};
console.log(user);
var name = user.nome; // Referênciamento NORMAL;

var nome = user.nome,
    idade = user.idade,
    cidade = user.endereco.cidade; // Desestruturação

console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  // Desestruturação
  console.log(nome, idade);
}

mostraNome(user);
