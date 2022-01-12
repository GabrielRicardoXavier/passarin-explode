class Tronquin extends Base{
    constructor(x,y,altura,angulo){
        var opcoes = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        super(x,y,20,altura,opcoes)
        this.imagem = loadImage("sprites/wood2.png")
        Matter.Body.setAngle(this.corpo,angulo);
    }
}