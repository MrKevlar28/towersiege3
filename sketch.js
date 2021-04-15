const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var bg, backgroundImg;

function preload(){
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;

  //  polygon = Bodies.circle(50,200,20)
  //  World.add(world,polygon);
  polygon = new Polygon(50,200,20);
  slingshot = new Slingshot(polygon.body,{x : 100, y : 200});
  

  //blocks

  block8 = new Block(330,235,15,23);
  block9 = new Block(360,235,15,23);
  block10 = new Block(390,235,15,23);
  block11 = new Block(420,235,15,23);
  block12 = new Block(450,235,15,23);
  block13 = new Block(360,185,15,23);
  block14 = new Block(390,185,15,23);
  block15 = new Block(420,185,15,23);
  block16 = new Block(390,135,15,23);
  ground = new Ground(390,280,185,10);
  ground1 = new Ground(400,400,800,20);
  



  Engine.run(engine);
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);  
  ground.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
  ground1.display();
  polygon.display();


  drawSprites();
}

function mouseDragged(){
  // if (gameState!=="launched"){
       Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
   //}
 }
 
 
 function mouseReleased(){
   slingshot.fly();
   //gameState = "launched";
 }
 function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sunrise.jpg";
  }
  else{
      bg = "night.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}


 