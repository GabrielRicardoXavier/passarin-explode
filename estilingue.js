class Estilingue {
    constructor(corpoA,corpoB){
        var opcoes = {
            bodyA:corpoA,
            pointB:corpoB,
            stiffness:0.04,
            length:10
        }
        
        this.estilingue = Constraint.create(opcoes);
        this.estilingue1 = loadImage("sprites/sling1.png");
        this.estilingue2 = loadImage("sprites/sling2.png");
        this.estilingue3 = loadImage("sprites/sling3.png");
        World.add(mundo,this.estilingue);
    }
    
    desenha(){
        image(this.estilingue1,350,200)
        image(this.estilingue2,325,195)
        
        if(this.estilingue.bodyA){
            var pontoA = this.estilingue.bodyA.position
            var pontoB = this.estilingue.pointB

            push();
            stroke(48,22,8)
            if(pontoA.x <220){
                image(this.estilingue3,pontoA.x -20,pontoA.y -10,15,30)
                strokeWeight(4)
                line(pontoA.x -12,pontoA.y,pontoB.x,pontoB.y)
                line(pontoA.x -12,pontoA.y,pontoB.x -30,pontoB.y)
            } else{
                image(this.estilingue3,pontoA.x -20,pontoA.y -10,15,30)
                strokeWeight(7)
                line(pontoA.x -12,pontoA.y,pontoB.x,pontoB.y)
                line(pontoA.x -12,pontoA.y,pontoB.x -30,pontoB.y)
            }
            
            pop();
        }
    }

    voa() {
        this.estilingue.bodyA = null
    }

    teleporte(corpo) {
        this.estilingue.bodyA = corpo
    }
}