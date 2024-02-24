resetGame();

class Player {
    constructor(name) {
        this.name = name;
    }
    choice = "";
    marks = [];
}

let player1 = new Player('Player1');
let player2 = new Player('Player2');

function selectOption(choice) {
        player1.choice = choice;
        player2.choice = player1.choice === 'o' ? 'x' : 'o';
        localStorage.setItem('player1', JSON.stringify(player1));
        localStorage.setItem('player2', JSON.stringify(player2));

        playGround();
}

function playGround(){
    const nextPageUrl = 'playGround.html';
    window.location.href = nextPageUrl;
}

function resetGame() {
    localStorage.removeItem('player1');
    localStorage.removeItem('player2');
}
