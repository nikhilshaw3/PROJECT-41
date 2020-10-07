const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var particles = [];
var boy;
var thunder,thunder1;


function setup(){

var canvas = createCanvas(700, 750);

engine = Engine.create();
world = engine.world;

boy = new Boy(400,550,80,270);

thunder = new Thunder(600,100,100,100);
thunder1 = new Thunder1(100,100,100,100)

}
function draw(){

background(0);
Engine.update(engine);

for (var j = 0; j < particles.length; j++) {
    particles[j].display();  
    } 
    if(frameCount%1===0){
    particles.push(new Particle(random(0,700),5,5));

    }

    if(frameCount%80===0){
        thunder.display(); 
           
        }
        if(frameCount%60===0){
            thunder1.display(); 
               
            }
    


   boy.display();
   

}

