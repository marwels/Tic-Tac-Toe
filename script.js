// 0 empty cell 
// 1 x 
// 2 o


const gameboard_module = (function () {
    let board = [];
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
    return board;
})();



// onBoardClick dopisac funk