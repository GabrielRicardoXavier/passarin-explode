class Chao {
    constructor(x,y,largura,altura){
        var opcoesChao = {  
            isStatic: true,
          };
        
          this.chao = Bodies.rectangle(x, y, largura, altura, opcoesChao);
          World.add(mundo, this.chao);
          this.altura = altura
          this.largura = largura
          this.imagem = loadImage("sprites/ground.png")
    }
        desenha(){
            push();
            fill("brown");
            imageMode(CENTER);
            image(this.imagem,this.chao.position.x, this.chao.position.y, this.largura, this.altura);
            pop();
        }
}