class Obj {
    constructor(type, x, y, w, h) {
      this.x = x
      this.y = y
      this.width = w
      this.height = h
      this.type = type
    }
    show(){
        rect(this.x, this.y, this.width, this.height)
    }
    collision(){
        if (this.type == 'ground'){
            if (player.y + player.height > this.y){
                player.y =  this.y - player.height
                player.grounded = true
            }
            else{
                player.grounded = false;
            }
        }
    }
}