class networkObject{
    constructor(x, y, state, faceing, id)
    {
        this.x = x;
        this.y = y;
        this.state = state
        this.faceing = faceing
        this.id = id
        this.width = 50
        this.height = 70
        this.hp = 3
    }
    show(){
        switch(this.state){
            case 'idle':
                if(this.faceing == 'right'){
                    switch(this.id){
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
                    switch(this.id){
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
            case 'runningLeft':
                switch(this.id){
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
            case 'runningRight':
                switch(this.id){
                    case 1:
                        image(playerOneRun, this.x, this.y, this.width, this.height)
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
            case 'swing':
                switch(this.faceing){
                    case 'right':
                        switch(this.id){
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
                        switch(this.id){
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
                switch(this.id){
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
    hearts(){
        switch(this.hp){
            case 1:
                image(heartImg, this.x-20, this.y - 20)
            break;
            case 2:
                image(heartImg, this.x-20, this.y - 20)
                image(heartImg, this.x+10, this.y - 20)
            break;
            case 3:
            	image(heartImg, this.x-20, this.y - 20)
                image(heartImg, this.x+10, this.y - 20)
                image(heartImg, this.x+ 40, this.y - 20)
            break;
        }
    }
}