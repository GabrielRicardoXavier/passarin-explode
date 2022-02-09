class Passarinho extends Base {
    constructor(x,y){
        var opcoes = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        }
        
        super(x,y,50,50,opcoes)
        this.imagem = loadImage("sprites/bird.png")
        this.fumaca = loadImage("sprites/smoke.png")
        this.trajetoria = []
    }

    desenha(){
        var posicao = this.corpo.position

        if(this.corpo.velocity.x > 10 && posicao.x > 320){
            var posicaoPassarin = [posicao.x , posicao.y]
            this.trajetoria.push(posicaoPassarin)
        }
        

        for (var indice = 0; indice < this.trajetoria.length; indice++) {
            image(this.fumaca, this.trajetoria[indice][0], this.trajetoria[indice][1])
            
        }
        
        
        super.desenha()
    }
}