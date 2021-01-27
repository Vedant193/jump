var canvas;
var music;
var box,surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,580,150,20);
    surface1.shapeColor="red";
    surface2=createSprite(300,580,150,20);
    surface2.shapeColor="blue";
    surface3=createSprite(500,580,150,20);
    surface3.shapeColor="yellow";
    surface4=createSprite(700,580,150,20);
    surface4.shapeColor="grey";

    

    //create box sprite and give velocity
    box=createSprite(random(20,750),400,55,55);
    box.shapeColor="white";
    box.velocityX=6;
    box.velocityY=6;
}

function draw() {
    background(0);
    
    
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="red";
        music.loop();
    }
    
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="yellow";
        music.loop();
    }
    

    if(surface2.isTouching(box)){
        box.shapeColor="blue";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="grey";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }

    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    drawSprites();


}
