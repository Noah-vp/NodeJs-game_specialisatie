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
    }
    show(){
        switch(this.state){
            case 'idle':
                if(this.faceing == 'right'){
                    switch(this.id){
                        case 1:
                            image(playerOneIdle,-this.x, this.y, this.width, this.height)
                            break;
                        case 2:
                            image(playerTwoIdle,-this.x, this.y, this.width, this.height)
                            break;
                        case 3:
                            image(playerThreeIdle,-this.x, this.y, this.width, this.height)
                            break;
                        case 4:
                            image(playerFourIdle,-this.x, this.y, this.width, this.height)
                            break;
                        default:
                            ""
                    }  
                }
                else if(this.faceing == 'left'){
                    switch(this.id){
                        case 1:
                            scale(-1, 1);image(playerOneIdle,-this.x - this.width, this.y, this.width, this.height)
                            break;
                        case 2:
                            scale(-1, 1);image(playerTwoIdle,-this.x - this.width, this.y, this.width, this.height)
                            break;
                        case 3:
                            scale(-1, 1);image(playerThreeIdle,-this.x - this.width, this.y, this.width, this.height)
                            break;
                        case 4:
                            scale(-1, 1);image(playerFourIdle,-this.x - this.width, this.y, this.width, this.height)
                            break;
                        default:
                            ""
                    }   
                }
                break;
            case 'runningLeft':
                switch(this.id){
                    case 1:
                        scale(-1, 1);image(playerOneRun,this.x - this.width, this.y, this.width, this.height)
                        break;
                    case 2:
                        scale(-1, 1);image(playerTwoRun,this.x - this.width, this.y, this.width, this.height)
                        break;
                    case 3:
                        scale(-1, 1);image(playerThreeRun,this.x - this.width, this.y, this.width, this.height)
                        break;
                    case 4:
                        scale(-1, 1);image(playerFourRun,this.x - this.width, this.y, this.width, this.height)
                        break;
                    default:
                        ""
                    }
                break;
            case 'runningRight':
                switch(this.id){
                    case 1:
                        image(playerOneRun, -this.x, this.y, this.width, this.height)
                        break;
                    case 2:
                        image(playerTwoRun,-this.x, this.y, this.width, this.height)
                        break;
                    case 3:
                        image(playerThreeRun,-this.x, this.y, this.width, this.height)
                        break;
                    case 4:
                        image(playerFourRun,-this.x, this.y, this.width, this.height)
                        break;
                    default:
                        ""
                }  
        }
    }
}