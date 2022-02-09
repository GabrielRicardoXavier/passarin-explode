class Porco extends Base {
    constructor(x,y){
        var opcoes = {
            'restitution':0.8,
            'friction':0.3,
            'density':0.5
        }

        super(x,y,50,50,opcoes);
        this.imagem = loadImage("sprites/enemy.png")
        this.visibilidade = 255
    }

    desenha() {
        var posicao = this.corpo.position
        if(this.corpo.speed <4) {
            super.desenha()
        } else{
            World.remove(mundo,this.corpo)
            push()
            this.visibilidade = this.visibilidade -5
            tint(255,this.visibilidade)
            image(this.imagem,posicao.x,posicao.y,50,50)
            pop()
        }
    }

    pontua() {
        if(this.visibilidade <0 && this.visibilidade >-500) {
            pontuacao = pontuacao +1
        }

    }
}