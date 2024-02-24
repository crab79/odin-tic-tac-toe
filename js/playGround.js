let playerNow = document.getElementById('player');
let symbols = document.getElementsByClassName('gridLine');
let playBoard = document.getElementsByClassName('battleField');

let player1 = JSON.parse(localStorage.getItem('player1'));
if (player1) {
    console.log('Player 1 name:', player1.name);
    console.log('Player 1 choice:', player1.choice);
    console.log('Player 1 marks:', player1.marks);
} else {
    console.log('Player 1 data not found in localStorage');
}

let player2 = JSON.parse(localStorage.getItem('player2'));
if (player2) {
    console.log('Player 2 name:', player2.name);
    console.log('Player 2 choice:', player2.choice);
    console.log('Player 2 marks:', player1.marks);
} else {
    console.log('Player 2 data not found in localStorage');
}

addSymbolEventListeners();

function addSymbolEventListeners() {
    for (let i = 0; i < symbols.length; i++) {
        symbols[i].addEventListener('mouseover', function () {
            // Code to execute when the mouse enters the element
            if (playerNow.textContent === "Player1") {
                if(symbols[i].clicked != true){
                    symbols[i].style.backgroundImage = `url('..img/${player1.choice}.svg')`;
                }
            } else if (playerNow.textContent === "Player2") {
                if(symbols[i].clicked != true){
                    symbols[i].style.backgroundImage = `url('..img/${player2.choice}.svg')`;
                }
            }
        });

        symbols[i].addEventListener('mouseout', function () {
            // Code to execute when the mouse leaves the element
            if(symbols[i].clicked != true){
                symbols[i].style.backgroundImage = 'none';
            }
        }); 

        symbols[i].addEventListener('click', function () {
            // Code to execute when the mouse enters the element
            if (playerNow.textContent === "Player1") {
                symbols[i].style.backgroundImage = `url('..img/${player1.choice}.svg')`;
                playerNow.textContent = "Player2";
                symbols[i].clicked = true;
            } else if (playerNow.textContent === "Player2") {
                symbols[i].style.backgroundImage = `url('..img/${player2.choice}.svg')`;
                checkWinner(playerNow.textContent);
                playerNow.textContent = "Player1";
                symbols[i].clicked = true;
            }
        });

    }
}

function mark(id) {
    if (playerNow.textContent === "Player1") {
        player1.marks.push(id);
        player1.marks.sort(function(a, b) {
            return a - b;
        });
        checkWinner(playerNow.textContent);

    } else if (playerNow.textContent === "Player2") {
        player2.marks.push(id);
        player2.marks.sort(function(a, b) {
            return a - b;
        });
        checkWinner(playerNow.textContent);

    }
}

function checkWinner(player) {
    const winningConditions = [
        ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"],
        ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], 
        ["1", "5", "9"], ["3", "5", "7"] 
    ];

    let marks;
    if (player === "Player1") {
        marks = player1.marks;
    } else {
        marks = player2.marks;
    }

    for (let condition of winningConditions) {
        if (condition.every(mark => marks.includes(mark))) {
            alert(`${player} win`); 
            restart()
        }
    }

    if (marks.length === 5) {
        alert("tie");
        restart()
    }

    return false;
}

function restart(){
    const nextPageUrl = 'index.html';
    window.location.href = nextPageUrl;
}
