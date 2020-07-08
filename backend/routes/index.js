const express = require('express');
const router = express.Router();
const fs = require('fs');
var path = require('path');


/* GET informações produto. */
router.get('/produto/:id', function(req, res, ) {
  let raw = fs.readFileSync(path.join(__dirname, '..', 'dados', 'produtos.json'));
  let produtos = JSON.parse(raw);
  let selecionado = produtos.produtos[req.params.id];
  if (selecionado){
    res.status(200).send(selecionado);
  } else{
    res.status(400).send("Produto não encontrado");
  }
});

module.exports = router;
