class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:1,
            stiffness:0.08
            
        }
        this.pointB=pointB;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);

    }
    
    display(){
        var pos=this.chain.bodyA.position;
        var pos2=this.pointB;
        line(pos.x,pos.y,pos2.x,pos2.y);
}
}