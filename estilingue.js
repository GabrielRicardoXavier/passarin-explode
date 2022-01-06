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
        var pontoA = this.estilingue.bodyA.position
        var pontoB = this.estilingue.pointB
        push();
        imageMode(CENTER)
        image(this.estilingue1,350,300)
        image(this.estilingue2,325,265)
        image(this.estilingue3,pontoA.x -20,pontoA.y,15,30)
        stroke(48,22,8)
        strokeWeight(7)
        line(pontoA.x -12,pontoA.y,pontoB.x,pontoB.y)
        line(pontoA.x -12,pontoA.y,pontoB.x -30,pontoB.y)
        pop();
    }
}