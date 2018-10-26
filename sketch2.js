var ball_x_axis = 100;
var ball_y_axis = 100;
var paddle_x_axis = 0;
var paddle_y_axis = 50;

var paddle_height = 100;
var paddle_width = 15;

var speed = 7;
var score = 0;

function setup(){
    createCanvas(800, 400);
}

function draw(){

    background(100);
    text("Score: " + score, 400, 200)

    ball_x_axis = ball_x_axis + speed;
    //ball_y_axis = ball_y_axis + Math.floor(Math.random()*10);

    paddle_creation(paddle_x_axis, paddle_y_axis, paddle_width, paddle_height);
    paddle_movement();
    ellipse(ball_x_axis, ball_y_axis, 30, 30);
    ball_movement_boundaries();
    ball_and_paddle_collision();
    
}

function ball_movement_boundaries(){
    if (ball_x_axis < 30) {
        speed = speed * -1;
    } else if (ball_x_axis > 800) {
        speed = speed * -1;
    }
}

function paddle_creation(x, y, h, w){
    rect(x,y, h, w);
}

function paddle_movement(){
    if (keyIsDown(UP_ARROW) && paddle_y_axis > 0){
        paddle_y_axis -= 10;
    } if (keyIsDown(DOWN_ARROW)&& paddle_y_axis < 300){   
        paddle_y_axis += 10;
    }
} 

function ball_and_paddle_collision(){
    var collision = false;
    if (ball_x_axis < paddle_width*2 && ball_y_axis >= paddle_y_axis && ball_y_axis <= paddle_y_axis+paddle_height){
        collision = true;
    }
    if (collision){
        score++;
    }
}