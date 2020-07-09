//Formata o número para o formato brasileiro
export const formatarNumero = (numero) => {
    let resultado;
    resultado = numero.toFixed(2);
    resultado = resultado.replace('.',',');
    return resultado;
};