class Chao {
    constructor(x,y,largura,altura){
        var opcoesChao = {  
            isStatic: true,
          };
        
          this.chao = Bodies.rectangle(x, y, largura, altura, opcoesChao);
          World.add(mundo, this.chao);
          this.altura = altura
          this.largura = largura
    }
        desenha(){
            fill("brown");
            rectMode(CENTER);
            rect(this.chao.position.x, this.chao.position.y, this.largura, this.altura);
        }
}