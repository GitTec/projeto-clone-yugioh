/* 

OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    -   PASSO 1 - dar um jeito de pega o elemento HTML da seta avançar
    -   PASSO 2 - dar um jeito de identificar o clique do usuário na seta avançar
    -   PASSO 3 - fazer apareer o próximo cartão da lista
    -   PASSO 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    -   PASSO 1 - dar um jeito de pegar o elemento HTML da seta voltar
    -   PASSO 2 - dar um jeito de identificar o clique do usuário na seta voltar
    -   PASSO 3 - fazer aparecer o cartão anterior da lista
    -   PASSO 4 -   buscar o cartão que esta selecionado e esconder
*/


const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function () {
        const cartaVirada = cartao.querySelector(".carta-virada")

        //Virar o cartão
        cartao.classList.toggle("virar");
        //mostrar o fundo da carta
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder")
    })

});

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});


btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

