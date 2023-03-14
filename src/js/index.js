 /*
    1 - Objetivo: QUANDO CLICAR NO BOTÃO MAOSTRA A IMAGEM DE FUNDO CORRESPONDENTE 

        1.1 - PEGAR O ELEMENTO BOTÃO QUE ESTÁ NO HTML
        1.2 - IDENTIFICAR O CLICK DO USUÁRIO NO BOTÃO
        1.3 - DESMARCAR O BOTÃO SELECIONADO ANTERIOMENTE 
        1.4 - MARCAR O BOTÃO O SELECIONAR O BOTÃO DESEJADO 
        1.5 - ESCONDER A IMAGEM DE FUNDO ANTERIOR 
        1.6 - FAZER APARECER A IMAGEM DE FUNDO CORRESPONDENTE AO BOTÃO CLICADO
*/

    // 1.1 - PEGAR O ELEMENTO BOTÃO QUE ESTÁ NO HTML
    const botoescarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll ('.image');

    // 1.2 - IDENTIFICAR O CLICK DO USUÁRIO NO BOTÃO
    botoescarrossel.forEach((botao, indice) => {
       botao.addEventListener('click', () =>{

        // 1.3 - DESMARCAR O BOTÃO SELECIONADO ANTERIOMENTE 
        desativarBotaoselecionado(); // CHAMANDO A FUNÇÃO CRIADA  
        
        // 1.4 - MARCAR O BOTÃO O SELECIONAR O BOTÃO DESEJADO 
        selecionarBotaocarrossel(botao);// CHAMANDO A FUNÇÃO CRIADA (É O ARGUMENTO DESEJADO)

       // 1.5 - ESCONDER A IMAGEM DE FUNDO ANTERIOR 
       esconderImagemAtiva(); // CHAMANDO A FUNÇÃO CRIADA

      // 1.6 - FAZER APARECER A IMAGEM DE FUNDO CORRESPONDENTE AO BOTÃO CLICADO
      mostrarImagemDeFundo(indice); // CHAMANDO A FUNÇÃO CRIADA (É O ARGUMENTO DESEJADO)
       })
    } )
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaocarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemativa = document.querySelector('.ativa');
    imagemativa.classList.remove('ativa');
}

function desativarBotaoselecionado() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');
}

