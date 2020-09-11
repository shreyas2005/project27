class base{
    constructor(x,y,width,height){
        var op={
            isStatic:true,
            density:1.2,
            restitution:0,
            friction:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
}
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("green")
        rect(0,0,this.width,this.height);
        pop();
    }
}