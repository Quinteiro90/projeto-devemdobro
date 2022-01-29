/* 
    quandoclicar na seta para avançar temos que 
    esconder todas as imagens e mostrar a próxima imagem

        a imagem atual começa em 0pq é a primeira imagem
        assim que for clicado no avançareu preciso adicionar mais 1 ao contador de imagens
        para poder saber que agora eu vou mostrar a segunda imagem

        esconder as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar

        mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima, e colocar a classe
            mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/* 
    quando clicar na seta para avançar temos que 
    esconder todas as imagens e mostrar a próxima imagem
*/
setaAvancar.addEventListener('click', function() {

    // testa se o contador da imagemAtual é igual o total de imagnes 
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens) {
        return;
    }

        /*
    a imagem atual começa em 0pq é a primeira imagem
        assim que for clicado no avançareu preciso adicionar mais
        1 ao contador de imagens para poder saber que agora eu vou
        mostrar a segunda imagem
    */
    imagemAtual++;

    /*
        esconder as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
    */
    
    esconderImagens();

    /*
        mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima, e colocar a classe
            mostrar nela
    */
    mostrarImagem();

    /* 
    quando clicar na seta para voltar temos que 
    esconder todas as imagens e mostrar imagem anterior
    */
});

    

setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        console.log('não tem mais como voltar')
        return;
    }

    imagemAtual--; 

    /*
        esconder as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
    */
   
    esconderImagens();

    /*
    mostrar a imagem anterior
        pegar todas as imagens, descobrir qual é a próxima, e colocar a classe
        mostrar nela
    */
    mostrarImagem();      
    })