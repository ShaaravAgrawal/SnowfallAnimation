class createSnow{
    constructor(x, y){
this.image=loadImage("snow4.png");
      var options = { 
            'restitution':0.1,
            'friction':0.01
          }
          this.body = Bodies.circle(x, y, 1, options);
          this.radius = 1;
          World.add(world, this.body);
    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 800), y:random(-200,-100)});
      }
    }
  
    display(){
      noStroke();
      fill(0,0,255);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
  }