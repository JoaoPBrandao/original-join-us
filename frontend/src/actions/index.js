export const adicionarProduto = value => ({
    type: 'adicionarProduto',
    produto: value
});

export const removerProduto = value => ({
    type: 'removerProduto',
    index: value
});

export const adicionarUnidade = value => ({
    type: 'adicionarUnidade',
    index: value
});

export const removerUnidade = value => ({
    type: 'removerUnidade',
    index: value
});

export const definirInicial = value => ({
    type: 'definirInicial',
    produtos: value
});