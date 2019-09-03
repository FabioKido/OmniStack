function checaIdade(idade) {

	return new Promise(function(resolve, reject){

		function exibePromise(){
			if(idade > 18){
				resolve();
			}else{
				reject();
			}
		}

		setTimeout(exibePromise, 2000);
	});
}

checaIdade(20)
	.then(function() {
 		console.log("Maior que 18");
 	})
 	.catch(function() {
 		console.log("Menor que 18");
 	});