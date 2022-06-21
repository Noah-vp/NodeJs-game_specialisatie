function preload(){
    backgroundImg = loadImage('assets/Background.png');
    Pointer = loadImage('assets/arrow.png')

    playerOneIdle = loadImage('assets/KnightOneIdle.gif');
    playerTwoIdle = loadImage('assets/KnightTwoIdle.gif');
    playerThreeIdle = loadImage('assets/KnightThreeIdle.gif');
    playerFourIdle = loadImage('assets/KnightFourIdle.gif');

    playerOneRun = loadImage('assets/KnightOneRun.gif');
    playerTwoRun = loadImage('assets/KnightTwoRun.gif');
    playerThreeRun = loadImage('assets/KnightThreeRun.gif');
    playerFourRun = loadImage('assets/KnightFourRun.gif');

    playerOneAttack = loadImage('assets/KnightOneAttack.gif');
    playerTwoAttack = loadImage('assets/KnightTwoAttack.gif');
    playerThreeAttack = loadImage('assets/KnightThreeAttack.gif');
    playerFourAttack = loadImage('assets/KnightFourAttack.gif');

    mainFont = loadFont('assets/gamefont.ttf');
}
var socket;
var playerId = '';
var player;
var role;
var objects = [];
var networkItems = [];


function setup(){
    createCanvas(600, 600)
    socket = io.connect('http://192.168.2.12:3000/')
    socket.on('update', dataLoading)
    socket.on('playertag', playerIdMaker)

    player = new Character()
    objects.push(new Obj('ground', 0, 550, 600, 0))
    for(i = 0; i < 4; i++){
        networkItems.push(new networkObject(0, -100, 'idle', 'right', i+1))
    }
}

//function to assign a playerId
function playerIdMaker(users) {
    if (playerId == ''){
         playerId = users.id;
         /*
         enble again for real demo
         if (users.id < 5){
            role = 'player'
         }*/
    }
}
//function to load incomming data
function dataLoading(data){
    switch(data.id){
        case 1:
            networkItems[0].x = data.x
            networkItems[0].y = data.y
            networkItems[0].state = data.state
            networkItems[0].faceing = data.faceing
            networkItems[0].id = data.id
            break;
        case 2:
            networkItems[1].x = data.x
            networkItems[1].y = data.y
            networkItems[1].state = data.state
            networkItems[1].faceing = data.faceing
            networkItems[1].id = data.id
            break;
        case 3:
            networkItems[2].x = data.x
            networkItems[2].y = data.y
            networkItems[2].state = data.state
            networkItems[2].faceing = data.faceing
            networkItems[2].id = data.id
            break;
        case 4:
            networkItems[3].x = data.x
            networkItems[3].y = data.y
            networkItems[3].state = data.state
            networkItems[3].faceing = data.faceing
            networkItems[3].id = data.id
            break;
    }
}

function sendData(){
    var data = {
        x: player.x,
        y: player.y,
        state: player.state,
        faceing: player.faceing,
        id: playerId
    }
    socket.emit('update', data)
}


function draw(){
    //disable for demo
    if (playerId < 5){
        role = 'player'
    }

    cursor(CROSS)
    background(backgroundImg);


    if (role == 'player'){
        fill(225);textSize(12);textFont(mainFont);text("Player: " + playerId, 10, 30);
        player.show()
        player.move()
        for(i = 0; i < objects.length; i++) {
            objects[i].collision()
        }
        sendData();
    }
    else{
        fill(225);textSize(22);textFont(mainFont);text("Spectating", width/2-130, 30)
    }
    for(i = 0; i < networkItems.length; i++){
        networkItems[i].show();
    }
}