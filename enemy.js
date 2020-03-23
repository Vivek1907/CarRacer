class Enemy{
    constructor(x){
        this.x = x;
        this.y = -10;
    }
    display(){
        this.y+=10;
        if(this.y>700){
            this.y = 0;
            this.x+=round(random(-400,400));
          }
          if(this.x<120||this.x>680){
            this.x = 400;
          }
          if(this.y>480&&this.y<620&&this.x>player.xpos-40&&this.x<player.xpos+40){
              player.health--;
              player.xpos = 140;
          }
        fill(255,0,0);
        stroke(255);
        strokeWeight(2);
        rect(this.x,this.y,30,30);
    }
}