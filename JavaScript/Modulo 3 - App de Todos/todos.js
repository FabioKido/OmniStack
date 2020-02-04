var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

/*var todos = [
	'Fazer Cafe',
	'Estudar Java Script',
	'Passar Raiva'
];*/

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

	listElement.innerHTML = '';

	for (todo of todos) {										// For especifico para Vetores(Array)
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#');					// href é obrigatório a ter
		
		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deleteTodo(' + pos+ ')');

		var linkText = document.createTextNode('Excluir');

		linkElement.appendChild(linkText);
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);
	}
}

renderTodos();

function addTodo() {
	var todoText = inputElement.value;

	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
	saveToStorage();
}

buttonElement.onclick = addTodo;								// Referência a função addTodo

function deleteTodo(pos) {
	todos.splice(pos, 1);										// Remove na posição o item(ou itens): função para array tipo o 'push'
	renderTodos();
	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem('list_todos', JSON.stringify(todos));
}