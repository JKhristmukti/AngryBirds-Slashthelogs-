const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new pig(810,320);
    log1 = new Log(810,260,PI/2,300);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new pig(810,220);
    log2 = new Log(810,180,PI/2,300);
    log3 = new Log(760,120,PI/7,150);
    log4 = new Log(870,120,-PI/7,150);
    box5 = new Box (810,160,70,70);
    bird = new Bird(50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();
    ground.display();
}