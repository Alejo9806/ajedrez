function poring(x,y,r){
  
    this.pos = createVector(x,y);
    this.r =r;
    this.velocidad = createVector(0,0);

    this.constrain = function() {
        blob.pos.x = constrain(blob.pos.x, -width / 4, width / 4);
        blob.pos.y = constrain(blob.pos.y, -height / 4, height / 4);
      };
    
    this.show =function (){

        fill(255);
        ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2);

    }
    this.movimiento = function(){
        var nuevaVelocidad = createVector(mouseX-width/2,mouseY-height/2);
        nuevaVelocidad.div(50);
        //nuevaVelocidad.setMag(3);
        nuevaVelocidad,limit(3);
        this.velocidad.lerp(nuevaVelocidad,0.2);
        this.pos.add(this.velocidad);
    }

    this.come = function(other) {
        var distancia = p5.Vector.dist(this.pos,other.pos);
        if(distancia<this.r  + other.r ){
            var suma = PI * this.r  * this.r + PI * other.r* other.r;
            this.r = sqrt(suma/PI);

            return true;
        }else{
            return false
        }
        
    }


}