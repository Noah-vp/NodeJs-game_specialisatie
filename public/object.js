class Obj {
    constructor(type, x, y, w, h) {
      this.x = x
      this.y = y
      this.width = w
      this.height = h
      this.type = type
    }
    show(){
       switch(this.type){
        case 'box':
            image(boxImg, this.x, this.y, this.width, this.height)
            break;
       } 
    }
    collision(){
        switch(this.type){
            case 'ground':
                if (player.y + player.height > this.y){
                    player.y =  this.y - player.height
                    player.grounded = true
                }
                else{
                    player.grounded = false;
                }
            break;
            case 'box':
                //left col
                if(player.x + 50 > this.x && player.x + 50 < this.x + 10 && player.y + 70> this.y && player.y < this.y + this.height){
                    player.x = this.x - this.width
                }
                //right col
                if(player.x < this.x + this.width && player.x > this.x + this.width-10 && player.y + 70> this.y && player.y < this.y + this.height){
                    player.x = this.x+50
                }
                //top col
                if(player.x + 50 > this.x && player.x < this.x + this.width && player.y + 70 > this.y && player.y < this.y + this.height/2){
                    player.grounded = true
                    player.y = this.y -70
                }
                //bottom col
                if(player.x + 50 > this.x && player.x < this.x + this.width && player.y < this.y + this.height && player.y + 70 > this.y){
                    player.y = this.y + this.height 
                    player.yvel = -player.yvel + player.yvel /0.9999999 
                    player.grounded = false
                }
            break;
        }
    }
}