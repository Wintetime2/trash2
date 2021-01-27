class Ball{

    constructor(x,y){


  var options ={
   restitution:0.5,
   friction:0.3,
   density:1.2,
         }
this.body = Bodies.circle(x,y,20,options);

this.image = loadImage("paper.png")

World.add(world, this.body);

 }

display(){
 var pos = this.body.position;
 var angle = this.body.angle;
 push();
 translate(pos.x, pos.y);
 rotate(angle);
 image(this.image, 0, 0, 50, 50)
 pop();
}

}