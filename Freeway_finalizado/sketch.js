function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imgDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  carroPosicaoInicial();
  verificaColisaoCarro();
  incluiPontos();
  marcaPonto();
}







