// variáveis do Ator
let xAtor = 150;
let yAtor = 368;
let hAtor = 27;
let lAtor = 25;
//let diametro = 20;

let colisao = false;

let meusPontos = 0;

//exibe o ator na tela
function mostraAtor(){
  image(imgDoAtor,xAtor,yAtor,30,30);
}

//fazer o ator andar
function movimentaAtor(){
  if (yAtor == 400){
    yAtor = 400;
  }
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
    if(yAtor > 370){
      yAtor = 368;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
    if(xAtor < 3){
      xAtor = 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
    if(xAtor > 470){
      xAtor = 470;
    }
  }
}
// verificar colisão com os carros
function verificaColisaoCarro(){
  for(i = 0; i < imgCars.length; i++){
    colisao = collideRectRect(xCars[i],yCars[i], compCars, altCars, xAtor, yAtor, hAtor, lAtor);
    if(colisao){
      somDaColisao.play();
      voltaInicio();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

//voltar ao inicio após colisão
function voltaInicio(){
  yAtor = 390;
}

//placar do Jogo
function incluiPontos(){
  fill(200,100,0);
  rect(0,3,40,30);
  
  textSize(16);
  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);
  text(meusPontos,20,25);
}

function marcaPonto(){
  if(yAtor < 0){
    meusPontos +=1;
    somDoPonto.play();
    voltaInicio();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}


