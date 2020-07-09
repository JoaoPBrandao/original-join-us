import axios from 'axios';
const initialState = {
    produtos: [],
    quantidade: 0
};

function atualizarCarrinho(produtos){
    axios.post('http://localhost:3300/carrinho', produtos)
        .catch(erro =>{
            console.log(erro);
        })
}

export const carrinhoReducer = (state = initialState, action) => {
    let produtos = state.produtos;
    switch (action.type) {
        case 'adicionarProduto':
            let index = produtos.findIndex((produto) =>{
                return produto.id === action.produto.id
            });
            if (index >= 0){
                produtos[index].quantidade += 1;
            }else{
                produtos.push(action.produto)
            }
            atualizarCarrinho(produtos);
            return {
                produtos,
                quantidade: produtos.length
            };
        case 'removerProduto':
            produtos.splice(action.index,1);
            atualizarCarrinho(produtos);
            return {
                produtos,
                quantidade: produtos.length
            };
        case 'adicionarUnidade':
            produtos[action.index].quantidade += 1;
            atualizarCarrinho(produtos);
            return{
                produtos,
                quantidade: produtos.length
            };
        case 'removerUnidade':
            produtos[action.index].quantidade -= 1;
            if(produtos[action.index].quantidade === 0){
                produtos.splice(action.index,1);
            }
            atualizarCarrinho(produtos);
            return{
                produtos,
                quantidade: produtos.length
            };
        case 'definirInicial':
            produtos = action.produtos;
            return{
                produtos,
                quantidade: produtos.length
            };
        default:
            return state;
    }
};