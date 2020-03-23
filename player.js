class Player{
    constructor(){
        this.xpos = 400;
        this.score = 0;
        this.image = loadImage("car.png");
        this.health = 5;
    }
        
   display(){
       imageMode(CENTER);
       image(this.image,this.xpos,500);
   }
   control(){
   if(keyIsDown(37)){
    this.xpos-=10;
   }
   else if(keyIsDown(39)){
    this.xpos+=10;
   }  
   if(this.xpos<120){
    this.xpos = 400;
    this.health--;
   }
   if(this.xpos>680){
    this.xpos = 400;
    this.health--;
   }  
   if(player.health<1){
       gamestate = 1;
   }
   }
}