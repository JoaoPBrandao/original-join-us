const express = require('express');
const router = express.Router();
const fs = require('fs');
var path = require('path');


/* Post atualizar produtos no carrinho. */
router.post('/carrinho', function(req, res) {
  let json = JSON.stringify(req.body)
  fs.writeFileSync(path.join(__dirname, '..', 'dados', 'carrinho.json'),json);
  res.sendStatus(200)
});
/* GET produtos no carrinho. */
router.get('/carrinho', function(req, res) {
  let raw = fs.readFileSync(path.join(__dirname, '..', 'dados', 'carrinho.json'));
  let carrinho = JSON.parse(raw);
  res.status(200).send(carrinho);
});
/* GET todos os produtos. */
router.get('/produto/todos', function(req, res) {
  let raw = fs.readFileSync(path.join(__dirname, '..', 'dados', 'produtos.json'));
  let produtos = JSON.parse(raw);
  res.status(200).send(produtos);
});
/* GET informações do produto do id especificado na rota. */
router.get('/produto/:id', function(req, res) {
  let raw = fs.readFileSync(path.join(__dirname, '..', 'dados', 'produtos.json'));
  let produtos = JSON.parse(raw);
  let selecionado = produtos[req.params.id];
  if (selecionado){
    res.status(200).send(selecionado);
  } else{
    res.status(400).send("Produto não encontrado");
  }
});

module.exports = router;
