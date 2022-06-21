var timer = 0
class Character{
    constructor()
    {
        this.width = 50
        this.height = 70
        this.x = random(-800, 100);
        this.y = 100
        this.yvel = 0;
        this.xvel = 0;
        this.speed = 3;
        this.grounded = false
        this.m = 0.4;
        this.jumpheight = 10;
        this.faceing = 'right'
        this.state = 'idle'
        this.hp = 3
        this.hitable = true
    }
    //show and animate the player
    show(){
        //chose faceing
    {
        if(mouseX > width/2){
            this.faceing = 'right'
        }
        else if(mouseX < width/2){
            this.faceing = 'left'
        }
    }
    image(Pointer, this.x + 20, this.y-20, 20, 20)
        switch(this.state){
            case 'idle':
                if(this.faceing == 'right'){
                    switch(playerId){
                        case 1:
                            image(playerOneIdle,this.x, this.y, this.width, this.height)
                            break;
                        case 2:
                            image(playerTwoIdle,this.x, this.y, this.width, this.height)
                            break;
                        case 3:
                            image(playerThreeIdle,this.x, this.y, this.width, this.height)
                            break;
                        case 4:
                            image(playerFourIdle,this.x, this.y, this.width, this.height)
                            break;
                        default:
                            ""
                    }  
                }
                else if(this.faceing == 'left'){
                    switch(playerId){
                        case 1:
                            push();scale (-1, 1);image(playerOneIdle,-this.x - this.width, this.y, this.width, this.height);pop()
                            break;
                        case 2:
                            push();scale (-1, 1);image(playerTwoIdle,-this.x - this.width, this.y, this.width, this.height);pop()
                            break;
                        case 3:
                            push();scale (-1, 1);image(playerThreeIdle,-this.x - this.width, this.y, this.width, this.height);pop()
                            break;
                        case 4:
                            push();scale (-1, 1);image(playerFourIdle,-this.x - this.width, this.y, this.width, this.height);pop()
                            break;
                        default:
                            ""
                    }   
                }
                break;
            case 'runningRight':
                switch(playerId){
                    case 1:
                        image(playerOneRun,this.x, this.y, this.width, this.height)
                        break;
                    case 2:
                        image(playerTwoRun,this.x, this.y, this.width, this.height)
                        break;
                    case 3:
                        image(playerThreeRun,this.x, this.y, this.width, this.height)
                        break;
                    case 4:
                        image(playerFourRun,this.x, this.y, this.width, this.height)
                        break;
                    default:
                        ""
                }  
                break;
            case 'runningLeft':
                switch(playerId){
                    case 1:
                        push();scale (-1, 1);image(playerOneRun,-this.x - this.width, this.y, this.width, this.height);pop()
                        break;
                    case 2:
                        push();scale (-1, 1);image(playerTwoRun,-this.x - this.width, this.y, this.width, this.height);pop()
                        break;
                    case 3:
                        push();scale (-1, 1);image(playerThreeRun,-this.x - this.width, this.y, this.width, this.height);pop()
                        break;
                    case 4:
                        push();scale (-1, 1);image(playerFourRun,-this.x - this.width, this.y, this.width, this.height);pop()
                        break;
                    default:
                        ""
                    }
                break;
            case 'swing':
                switch(this.faceing){
                    case 'right':
                        switch(playerId){
                            case 1:
                                image(playerOneAttack, this.x, this.y-30, 100, 100)
                                break;
                            case 2:
                                image(playerTwoAttack, this.x, this.y-30, 100, 100)
                                break;
                            case 3:
                                image(playerThreeAttack, this.x, this.y-30, 100, 100)
                                break;
                            case 4:
                                image(playerFourAttack, this.x, this.y-30, 100, 100)
                                break;
                        }
                        break;
                    case 'left':
                        switch(playerId){
                            case 1:
                                push();scale (-1, 1);image(playerOneAttack, -this.x - this.width, this.y-30, 100, 100);pop()
                                break;
                            case 2:
                                push();scale (-1, 1);image(playerTwoAttack, -this.x - this.width, this.y-30, 100, 100);pop()
                                break;
                            case 3:
                                push();scale (-1, 1);image(playerThreeAttack, -this.x - this.width, this.y-30, 100, 100);pop()
                                break;
                            case 4:
                                push();scale (-1, 1);image(playerFourAttack, -this.x - this.width, this.y-30, 100, 100);pop()
                                break;
                        }
                        break;
                }
                break;
            case 'dead': 
                switch(playerId){
                    case 1:
                            image(playerOneDead,this.x-30, this.y- 11 )
                            if(playerOneDead.getCurrentFrame() == 12){
                                playerOneDead.setFrame(12);
                            }
                            break;
                        case 2:
                            image(playerTwoDead,this.x-30, this.y- 11 )
                            if(playerTwoDead.getCurrentFrame() == 12){
                                playerTwoDead.setFrame(12)
                            }
                            break;
                        case 3:
                            image(playerThreeDead,this.x-30, this.y- 11 )
                            if(playerThreeDead.getCurrentFrame() == 12){
                                playerThreeDead.setFrame(12)
                            }
                            break;
                        case 4:
                            image(playerFourDead,this.x-30, this.y- 11)
                            if(playerFourDead.getCurrentFrame() == 12){
                                playerFourDead.pause();
                            }
                            break;
                        default:
                            ""
                }
            break;

        } 
    }
    //move the player
    move(){
        if (this.xvel == 0.1 || this.xvel == -0.1){
            this.xvel = 0; this.yvel = 0;
        }
        if (keyIsDown(65)){
            this.xvel = this.speed
        }
        else if(keyIsDown(68)){
            this.xvel = -this.speed
        }
        else{
            if (this.xvel != 0){
                if(this.xvel < 0){
                    this.xvel += 1;
                }
                else if(this.xvel > 0){
                    this.xvel -= 1;
                }
            }
        }
        this.x -= this.xvel;
        this.y += this.yvel
        if (this.grounded){
            this.yvel = 0;
        }
        if (keyIsDown(87)){
            if(this.grounded){
                this.yvel = -this.jumpheight;
            }
        }
        if(this.grounded == false){
            this.yvel += this.m 
        }    
    if(this.xvel > 1){
        this.state = 'runningLeft'
    }
    else if(this.xvel < -1){
        this.state = 'runningRight'
    }
    else{
        this.state = 'idle'
    }
    }
    attack(){
        if (shoot){
            switch(playerId){
                case 1:
                    if(playerOneAttack.getCurrentFrame() == 5){
                        this.state = 'idle'
                        playerOneAttack.setFrame(0)
                        shoot = false
                    }
                    else{
                        this.state = 'swing'
                    }
                break;
                case 2:
                    if(playerTwoAttack.getCurrentFrame() == 5){
                        this.state = 'idle'
                        playerTwoAttack.setFrame(0)
                        shoot = false
                    }
                    else{
                        this.state = 'swing'
                    }
                break;
                case 3:
                    if(playerThreeAttack.getCurrentFrame() == 5){
                        this.state = 'idle'
                        playerThreeAttack.setFrame(0)
                        shoot = false
                    }
                    else{
                        this.state = 'swing'
                    }
                break;
                case 4:
                    if(playerFourAttack.getCurrentFrame() == 5){
                        this.state = 'idle'
                        playerFourAttack.setFrame(0)
                        shoot = false
                    }
                    else{
                        this.state = 'swing'
                    }
                break;
            }
        }
    }
    hit(enemy){
        if (this.hp == 0){
            this.state = 'dead'
        }
        if (frameCount % 60 == 0 && timer > 0) {
            timer --;
          }

        if (this.hitable == false && timer == 0){
            this.hitable = true;
        }  
          
        if(enemy.state == 'swing' && enemy.faceing == 'right'){
            this.collision(
            {
                x: enemy.x,
                y: enemy.y,
                w: 100,
                h: 90,
            },
            {
                x: this.x,
                y: this.y,
                w: 50,
                h: 70,
            })
        }
           if(enemy.state == 'swing' && enemy.faceing == 'left'){
            this.collision(
            {
                x: enemy.x-50,
                y: enemy.y,
                w: 50,
                h: 90,
            },
            {
                x: this.x,
                y: this.y,
                w: 50,
                h: 70,
            })
        }
    }
    collision (rect1, rect2,){
        if(rect1.x < rect2.x+rect2.w && rect2.x < rect1.x+rect1.w &&rect1.y < rect2.y+rect2.h && rect2.y < rect1.y+rect1.h && this.hitable){
            this.hp -= 1 
            this.hitable = false
            timer = 4;
           }
      }
}
