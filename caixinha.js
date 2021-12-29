class Caixinha extends Base {
    constructor(x,y,largura,altura){
        var opcoes = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        super(x,y,largura,altura,opcoes);
        this.imagem = loadImage("sprites/wood1.png")
    }
}