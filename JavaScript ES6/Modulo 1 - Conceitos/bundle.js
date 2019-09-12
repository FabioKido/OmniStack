"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

mostraNome(user); // Operadores REST/SPREAD
// REST pega o resto de Desestruturação e de Parametros de Função

var user2 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

var nome2 = user2.nome2,
    resto = _objectWithoutProperties(user2, ["nome2"]);

console.log(nome);
console.log(resto);
var arr2 = [1, 2, 3, 4];
var a = arr2[0],
    b = arr2[1],
    c = arr2.slice(2);
console.log(a);
console.log(b);
console.log(c);
/*function somar(...params){
		return params.reduce((total, next) => total + next);
}*/

function somar(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

console.log(somar(1, 3, 4, 4, 5)); // Ex: console.log(1=a, 3=b, "o resto" = params);
// SPREAD

var vet = [1, 2, 3];
var vet1 = [4, 5, 6];
var vet2 = [].concat(vet, vet1);
console.log(vet2);
var user3 = {
  // Usado para modificar uma unica propriedade.
  nome: 'Kido',
  idade: 25,
  empresa: 'Desempregados.org'
};

var user4 = _objectSpread({}, user3, {
  nome: 'Quido'
});

console.log(user4); // Templates Literals

var nom = 'Fabio';
var idad = 25; //console.log('Meu nome é '+nom+' e tenho '+idad+' anos');

console.log("Meu nome \xE9 ".concat(nom, " e tenho ").concat(idad, " anos.")); // Usa-se a CRASE (`) em vez das ASPAS ("''")!
// Object Short Syntax

var nom1 = 'Fabio';
var idad1 = 25;
var usuario1 = {
  // Não precisa repetir o nome da propriedade
  nom1: nom1,
  idad1: idad1,
  empresa: 'Rocketseat'
};
console.log(usuario1);
