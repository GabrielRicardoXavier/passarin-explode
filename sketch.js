const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var motorDaFisica, mundo;
var passarinho;
var chao, plataforma;
var caixinha1, caixinha2, caixinha3, caixinha4, caixinha5;
var porquin1, porquin2;
var tronco1, tronco2, tronco3, tronco4;
var fundo;

function preload() {
  fundo = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200, 400);

  motorDaFisica = Engine.create();
  mundo = motorDaFisica.world;

  passarinho = new Passarinho(100,100);

  chao = new Chao(600,385,1200,30);
  plataforma = new Chao(200,300,400,200);

  caixinha1 = new Caixinha(700,320,70,70);
  caixinha2 = new Caixinha(920,320,70,70);
  porquin1 = new Porco(810,350);
  tronco1 = new Tronquin(810,260,300,PI/2);

  caixinha3 = new Caixinha(700,240,70,70);
  caixinha4 = new Caixinha(920,240,70,70);
  porquin2 = new Porco(810,220);
  tronco2 = new Tronquin(810,180,300,PI/2);

  caixinha5 = new Caixinha(810,160,70,70);
  tronco3 = new Tronquin(760,120,150,PI/7);
  tronco4 = new Tronquin(860,120,150,-PI/7);
}

function draw() {
  background(fundo);

  Engine.update(motorDaFisica);

  passarinho.desenha();

  chao.desenha();
  plataforma.desenha();

  caixinha1.desenha();
  caixinha2.desenha();
  porquin1.desenha();
  tronco1.desenha();

  caixinha3.desenha();
  caixinha4.desenha();
  porquin2.desenha();
  tronco2.desenha();

  caixinha5.desenha();
  tronco3.desenha();
  tronco4.desenha();
}
