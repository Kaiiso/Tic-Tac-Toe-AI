let slot = ["", "", "", "", "", "", "", "", ""];

let filledSlot = 0;

let userSymbol = "x";
let aiSymbol = "o";

let win = false;

let img = {
    x   : [document.querySelector("#x1"), document.querySelector("#x2"), document.querySelector("#x3"), document.querySelector("#x4"), document.querySelector("#x5"), document.querySelector("#x6"), document.querySelector("#x7"), document.querySelector("#x8"), document.querySelector("#x9")],
    o   : [document.querySelector("#o1"), document.querySelector("#o2"), document.querySelector("#o3"), document.querySelector("#o4"), document.querySelector("#o5"), document.querySelector("#o6"), document.querySelector("#o7"), document.querySelector("#o8"), document.querySelector("#o9")],
    win : [document.querySelector("#topleft-bottomright"), document.querySelector("#topright-bottomleft"), document.querySelector("#vertical"), document.querySelector("#vertical-left"), document.querySelector("#vertical-right"), document.querySelector("#horizontal"), document.querySelector("#horizontal-top"), document.querySelector("#horizontal-bottom")]
}

function update() {

    winCondition();

    if (win === false) {
        ai();
    }

}

function ai() {

    if (filledSlot % 2 === 1) {

        let random = Math.floor((Math.random() * 9) + 1);

        if (aiSymbol === "x") {

            if (img.x[random - 1].style.display === "none" && img.o[random - 1].style.display === "none") {

                img.x[random - 1].style.display = "block";
                slot[random - 1] = "x";
                filledSlot++;

            }

        } else if (aiSymbol === "o") {

            if (img.o[random - 1].style.display === "none" && img.x[random - 1].style.display === "none") {

                img.o[random - 1].style.display = "block";
                slot[random - 1] = "o";
                filledSlot++;

            }

        }
        
    }

}

function winCondition() {

    if (slot[0] === "x" && slot[1] === "x" && slot[2] === "x") {
        img.win[6].style.display = "block";

    } else if (slot[3] === "x" && slot[4] === "x" && slot[5] === "x") {
        img.win[5].style.display = "block";
        win = true;
    } else if (slot[6] === "x" && slot[7] === "x" && slot[8] === "x") {
        img.win[7].style.display = "block";
        win = true;
    } else if (slot[0] === "x" && slot[3] === "x" && slot[6] === "x") {
        img.win[3].style.display = "block";
        win = true;
    } else if (slot[1] === "x" && slot[4] === "x" && slot[7] === "x") {
        img.win[2].style.display = "block";
        win = true;
    } else if (slot[2] === "x" && slot[5] === "x" && slot[8] === "x") {
        img.win[4].style.display = "block";
        win = true;
    } else if (slot[0] === "x" && slot[4] === "x" && slot[8] === "x") {
        img.win[0].style.display = "block";
        win = true;
    } else if (slot[2] === "x" && slot[4] === "x" && slot[6] === "x") {
        img.win[1].style.display = "block";
        win = true;
    }

    if (slot[0] === "o" && slot[1] === "o" && slot[2] === "o") {
        img.win[6].style.display = "block";
        win = true;
    } else if (slot[3] === "o" && slot[4] === "o" && slot[5] === "o") {
        img.win[5].style.display = "block";
        win = true;
    } else if (slot[6] === "o" && slot[7] === "o" && slot[8] === "o") {
        img.win[7].style.display = "block";
        win = true;
    } else if (slot[0] === "o" && slot[3] === "o" && slot[6] === "o") {
        img.win[3].style.display = "block";
        win = true;
    } else if (slot[1] === "o" && slot[4] === "o" && slot[7] === "o") {
        img.win[2].style.display = "block";
        win = true;
    } else if (slot[2] === "o" && slot[5] === "o" && slot[8] === "o") {
        img.win[4].style.display = "block";
        win = true;
    } else if (slot[0] === "o" && slot[4] === "o" && slot[8] === "o") {
        img.win[0].style.display = "block";
        win = true;
    } else if (slot[2] === "o" && slot[4] === "o" && slot[6] === "o") {
        img.win[1].style.display = "block";
        win = true;
    }

}

function buttonOne() {

    if (filledSlot % 2 === 0) {
        if (slot[0] === "") {
            if (userSymbol === "x") {
                img.x[0].style.display = "block";
                slot[0] = "x";
                filledSlot++;
            } else if (userSymbol === "o") {
                img.o[0].style.display = "block";
                slot[0] = "o";
                filledSlot++
            }
        }
    }

}

function buttonTwo() {
    
    if (filledSlot % 2 === 0) {
        if (slot[1] === "") {
            if (userSymbol === "x") {
                img.x[1].style.display = "block";
                slot[1] = "x";
                filledSlot++
            } else if (userSymbol === "o") {
                img.o[1].style.display = "block";
                slot[1] = "o";
                filledSlot++
            }
        }
    }

}

function buttonThree() {
    
    if (filledSlot % 2 === 0) {
        if (slot[2] === "") {
            if (userSymbol === "x") {
                img.x[2].style.display = "block";
                slot[2] = "x";
                filledSlot++
            } else if (userSymbol === "o") {
                img.o[2].style.display = "block";
                slot[2] = "o";
                filledSlot++
            }
        }
    }

}

function buttonFour() {
    
    if (filledSlot % 2 === 0) {
        if (slot[3] === "") {
            if (userSymbol === "x") {
                img.x[3].style.display = "block";
                slot[3] = "x";
                filledSlot++
            } else if (userSymbol === "o") {
                img.o[3].style.display = "block";
                slot[3] = "o";
                filledSlot++
            }
        }
    }

}

function buttonFive() {
    
    if (filledSlot % 2 === 0) {
        if (slot[4] === "") {
            if (userSymbol === "x") {
                img.x[4].style.display = "block";
                slot[4] = "x";
                filledSlot++
            } else if (userSymbol === "o") {
                img.o[4].style.display = "block";
                slot[4] = "o";
                filledSlot++
            }
        }
    }

}

function buttonSix() {
    
    if (filledSlot % 2 === 0) {
        if (slot[5] === "") {
            if (userSymbol === "x") {
                img.x[5].style.display = "block";
                slot[5] = "x";
                filledSlot++
            } else if (userSymbol === "o") {
                img.o[5].style.display = "block";
                slot[5] = "o";
                filledSlot++
            }
        }
    }

}

function buttonSeven() {

    if (filledSlot % 2 === 0) {
        if (slot[6] === "") {
            if (userSymbol === "x") {
                img.x[6].style.display = "block";
                slot[6] = "x";
                filledSlot++
            } else if (userSymbol === "o") {
                img.o[6].style.display = "block";
                slot[6] = "o";
                filledSlot++
            }
        }
    }

}

function buttonEight() {
    
    if (filledSlot % 2 === 0) {
        if (slot[7] === "") {
            if (userSymbol === "x") {
                img.x[7].style.display = "block";
                slot[7] = "x";
                filledSlot++
            } else if (userSymbol === "o") {
                img.o[7].style.display = "block";
                slot[7] = "o";
                filledSlot++
            }
        }
    }

}

function buttonNine() {
    
    if (filledSlot % 2 === 0) {
        if (slot[8] === "") {
            if (userSymbol === "x") {
                img.x[8].style.display = "block";
                slot[8] = "x";
                filledSlot++
            } else if (userSymbol === "o") {
                img.o[8].style.display = "block";
                slot[8] = "o";
                filledSlot++
            }
        }
    }

}

window.setInterval(update, 300);