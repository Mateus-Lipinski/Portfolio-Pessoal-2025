const button = document.getElementById('miau'); //Variável do butão

button.addEventListener('click', () => { //Código do botão
    
    //Código do audio
    const audio = document.createElement('audio'); //Cria a variável
    audio.src = '../audio/cat-meow-sound.mp3'; //Fala o caminho do audio
    audio.play(); //Toca o audio
    
    //Código da imagem aparecendo
    const img = document.createElement('img'); //Cria uma nova variavel chamada 'img' que é um elemento 'img'

    img.src = '../img/Cachorro q faz miau.png'; //Fala o caminho da imagem

    img.classList.add('falling-image'); //Cria uma classe para a variável "img"

    img.style.left = Math.random() * window.innerWidth + 'px'; // Define uma posição horizontal aleatória

    document.body.appendChild(img); // Adiciona a imagem ao corpo da página

    img.addEventListener('animationend', () => { // Remove a imagem após a animação terminar
        img.remove();
    });

})

const fujao = document.getElementById('fujao'); //Variável do botão fujão

fujao.addEventListener('mouseover', () => { //Código do botão fujão

    const goku = document.createElement('audio');
    goku.src = '../audio/ultra-instinct.mp3';
    goku.play();

    const largura = window.innerWidth;
    const altura = window.innerHeight;

    const aleatLargura = Math.random() * (largura - fujao.offsetWidth);
    const aleatAltura = Math.random() * (altura - fujao.offsetHeight);

    fujao.style.position = 'absolute';
    fujao.style.left = `${aleatLargura}px`;
    fujao.style.top = `${aleatAltura}px`;
})

fujao.addEventListener('click', () => {
    alert('Parabéns você conseguiu apertar o botão!!! Tente novamente.');
})

const enigma = document.getElementById('enigma');

enigma.addEventListener('click', () => {

    const resposta = prompt("Quando a preferência se encontra na imagem, o disfarce cai… e o destino revela quem sabe ver além da superfície.");
    if(resposta == "esqueleto capoeira" || resposta == "Esqueleto capoeira" || resposta == "Esqueleto Capoeira") {
        const oracao = document.getElementById('oracao'); //Variável da div
        const img = document.createElement('img'); //Cria a imagem
        img.src = '../img/Ore para Deus imediatamente.jpg';
        img.alt = 'Oração';
        img.style.maxWidth = '1200px'; //Limita o tamanho
        oracao.appendChild(img); //Coloca a imagem dentro da div

        //Remove depois de 3 segundos
        setTimeout(() => {
            oracao.removeChild(img);
        }, 3000);
    }

});