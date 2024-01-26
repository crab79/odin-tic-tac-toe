let user1Choice, user2Choice;
let playerNow = document.getElementById('player');

class Player {
    constructor(name){
        this.name = name;
    }
    choice;
}

let player1 = new Player('player1');
let player2 = new Player('player2');

function selectOption(choice) {
    if(playerNow.textContent == "Player1") {
        player1.choice = choice;
        playerNow.textContent = "Player2";
    }
    else if(playerNow.textContent == "Player2") {
        player2.choice = choice;
        window.location.href = 'playGround.html';
    }
}
