 //coneccion socket 
 var socket; 

 var porin;

 var gelatinas= [];
 var camara=1; 
 
 function setup() { 
    createCanvas(650, 650);
    
    socket= io.connect('http://localhost:3000');

   
    porin = new poring(random(width),random(height),random(8,24));
    
    var data = {
      x: porin.pos.x , 
      y: porin.pos.y ,
      r:porin.r
    };
    socket.emit('start',data);

    socket.on('heartbeat',function(data){
      //console.log(data);
      gelatinas = data;
    }); 
 }
  function draw() { 
    background(0);
    console.log(porin.pos.x,porin.pos.y);
    translate(width/2,height/2);
    var nuevaCamara = 64/porin.r;
    camara= lerp (camara, nuevaCamara,0.1);
    scale(camara);
    translate(-porin.pos.x,-porin.pos.y);

    for (var i = gelatinas.length - 1; i >= 0; i--) {
      
      if(id.substring(2,id.length) !== socket.id){
      fill(0,0,255);
      elipse(gelatinas[i].x, gelatinas[i].y, gelatinas[i].r*2 , gelatinas[i].r*2);
      //gelatinas[i].show();
      //if (porin.come(gelatinas[i])) {
        //gelatinas.splice(i, 1);
      //}

      fill(255);
      textAlign(CENTER);
      textSize(4);
      text(gelatinas[i].id, gelatinas[i].x,gelatinas[i].y + gelatinas[i].r);
      }
    }

    porin.show()
    if(mouseIsPressed){
      porin.movimiento();
    }
    porin.constrain();
    var data = {
      x: porin.pos.x , 
      y: porin.pos.y ,
      r: porin.r
    };
    socket.emit('update',data);
}
    
    
    
  


    

