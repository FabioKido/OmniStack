const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
	"mongodb://localhost:27017/nodeapi"
);
requireDir('./src/models');



// Primeira rota
app.get('/', (req, res) => {
	res.send('Olá Mundo!');
});

// Ouve a porta do navegador 3001
app.listen(3001);
