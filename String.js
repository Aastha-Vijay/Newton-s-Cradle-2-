class String{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 0.04,
            length :500
        }
        this.pointB = pointB;
        //bodyA = bodyA;
        this.string = Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointC = this.pointB;
        push();
        strokeWeight(3);
        stroke("white");
        line(pointA.x, pointA.y, pointC.x, pointC.y);
        pop();
    }

}