var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function buscarUser() {	

	var user = inputElement.value;

	listElement.innerHTML = '';

	var todoElement = document.createElement('li');
	var todoText = document.createTextNode('Carregando...');

	todoElement.appendChild(todoText);
	listElement.appendChild(todoElement);

	axios.get('https://api.github.com/users/'+user+'/repos')
		.then(function(response){
			console.log(response.data);
			renderTodos(response.data);
		})
		.catch(function(error){
			console.warn(error);
			document.write('Usuario Inexistente!');
		});
}

function renderTodos(todos) {

	listElement.innerHTML = '';

	for (todo of todos) {
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo.name);

		todoElement.appendChild(todoText);
		listElement.appendChild(todoElement);
	}
}

buttonElement.onclick = buscarUser;

