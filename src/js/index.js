        // passo 1
const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

        // passo 2
botoesCarrossel.forEach((botao, indece) => {
    botao.addEventListener('click', () => {
 
        // passo 3
        desativarBotaoSelecionado()
        // passo 4
        selecionarBotaoCarrossel(botao)
        // passo 5
        esconderImagenAtiva()
        // passo 6
        mostrarImagemDeFundo(indece)

    })
})

function mostrarImagemDeFundo(indece) {
    imagens[indece].classList.add('ativa')
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado')
}

function esconderImagenAtiva() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}
