class Chao {
    constructor(x,y,largura,altura){
        var opcoesChao = {  
            isStatic: true,
        };
        
        this.chao = Bodies.rectangle(x, y, largura, altura, opcoesChao);
        this.altura = altura
        this.largura = largura
        this.imagem = loadImage("sprites/base.png")
        World.add(mundo, this.chao);
    }

    desenha(){
        push();
        imageMode(CENTER);
        image(this.imagem,this.chao.position.x, this.chao.position.y, this.largura, this.altura);
        pop();
    }
}