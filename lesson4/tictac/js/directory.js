// Clear X/O arrays
const playsx = [, , , , , , , , ]
const playso = [, , , , , , , , ]
turn = 0

// Reset Button
const resetbutton = document.getElementById("resetbutton");
resetbutton.addEventListener("click", listfunction);

// Play Button
const gridbutton = document.getElementById("gridbutton");
gridbutton.addEventListener("click", getboard);


function getboard() {
    const playsx = [, , , , , , , , ]
    const playso = [, , , , , , , , ]
    const winningpatterns = [ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,4,7],
        [3,5,8],
        [0,4,8],
        [2,4,6]
    ] 

    turn = 0
    document.querySelector(".cards").innerHTML = "";
    // const requestURL = "https://nclhowell.github.io/wdd230/chamber/data/tictac.json";
    const requestURL = "./data/tictac.json";
    const cards = document.querySelector('.cards');
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            // temporary checking for valid response and data parsing
            console.log(jsonObject);
            const tictac = jsonObject['tictac'];
            tictac.forEach(displayBoard);
        });

    function displayBoard(tictac) {
        // Create elements to add to the document
        let card = document.createElement('section');
        let boardcell = document.createElement('div');
        // Draw board squares
        boardcell.innerHTML = `${tictac.cell}`;
        boardcell.style.border = "thick";
        boardcell.style.borderStyle = "double";
        boardcell.style.borderColor = "red";

        boardcell.addEventListener("click", getplay);

        function getplay() {

            if (Number.isInteger(playsx[`${tictac.position}`]) || Number.isInteger(playso[`${tictac.position}`])) {
                return
            }

            if (turn == 0) {
                boardcell.innerHTML = tictac.cellx;
                playsx[`${tictac.position}`] = turn;
                turn = 1;

            } else if (turn == 1) {
                boardcell.innerHTML = tictac.cello;
                playso[`${tictac.position}`] = turn;
                turn = 0;
            }
            console.log(`${tictac.position}`);
            // playsx[`${tictac.position}`] = turn;
            console.log(`${playsx}`);
            console.log(`${playso}`);

            if (playsx(0,2) == 0,0,0) 
            /* || playsx[3, 4, 5] == 0  || playsx[6, 7, 8] == 0 ||
                playsx[0, 4, 8] == 0 || playsx[3, 4, 6] == 0 || playsx[0, 3, 6] == 0 ||
                playsx[1, 4, 7] == 0 || playsx[2, 5, 8] == 0) {
                console.log("X Wins!");
            } 
            else if (playso[0, 1, 2] == 1 || playso[3, 4, 5] == 1 || playso[6, 7, 8] == 1 ||
                playso[0, 4, 8] == 1,1,1 || playso[3, 4, 6] == 1 || playso[0, 3, 6] == 1 ||
                playso[1, 4, 7] == 1 || playso[2, 5, 8] == 1) {
                console.log("Y Wins!");
            }
            // switch (playsx[0,1,2,3]) {
            //  case 0: 
            //     console.log("Game Over!!");
            //    break;
            // && playsx[1] && playsx[2]:
           }*/
                {console.log("Y Wins!");}


        // Render board

        switch (tictac.position) {
            case "0":
                boardcell.style.borderTopColor = "white";
                boardcell.style.borderLeftColor = "white";
                // boardcell.innerHTML = tictac.cell;
                break;
            case "1":
                boardcell.style.borderTopColor = "white";
                break;
            case "2":
                boardcell.style.borderTopColor = "white";
                boardcell.style.borderRightColor = "white";
                break;
            case "3":
                boardcell.style.borderLeftColor = "white";
                break;
            case "4":
                break;
            case "5":
                boardcell.style.borderRightColor = "white";
                break;
            case "6":
                boardcell.style.borderLeftColor = "white";
                boardcell.style.borderBottomColor = "white";
                break;
            case "7":
                boardcell.style.borderBottomColor = "white";
                break;
            case "8":
                boardcell.style.borderRightColor = "white";
                boardcell.style.borderBottomColor = "white";
                break;
        }

        card.appendChild(boardcell);
        cards.appendChild(card);
    }
    return null;
}

// Display the List
function listfunction() {
    document.getElementById("viewtag").innerHTML = "";
    const requestURL = "https://nclhowell.github.io/wdd230/chamber/data/tictac.json";
    const cards = document.querySelector('.cards');
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            // temporary checking for valid response and data parsing
            console.log(jsonObject);
            const tictac = jsonObject['tictac'];
            tictac.forEach(displayBoard);
        });

    function displayBoard(tictac) {}
    return null;
}