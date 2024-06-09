let currPeppaTile;
let currHammerTile;
let score =0;
let gameOver = false;
window.onload = function(){
    setGame();
}

function setGame() {
    for(let i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile)
    }
    setInterval(setPeppa, 1000);
    setInterval(setHammer, 1000);
}

function getRandomTile(){
    let num = Math.floor(Math.random() *9);
    return num.toString();
}

function setPeppa(){
    if(gameOver){
        return;
    }

    if(currPeppaTile) {
        currPeppaTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./images/peppa.png";
    let num = getRandomTile();
    if(currHammerTile && currHammerTile.id==num){
        return;
    }
    currPeppaTile = document.getElementById(num);
    currPeppaTile.appendChild(mole);
}

function setHammer(){
    if(gameOver){
        return;
    }

    if(currHammerTile){
        currHammerTile.innerHTML = "";
    }
    let hammer = document.createElement("img");
    hammer.src = "./images/hammer.png";

    let num = getRandomTile();
    if(currPeppaTile && currPeppaTile.id==num){
        return;
    }
    currHammerTile = document.getElementById(num);
    currHammerTile.appendChild(hammer);
}

function selectTile(){
    if(gameOver){
        return;
    }
    
    if(this==currPeppaTile){
        score+=10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == currHammerTile){
        document.getElementById("score").innerText="GAME OVER: "+ score.toString();
        gameOver=true;
    }
}