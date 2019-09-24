import { sub as subtrair } from './funcoes';			// 'as' igual um apelido/novo nome.
import soma from './soma';								// Pode mudar de nome diretamente ex: 'adicao' no lugar de soma!
import * as funcoes from './funcoes';					// Importa todas as funções com apenas uma variavel.

console.log(soma(1, 2));
console.log(subtrair(4, 2));
console.log(funcoes.mult(5, 5));

alert('Hello Moto!');