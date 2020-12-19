class Rope {
    constructor(bodyA, pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length : 400
        }

        this.constraint = Constraint.create(options);

        World.add(world, this.constraint);
    }
    display(){
        var point1 = this.constraint.bodyA.position;
        var point2 = this.constraint.pointB;

        strokeWeight(5);
        fill(0);
        line(point1.x, point1.y, point2.x, point2.y);
    }
}