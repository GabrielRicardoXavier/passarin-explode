const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var motorDaFisica, mundo;
var passarinho;
var chao, plataforma;
var caixinha1, caixinha2, caixinha3, caixinha4, caixinha5;
var porquin1, porquin2;
var tronco1, tronco2, tronco3, tronco4;
var fundo;
var estilingue;

function preload() {
  fundo = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200, 600);

  motorDaFisica = Engine.create();
  mundo = motorDaFisica.world;

  passarinho = new Passarinho(100,100);

  chao = new Chao(600,585,1200,30);
  plataforma = new Chao(200,500,400,200);

  caixinha1 = new Caixinha(700,520,70,70);
  caixinha2 = new Caixinha(920,520,70,70);
  porquin1 = new Porco(810,550);
  tronco1 = new Tronquin(810,460,300,PI/2);

  caixinha3 = new Caixinha(700,440,70,70);
  caixinha4 = new Caixinha(920,440,70,70);
  porquin2 = new Porco(810,420);
  tronco2 = new Tronquin(810,380,300,PI/2);

  caixinha5 = new Caixinha(810,360,70,70);
  tronco3 = new Tronquin(760,320,150,PI/7);
  tronco4 = new Tronquin(860,320,150,-PI/7);

  estilingue = new Estilingue(passarinho.corpo,{x:350,y:230})
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

  estilingue.desenha();
}
