//users
let userX = 100;
let userY = 250;
let opponentX = 900;
let opponentY = 250;
let opponentDirection = 1;
//ball
let xPos = 500;
let yPos = 250;
let xspeed,yspeed;
let xDirection = 1;
let yDirection = 1;
//scores
let userScore,opponentScore,scoreline;
//obstacles
let rectTop;
let rectBottom;
let rectRight;
let rectLeft;

let rect2Top;
let rect2Bottom;
let rect2Right;
let rect2Left;



function setup(){
    createCanvas(1000,600);
    background(0);
    noStroke();
    rectMode(CENTER)
    ellipseMode(CENTER)
    opponentSpeed = 5;
    //ball
    xspeed = -5;
    yspeed = random(-5,5);
    userScore = 0;
    opponentScore = 0;
    
}

function draw(){
    background(0);
    fill(0,115,255)
    rect(500,550,1000,100)
    fill(255,255,255);
    /*
    rect(500,100,25,100);
    rectTop = 50;
    rectBottom = 150;
    rectLeft = 88;
    rectRight = 112;

    rect(500,400,25,100);
    rect2Top = 350;
    rect2Bottom = 450;
    rectLeft = 88;
    rectRight = 112;
    */

    

     

    //user
    fill(255,0,0);
    rect(userX,userY,25,100);


     if(keyIsDown(DOWN_ARROW)){
        userY += 5;
     }
     if(keyIsDown(UP_ARROW)){
        userY -= 5;
     }

    myLeft = userX - 13;
    myRight = userX + 13;
    myTop = userY - 50;
    myBottom = userY + 50;

    
    //opponent
    fill(0,0,255);
    rect(opponentX,opponentY,25,150);


    enemyLeft = opponentX - 13;
    enemyRight = opponentX + 13;
    enemyTop = opponentY - 75;
    enemyBottom = opponentY + 75;
    opponentY += opponentSpeed * opponentDirection;
    if(opponentY >= 450 || opponentY <= 50){
        opponentDirection *= -1;
    } 
    //ball
    fill(0, 255, 0);
    ellipse(xPos, yPos, 50, 50);
    xPos += xspeed * xDirection;
    yPos += yspeed * yDirection;
    //ballcolision
    ballLeft = xPos - 25;
    ballRight = xPos + 25;
    ballTop = yPos - 25;
    ballBottom = yPos - 25
   
    if(yPos >= 475 || yPos <= 25){
        yDirection = yDirection *-1;

   }
   //collision
    if(ballLeft > enemyRight || ballBottom < enemyTop || ballRight < enemyLeft || ballTop > enemyBottom){
        xDirection = xDirection *-1;
        yDirection = yDirection *-1;
        xPos += 10;
    }
    if(ballLeft > myRight || ballBottom < myTop || ballRight < myLeft || ballTop > myBottom){
        xDirection = xDirection *-1;
        yDirection = yDirection *-1;
        xPos -= 10
    }
    
    
    
    //scoring
    if(xPos >= 975){
        userScore += 1;
        xPos = 500;
        yPos = 250;
        xspeed = -5;
    }

    if(xPos <= 25){
        opponentScore += 1;
        xPos = 500;
        yPos = 250;
        xspeed = -5
    }
    scoreline = ("P1: "+ userScore+"   P2: "+opponentScore)
    textSize(50);
    fill(255);
    text(scoreline, 375, 570);
    
}
