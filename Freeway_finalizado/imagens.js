//Imagens do Jogo
let imgDaEstrada;
let imgDoAtor;

//sons do Joogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  
  imgDaEstrada = loadImage("imagens/estrada1.png");
  imgDoAtor = loadImage("imagens/ator-1.png");
  
  imgCars = [
    loadImage("imagens/carro-1.png"),
    loadImage("imagens/carro-2.png"),
    loadImage("imagens/carro-3.png"),
    loadImage("imagens/carro-1.png"),
    loadImage("imagens/carro-2.png"),
    loadImage("imagens/carro-4.png")
  ];
}