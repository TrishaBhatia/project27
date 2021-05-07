class Bob
{
  constructor(x,y,radius)
  {
    var options ={
        isStatic: true,
        restitution:0.3,
        friction:0.5,
        density:0.5
    }
     
    this.body = Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body);
  }
  display()
  {
    fill("green");
    circle(this.body.position.x,this.body.position.y,this.radius);
    
  }
}
