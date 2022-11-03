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

        let buttonO = document.createElement("button");
        buttonO.classList.add(buttonO);
        buttonO.textContent = "O";
        buttonO.addEventListener("click", () => onPlayAs(1))

        let buttonX = document.createElement("button");
        buttonX.classList.add(buttonX);
        buttonO.textContent = "X";
        buttonO.addEventListener("click", () => onPlayAs(2))

        gameContainer.replaceChildren();
        replaceChildren.appendChild(buttonO);
        replaceChildren.appendChild(buttonX);
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

    function showGameBoard() {
        for (let i = 0; i < 9; i++) {
            let container = document.getElementById("board_container");
            let board_element = document.createElement("div");
            board_element.classList.add("board_element");
            board_element.classList.add("board_element");
            board_element.dataset['index'] = i;
            board_element.innerText = board[i];
            board_element.addEventListener("click", onBoardClick);
            container.appendChild(board_element);
        }
    }

    function onBoardClick() {
        // check who the player is, based on `player` and change board state
    };

    return {
        setPlayerPlaysAs,
        showGameBoard
    };
})();

(function () {
    startGame_module.choosePlayer((xoro) => {
        console.log(`Playing as ${xoro}`);
        gameboard_module.setPlayerPlaysAs(xoro);
        gameboard_module.showGameBoard();
        // start game as xoro based on xoro
    });
})();

// onBoardClick dopisac funk