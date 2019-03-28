// Variables
let inputNumber = 0;
let block = "#";
let space = " ";

// Functions
function getInput() {
    do {
        inputNumber = prompt("How tall your pyramid should be?");
    } while (inputNumber < 1 || inputNumber > 8 || isNaN(inputNumber));    
}

function printInput(input) {
    console.log(`Your choice is ${input}`);
}


function printIt(element, times) {
    console.log(`${space.repeat(inputNumber-times)}${element.repeat(times)}  ${element.repeat(times)}`);
}

function createBlocks(lines) {
    for (var i = 1; i <= lines; i++) {
        printIt(block, i);
    }
}

// App
getInput();
printInput(inputNumber);
createBlocks(inputNumber);