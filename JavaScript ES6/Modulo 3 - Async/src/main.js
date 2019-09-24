const minhaPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => {resolve('OK')}, 2000);
});

/*minhaPromise().then(response => {
	console.log(response);
});
*/

/*async function executaPromise(){
	//const response = await minhaPromise();

	console.log(await minhaPromise());
	console.log(await minhaPromise());
	console.log(await minhaPromise());
}*/

const executaPromise = async () => {
	console.log(await minhaPromise());
	console.log(await minhaPromise());
	console.log(await minhaPromise());
}

executaPromise();

import axios from 'axios';

class Api{
	static async getUserInfo(username){
		try{
			const response = await axios.get(`https://api.github.com/users/${username}`);
			
			console.log(response);
		}catch (err){
			console.log('Erro na Api!');
		}
	}
}

Api.getUserInfo('FabioKido');

// Desafio - Inc