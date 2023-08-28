// variáveis do carro
let xCars = [150,250,50,350,20,100];
let yCars = [40,96,150,210,262,320];
let velCars = [5,9,4,5.5,7,6];
let compCars = 50;
let altCars = 40;

//Exibe o carro na tela
function mostraCarro(){
  for(let i = 0 ; i < imgCars.length; i++){      image(imgCars[i],xCars[i],yCars[i],compCars,altCars); 
  }
}

//fazer o carro andar
function movimentaCarro(){
  for(let i = 0; i < imgCars.length; i++){
    xCars[i] -= velCars[i];
  }
}

//volta para final da tela
function carroPosicaoInicial(){
  for(let i = 0; i < xCars.length; i++){
    if (xCars[i] < -40){
     xCars[i] = width;
    }
  }
}

