const World = Matter.World, 
Engine = Matter.Engine,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var ball, constraint1;

function setup(){
    var canvas = createCanvas(1500, 1000);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height-30, width, 20);

    box1 = new Box(1300, 800);
    box2 = new Box(1300, 700);
    box3 = new Box(1300, 600);
    box4 = new Box(1300, 500);
    box5 = new Box(1300, 400);

    box6 = new Box(1100, 800);
    box7 = new Box(1100, 700);
    box8 = new Box(1100, 600);
    box9 = new Box(1100, 500);
    box10 = new Box(1100, 400);

    box11 = new Box(900, 800);
    box12 = new Box(900, 700);
    box13 = new Box(900, 600);
    box14 = new Box(900, 500);
    box15 = new Box(900, 400);

    ball = new Ball(500, 600, 50);

    constraint1 = new Rope(ball.body, {x:500, y:300});

}

function draw (){
    background(200);

    Engine.run(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    ellipseMode(RADIUS);
    ball.display();

    constraint1.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    //Matter.Body.applyForce(ball.body, {x:})
}