var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music; 

function preload(){
    // load sound here
    music=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,300,30);
    block1.shapeColor = "blue";

    block2 = createSprite(250,580,150,30);
    block2.shapeColor = "orange";
    
    block3 = createSprite(450,580,150,30);
    block3.shapeColor = "red";

    block4 = createSprite(650,580,150,30);
    block4.shapeColor = "green";
    
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "black";
    
    ball.velocityX=3;
    ball.velocityY=-3;

    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

    ball.bounceOff(edges);
    /*ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);
    */

    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }
    drawSprites();
}
