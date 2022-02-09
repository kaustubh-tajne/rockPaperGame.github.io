console.log(132);

class Game {
    selectMove() {
        let result = document.getElementById("rockF");
        result.style.zIndex = "10";
    }
}

let rock = document.getElementById("rock");
rock.addEventListener("click", rockPut);
function rockPut() {
    let result = document.getElementById("rockF");
    let r1 = document.getElementById("paperF");
    let r2 = document.getElementById("scissorF");

    r1.style.zIndex = "-1";
    r2.style.zIndex = "-2";
    result.style.zIndex = "11";
}


let paper = document.getElementById("paper");
paper.addEventListener("click", paperPut);
function paperPut() {
    let result = document.getElementById("paperF");

    let r1 = document.getElementById("rockF");
    let r2 = document.getElementById("scissorF");
    r1.style.zIndex = "-1";
    r2.style.zIndex = "-2";

    result.style.zIndex = "11";
}

let scissor = document.getElementById("scissor");
scissor.addEventListener("click", scissorPut);
function scissorPut() {
    let result = document.getElementById("scissorF");

    let r1 = document.getElementById("rockF");
    let r2 = document.getElementById("paperF");

    // r1.style.zIndex = "-1";
    // r2.style.zIndex = "-2";


    // result.style.zIndex = "11";

    // r1.setAttribute("zIndex","-1");
    // r2.setAttribute("zIndex","-2");
    // result.setAttribute("zIndex","11");
    r1.setAttribute("style", "z-index:-1;");
    r2.setAttribute("style", "z-index:-2;");
    result.setAttribute("style", "z-index:11;");
}

// submit btn
showList();

let startGame = document.getElementById("startGame");

startGame.addEventListener("click", gameStart);
let count = 0;
function gameStart() {
    let rockF = document.getElementById("rockF");
    let paperF = document.getElementById("paperF");
    let scissorF = document.getElementById("scissorF");

    let rock = rockF.getAttribute("style");
    let paper = paperF.getAttribute("style");
    let scissor = scissorF.getAttribute("style");

    let randomNumber = Math.ceil(Math.random() * 3);
    console.log(randomNumber);

    let result1 = document.getElementById("result1");
    if (randomNumber == 1) {
        let r = document.getElementById("rockF1");
        let p = document.getElementById("paperF1");
        let s = document.getElementById("scissorF1");

        r.setAttribute("style", "z-index:11;");
        p.setAttribute("style", "z-index:-1;");
        s.setAttribute("style", "z-index:-2;");
    }
    else if (randomNumber == 2) {
        let r = document.getElementById("rockF1");
        let p = document.getElementById("paperF1");
        let s = document.getElementById("scissorF1");

        r.setAttribute("style", "z-index:-1;");
        p.setAttribute("style", "z-index:11;");
        s.setAttribute("style", "z-index:-2;");
    }
    else if (randomNumber == 3) {
        let r = document.getElementById("rockF1");
        let p = document.getElementById("paperF1");
        let s = document.getElementById("scissorF1");

        r.setAttribute("style", "z-index:-1;");
        p.setAttribute("style", "z-index:-2;");
        s.setAttribute("style", "z-index:11;");
    }

    let whoWin = document.getElementById("whoWin");
    if (rock.includes("11")) {
        if (randomNumber == 1) {
            whoWin.innerText = "Match draw";
            console.log("Match draw");
        }
        else if (randomNumber == 2) {
            whoWin.innerText = "Computer Wins";
            console.log("Computer Wins");
        }
        else if (randomNumber == 3) {
            whoWin.innerText = "You Win";
            console.log("You Win");
            count = count + 1;
        }
    }
    else if (paper.includes("11")) {
        if (randomNumber == 1) {
            whoWin.innerText = "You Win";
            console.log("You Win");
            count = count + 1;
        }
        else if (randomNumber == 2) {
            whoWin.innerText = "Match draw";
            console.log("Match draw");
        }
        else if (randomNumber == 3) {
            whoWin.innerText = "Computer Wins";
            console.log("Computer Wins");
        }
    }
    else if (scissor.includes("11")) {
        if (randomNumber == 1) {
            whoWin.innerText = "Computer Wins";
            console.log("Computer Wins");
        }
        else if (randomNumber == 2) {
            whoWin.innerText = "You Win";
            count = count + 1;
            console.log("You Win");
        }
        else if (randomNumber == 3) {
            whoWin.innerText = "Match draw";
            console.log("Match draw");
        }
    }
    showList(count);
}

function showList(count) {
    let winnerList = document.getElementById("winnerOfGame");
    let nameOfPlayer = document.getElementById("playerName");

    let uiString = "";
    uiString += `<li>${nameOfPlayer.value}<span>${count}</span></li>`;

    winnerList.innerHTML = uiString;
}
