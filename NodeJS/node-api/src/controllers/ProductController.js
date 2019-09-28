const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

	// Procura todos
	async index(req, res){
		const { page = 1 } = req.query;
		const products = await Product.paginate({}, { page, limite: 10});

		return res.json(products);
	},

	// Procura por um ID
	async show(req, res){
		const product = await Product.findById(req.params.id);

		return res.json(product);
	},

	// Cria um produto
	async store(req, res){
		const product = await Product.create(req.body);

		return res.json(product);
	},

	// Atualiza um produto
	async update(req, res){
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

		return res.json(product);
	},

	// Deleta um produto
	async destroy(req, res){
		await Product.findByIdAndRemove(req.params.id);
		
		return res.send();
	}
};