class Paper
{

    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius
        
        World.add(world,this.body);
        this.image=loadImage("paper.png");
    }

    display()
    {
        var pos=this.body.position
        var angle=this.body.angle
       ellipseMode(RADIUS);
       rotate(angle);
       circle(this.body.position.x,this.body.position.y,this.radius);
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,50,50)
    
      
    }
};

