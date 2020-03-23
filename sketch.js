var bgimg;
var player;
var vel = 0;
var heartImg;
var gamestate = 0;
var enemy1,enemy2,enemy3,enemy4,enemy5;

function preload(){
  loadImage("car.png");
  heartImg = loadImage("heart.png");
}

function setup(){
  createCanvas(800,700);
  player = new Player();
  enemy1 = new Enemy(300);
  enemy2 = new Enemy(500);
  enemy3 = new Enemy(200);
  enemy4 = new Enemy(400);
  enemy5 = new Enemy(600);
}

function draw(){
  background(20);
  camera.position.x = 400;
  stroke(255);
  strokeWeight(5);
  line(400,0,400,700);
  if(gamestate === 0){
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  player.display();
  player.control();
  player.score+=0.1;
  }
  if(gamestate === 1){
   textSize(50);
   text("GAME OVER",250,350);
   textSize(25);
   text("SCORE :"+round(player.score),350,400);
  }
  stroke(180);
  strokeWeight(20);
  line(100,0,100,700);
  line(700,0,700,700);
  for(var i = 0; i<player.health;i++){
    image(heartImg,200+(100*i),650,30,30);
  }
}