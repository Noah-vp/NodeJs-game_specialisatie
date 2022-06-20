function preload(){
    backgroundImg = loadImage('assets/Background.png');

    playerOneIdle = loadImage('assets/KnightOneIdle.gif');
    playerTwoIdle = loadImage('assets/KnightTwoIdle.gif');
    playerThreeIdle = loadImage('assets/KnightThreeIdle.gif');
    playerFourIdle = loadImage('assets/KnightFourIdle.gif');

    playerOneRun = loadImage('assets/KnightOneRun.gif');
    playerTwoRun = loadImage('assets/KnightTwoRun.gif');
    playerThreeRun = loadImage('assets/KnightThreeRun.gif');
    playerFourRun = loadImage('assets/KnightFourRun.gif');
}
var socket;
var playerId = '';
var player;
var role;
var objects = [];

function setup(){
    createCanvas(600, 600)
    socket = io.connect('http://192.168.2.12:3000/')
    socket.on('update', dataLoading)
    socket.on('playertag', playerIdMaker)

    player = new Character()
    objects.push(new Obj('ground', 0, 550, 600, 0))
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
    console.log(data)
}


function draw(){
    //disable for demo
    if (playerId < 5){
        role = 'player'
    }

    cursor(CROSS)

    background(backgroundImg);


    if (role == 'player'){
        fill(0);textSize(12);text("Player: " + playerId, 10, 30);
        player.show()
        player.move()
    }

    for(i = 0; i < objects.length; i++) {
        objects[i].collision()
    }   
}