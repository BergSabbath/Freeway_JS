// variáveis do carro
let xCars = [150,250,50,350,20,100];
let yCars = [40,96,150,210,262,320];
let velCars = [3,7,2.5,4,5,4];
let compCars = 50;
let altCars = 40;

//Exibe o carro na tela
function mostraCarro(){
  for(var i = 0 ; i < imgCars.length; i++){      image(imgCars[i],xCars[i],yCars[i],compCars,altCars); 
  }
}

//fazer o carro andar
function movimentaCarro(){
  for(i = 0; i < imgCars.length; i++){
    xCars[i] -= velCars[i];
  }
}

//volta para final da tela
function carroPosicaoInicial(){
  for(i = 0; i < xCars.length; i++){
    if (xCars[i] < -40){
     xCars[i] = width;
    }
  }
}

