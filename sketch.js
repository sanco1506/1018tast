var b;
var bt1;
var bt2;

function setup() {
  createCanvas(400, 400);
  b = new Ball(200,200,15);
  bt1= new Bat(200,380);
  bt2= new Bat(200,20);
}

function draw() {
  background(0);
  
  b.move();
  b.checkEdge();
  b.show();
  
  bt1.show();
  bt2.show();
  
  if (b.y >= 370 || b.y <= 30) {
    if (b.x <= mouseX + (this.width / 2) && b.x >= mouseX - (this.width / 2)) {
      b.bounce();
      b.colorchange();
    }
  }   
  
}

class Ball {
  constructor(x,y,r){
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.xSpeed = 4;
    this.ySpeed = 1;
    
  }

  show(){
    
    ellipse(this.x,this.y,this.r);
    
  }
  move(){
    
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
  checkEdge() {
    if (this.x >= width || this.x <= 0) {
      this.xSpeed *= -1;
    }

//   if (this.y >= height || this.y <= 0) {
//    this.ySpeed *= -1;
//}

  }
  bounce(){
    this.ySpeed *= -1 ;
  }
  colorchange(){
    fill(random(255,0),random(255,0),random(255,0))
  }

}

class Bat{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.width=60;
    this.height=10;
  }
  show(){
    rectMode(CENTER);
    rect(mouseX,this.y,this.width,this.height);
  }
  

}
