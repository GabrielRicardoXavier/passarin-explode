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
var fundoImagem = "sprites/bg.png"
var estilingue;
var pontuacao = 0
var fundoReserva
var corPontuacao = "black"

var estadoDoJogo = "Comeco"

function preload() {
    fundin()
    fundoReserva = loadImage(fundoImagem)
}

function setup() {
    createCanvas(1200, 600);

    motorDaFisica = Engine.create();
    mundo = motorDaFisica.world;

    passarinho = new Passarinho(370,230);

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

    estilingue = new Estilingue(passarinho.corpo,{x:370,y:230})
}

function draw() {
    if(fundo){
        background(fundo);
    } else {
        background(fundoReserva)
    }
    
    console.log(passarinho.corpo.position)

    textSize(20)
    fill(corPontuacao)
    text("Pontuação: " +pontuacao,1050,70)

    Engine.update(motorDaFisica);

    passarinho.desenha();

    chao.desenha();
    plataforma.desenha();

    caixinha1.desenha();
    caixinha2.desenha();
    porquin1.desenha();
    porquin1.pontua();
    tronco1.desenha();

    caixinha3.desenha();
    caixinha4.desenha();
    porquin2.desenha();
    porquin2.pontua();
    tronco2.desenha();

    caixinha5.desenha();
    tronco3.desenha();
    tronco4.desenha();

    estilingue.desenha();
}

function mouseDragged() {
    if(estadoDoJogo !== "Jogando"){
        Matter.Body.setPosition(passarinho.corpo, {x:mouseX, y:mouseY})
        passarinho.trajetoria = []
    }
    
}

function mouseReleased() {
    estilingue.voa();
    estadoDoJogo = "Jogando"
}

function keyPressed() {
    if(keyCode === 32 && passarinho.corpo.speed <1){
        passarinho.trajetoria = []
        Matter.Body.setPosition(passarinho.corpo, {x:370, y:230})
        estilingue.teleporte(passarinho.corpo);
        estadoDoJogo = "Comeco"
    }
}

async function fundin() {
    var resposta = await fetch ("https://worldtimeapi.org/api/timezone/America/Sao_Paulo")
    var respostaJson = await resposta.json()
    var hora = respostaJson.datetime.slice(11, 13)

    if(hora >= 6 && hora <= 18){
        //fundo de dia
        fundoImagem = "sprites/bg.png"
        corPontuacao = "black"
    } else{
        //fundo de noite
        fundoImagem = "sprites/bg2.jpg"
        corPontuacao = "white"
    }

    fundo = loadImage(fundoImagem)
}