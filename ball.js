class Ball{
    constructor(x, y, r){
        var options={
            density : 1,
            frictionAir : 0.005,
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        ellipseMode(RADIUS);

        fill("black");
        ellipse(0, 0, this.radius, this.radius);
        
        pop();
    }
}