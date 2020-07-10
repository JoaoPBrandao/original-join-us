Executar localmente:

### `npm i` (instala o concurrently)
### `npm run install` (instala dependências do front e back)
### `npm run start` (inicia servidores do front e back)

# React
Possuo mais familiaridade com Vue, mas escolhi utilizar o react devido à preferência do teste.
 Scaffolding criado com create-react-app.

## Módulos utilizados

### no front-end:

#### axios
Utilizado para facilitar requisições ao back-end.

#### react-modal
Acelerar a criação dos modais do site

#### react-router-dom 
Roteamento das páginas. Mesmo o site possuindo somente uma home, foi utilizado para resgatar a id dos produtos da url e 
permitir a troca de página de produto. Se o projeto fosse mais complexo, essa seria minha ferramenta de escolha
para a criação da SPA.

#### redux
Utilizado para gerenciar o estado do carrinho de compras entre componentes.


### no back-end:

#### cors
Permitir a requisição entre origens.

#### express
Simplificar a criação do servidor.

## Observações

- Alguns casos de uso foram extrapolados a partir do layout do Figma. Um exemplo disso 
são produtos com desconto e sem desconto, o que gera requisitos no modelo de dados e na exibição
do front-end.

- Não mockei tabelas de enumeradores (tamanhos e cores) para economizar tempo.

- Devido ao pequeno tamanho do projeto, decidi não implementar nenhuma solução de lazy-loading
de imagens.
