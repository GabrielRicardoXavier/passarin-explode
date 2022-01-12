class Porco extends Base {
    constructor(x,y){
        var opcoes = {
            'restitution':0.8,
            'friction':0.3,
            'density':0.5
        }

        super(x,y,50,50,opcoes);
        this.imagem = loadImage("sprites/enemy.png")
    }
}