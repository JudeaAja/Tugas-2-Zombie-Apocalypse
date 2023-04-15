let zombies = [];
let karakter = [];
function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < 200; i++) {
    zombies.push(new Mover());
  }

  for (let z = 0; z < 2; z++) {
    karakter.push(new Mover2());
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < zombies.length; i++) {
    zombies[i].gerak();
    zombies[i].tampil();
    zombies[i].cekBatas();
  }

  //for (let z = 0; z < karakter.length; z++) {
    //karakter[z].gerak2();
    //karakter[z].tampil2();
    //karakter[z].cekBatas2();
  //}
}


class Mover {
  constructor(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
    this.panjanglebar = random(5, 20);
  }
  
  tampil(){
    stroke('white');
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(this.location.x, 
             this.location.y, 
             this.panjanglebar, 
             this.panjanglebar);
  }
  
  gerak(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = random(1, 50);
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}

class Mover2 {
  constructor(){
    this.location2 = createVector(random(width),random(height));
    this.velocity2 = createVector(0,0);
    this.acceleration2 = createVector(0.01,-0.01);
    //this.panjanglebar = random(5, 20);
  }
  
  tampil2(){
    stroke('white');
    fill(255);
    ellpse(this.location.x, 
             this.location.y,50,50);
  }
  
  gerak2(){
    var mouse2 = createVector(mouseX, mouseY);
    
    var arahMouse2 = p5.Vector.sub(mouse2, CENTER);
    //var topSpeed2 = random(1, 50);
    
    //arahMouse2.normalize();
    //arahMouse2.mult(0.5); 
  
    
    this.velocity2.add(this.acceleration2);
    this.velocity2.add(arahMouse2);
    this.velocity2.limit(topSpeed2);
    this.location2.add(this.velocity2);
  }
  
  cekUjung2(){
    if ( this.location2.x > windowWidth ) {
      this.location2.x = 0;
    }
    else if (this.location2.x < 0){
      this.location2X.x = windowWidth;
    }
  
    if ( this.location2.y > windowHeight ) {
      this.location2Y.y = 0;
    }
    else if (this.location2.y < 0){
      this.location2Y.y = windowHeight;
    }
  }
  
  cekBatas2(){
    if (this.location2.x < 0 || this.location2.x > width){
      this.velocity2.x = -1*this.velocity2.x
    }
    else if (this.location2.y < 0 || this.location2.y > height){
      this.velocity2.y = -1*this.velocity2.y
    }
  }
}