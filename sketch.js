 var porin;
 var gelatinas= [];
 var camara=1; 
 
 function setup() { 
    createCanvas(650, 650);
    
    porin = new poring(0,0,64);
    for (var i = 0; i < 200 ;i++){   
      var largo = random(-width,width);
      var hancho = random(-height, height);
        gelatinas[i] = new poring(largo,hancho,12);
    }
  } 
  
  function draw() { 
      
    background(0);
    translate(width/2,height/2);
    var nuevaCamara = 64/porin.r;
    camara= lerp (camara, nuevaCamara,0.1);
    scale(camara);
    translate(-porin.pos.x,-porin.pos.y);

    for (var i = gelatinas.length - 1; i >= 0; i--) {
      gelatinas[i].show();
      if (porin.come(gelatinas[i])) {
        gelatinas.splice(i, 1);
      }
    }
    porin.show()
    porin.movimiento();
}
    
    
    
  


    

