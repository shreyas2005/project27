class bx{
    constructor(x,y,radius){
        var op={
            isStatic:false,
            density:0.8,
            restitution:1,
            friction:0
        }
        this.body=Bodies.circle(x,y,radius,op);
        World.add(world,this.body);
      this.radius=radius;
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("orange")
        ellipse(0,0,this.radius);
        pop();
    }
}