
// 1 x 
// 0 o


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

        let divChoosePanel = document.createElement("div");
        divChoosePanel.classList.add("divChoosePanel");



        let information = document.createElement("p");
        information.innerText = "Choose O or X for the first player";
        information.classList.add("information");
        divChoosePanel.appendChild(information);


        let buttonO = document.createElement("button");
        buttonO.classList.add("buttonO");
        buttonO.textContent = "Play as O";
        buttonO.addEventListener("click", () => onPlayAs(0))

        let buttonX = document.createElement("button");
        buttonX.classList.add("buttonX");
        buttonX.textContent = "Play as X";
        buttonX.addEventListener("click", () => onPlayAs(1))

        divChoosePanel.appendChild(buttonO);
        divChoosePanel.appendChild(buttonX);
        gameContainer.appendChild(divChoosePanel);
    };

    let resultClb;
    // let gameContainer = document.getElementById("gameContainer");
    let whoPlays = document.createElement("div");
    whoPlays.classList.add("whoPlays");


    function onPlayAs(choice) {
        if (choice === 0) {
            resultClb(choice);
            let restartDIV = document.querySelector("div.restart");
            whoPlays.innerText = "Now plays O.";
            restartDIV.appendChild(whoPlays);
        }
        else if (choice === 1) {
            resultClb(choice);
            let restartDIV = document.querySelector("div.restart");
            whoPlays.innerText = "Now plays X.";
            restartDIV.appendChild(whoPlays);

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
    let board = [-10, -10, -10, -10, -10, -10, -10, -10, -10];
    let player;

    function setPlayerPlaysAs(playerChoiceXOrO) {
        player = playerChoiceXOrO;
    }

    function showGameBoard(onRestart) {
        board = [-10, -10, -10, -10, -10, -10, -10, -10, -10];
        const gameContainer = document.getElementById("gameContainer");
        gameContainer.replaceChildren();
        let divRestart = document.createElement("div");
        divRestart.classList.add("restart");
        let restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        restartButton.textContent = "Restart";
        restartButton.addEventListener("click", onRestart);
        divRestart.appendChild(restartButton);
        gameContainer.appendChild(divRestart);

        let board_container = document.createElement("div");
        board_container.classList.add("board_container");
        gameContainer.appendChild(board_container);

        for (let i = 0; i < 9; i++) {
            let board_element = document.createElement("div");
            board_element.classList.add("board_element");
            board_element.dataset['index'] = i;

            if (board[i] === -10) {
                board_element.innerText = "";
            } else {
                board_element.innerText = board[i];
            }

            board_element.addEventListener("click", onBoardClick);
            console.log(board_element);
            board_container.appendChild(board_element);
        }
    }

    function onBoardClick(div) {
        // let clickedDIV = div.target.dataset['index'];
        // console.log(clickedDIV);
        let clickedDIV = div.target;
        let gameContainer = document.getElementById("gameContainer");

        function checkIfSBwon() {
            console.log(board);

            if ((board[0] + board[1] + board[2] >= 0) ||
                (board[3] + board[4] + board[5] >= 0) ||
                (board[6] + board[7] + board[8] >= 0) ||
                (board[0] + board[3] + board[6] >= 0) ||
                (board[1] + board[4] + board[7] >= 0) ||
                (board[2] + board[5] + board[8] >= 0) ||
                (board[0] + board[4] + board[8] >= 0) ||
                (board[2] + board[4] + board[6] >= 0)) {
                if ((board[0] + board[1] + board[2] === 0) ||
                    (board[3] + board[4] + board[5] === 0) ||
                    (board[6] + board[7] + board[8] === 0) ||
                    (board[0] + board[3] + board[6] === 0) ||
                    (board[1] + board[4] + board[7] === 0) ||
                    (board[2] + board[5] + board[8] === 0) ||
                    (board[0] + board[4] + board[8] === 0) ||
                    (board[2] + board[4] + board[6] === 0)) {
                    let alertO = document.createElement("div");
                    alertO.classList.add("alert");
                    alertO.innerText = "O WON!";
                    gameContainer.appendChild(alertO);
                    return;
                } else if (
                    (board[0] + board[1] + board[2] === 3) ||
                    (board[3] + board[4] + board[5] === 3) ||
                    (board[6] + board[7] + board[8] === 3) ||
                    (board[0] + board[3] + board[6] === 3) ||
                    (board[1] + board[4] + board[7] === 3) ||
                    (board[2] + board[5] + board[8] === 3) ||
                    (board[0] + board[4] + board[8] === 3) ||
                    (board[2] + board[4] + board[6] === 3)) {
                    let alertX = document.createElement("div");
                    alertX.classList.add("alert");
                    alertX.innerText = "X WON!";
                    gameContainer.appendChild(alertX);
                    return;
                } else if (!(board.includes(-10))) {
                    let alertTIE = document.createElement("div");
                    alertTIE.classList.add("alert");
                    alertTIE.innerText = "IT'S A TIE!";
                    gameContainer.appendChild(alertTIE);
                } else {
                    return;
                }
            } else {
                return;
            }
        }



        const divText = clickedDIV.innerText || "";
        console.log(divText);

        if (divText) {
            alert("Choose an empty field!");
        } else {
            if (player === 0) {
                clickedDIV.innerText = "o";
                player = 1;
                document.querySelector("div.whoPlays").innerText = "Now plays X.";
                board[div.target.dataset['index']] = 0;
                console.log(board);
                checkIfSBwon();
            }
            else {
                clickedDIV.innerText = "x";
                player = 0;
                document.querySelector("div.whoPlays").innerText = "Now plays O.";
                board[div.target.dataset['index']] = 1;
                console.log(board);
                checkIfSBwon();
            }
        }


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