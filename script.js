// 0 empty cell 
// 1 x 
// 2 o


// board indexes
// 0 1 2
// 3 4 5
// 6 7 8

const startGame_module = (function () {
    const start = document.getElementById("startGame");
    start.addEventListener("click", showChoiceDialog);

    function showChoiceDialog() {
        const gameContainer = document.getElementById("gameContainer");
        gameContainer.replaceChildren();


        let buttonO = document.createElement("button");
        buttonO.classList.add("buttonO");
        buttonO.textContent = "Play as O";
        buttonO.addEventListener("click", () => onPlayAs(1))

        let buttonX = document.createElement("button");
        buttonX.classList.add("buttonX");
        buttonX.textContent = "Play as X";
        buttonX.addEventListener("click", () => onPlayAs(2))

        gameContainer.appendChild(buttonO);
        gameContainer.appendChild(buttonX);
    };

    let resultClb;

    function onPlayAs(choice) {
        if (choice === 1) {
            resultClb(choice);
        }
        else if (choice === 2) {
            resultClb(choice);
        }
        else { console.log("sth wrong with starting game") }
    }

    return {
        choosePlayer: (clb) => {
            resultClb = clb;
            showChoiceDialog();
        }
    }
})();

const gameboard_module = (function () {
    let board = [];
    let player;

    function setPlayerPlaysAs(playerChoiceXOrO) {
        player = playerChoiceXOrO;
    }

    function showGameBoard(onRestart) {
        const gameContainer = document.getElementById("gameContainer");
        gameContainer.replaceChildren();
        let restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        restartButton.textContent = "Restart";
        restartButton.addEventListener("click", onRestart);
        gameContainer.appendChild(restartButton);

        let board_container = document.createElement("div");
        board_container.classList.add("board_container");
        gameContainer.appendChild(board_container);

        for (let i = 0; i < 9; i++) {
            let board_element = document.createElement("div");
            board_element.classList.add("board_element");
            board_element.dataset['index'] = i;
            board_element.innerText = board[i] || "";
            board_element.addEventListener("click", onBoardClick);
            console.log(board_element);
            board_container.appendChild(board_element);
        }
    }

    function onBoardClick(div) {
        // let clickedDIV = div.target.dataset['index'];
        // console.log(clickedDIV);
        let clickedDIV = div.target;

        const divText = clickedDIV.innerText || "";
        console.log(divText);

        if (divText) {
            alert("Choose an empty field!");
        } else {
            if (player === 1) {
                clickedDIV.innerText = "o";
            }
            else {
                clickedDIV.innerText = "x";
            }

        }


        // check who the player is, based on `player` and change board state
    };

    return {
        setPlayerPlaysAs,
        showGameBoard
    };
})();

(function () {
    function startNewGame() {
        startGame_module.choosePlayer((xoro) => {
            console.log(`Playing as ${xoro}`);
            gameboard_module.setPlayerPlaysAs(xoro);
            gameboard_module.showGameBoard(startNewGame);
            // start game as xoro based on xoro
        });
    }

    startNewGame();
})();

// onBoardClick dopisac funk

//wyeksportowac stale z modulu, zeby nie uzywac 1 i 2 jako o i x