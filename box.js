class Box{
    constructor(x, y){
        var options={
            density : 0.1, 
            friction : 1
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        fill("#1683C6");
        rect(0, 0, 100, 100);
        pop();
    }

}