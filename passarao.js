class Passarinho extends Base {
    constructor(x,y){
        var opcoes = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        }
        
        super(x,y,50,50,opcoes)
        this.imagem = loadImage("sprites/bird.png")
    }

    desenha(){
        var posicao = this.corpo.position
        //posicao.x = mouseX;
        //posicao.y = mouseY;
        super.desenha()
    }
}