// Variable
let amount = 0;

// Functions
function getChange() {
    do {
        amount = prompt("What's the total change?");
    } while (amount <= 0 || isNaN(amount));
}

function change(total) {
    // Round up the total amount to prevent error
    total = Math.round(amount * 100);
    // Create and count all the coins
    let quarters = Math.floor(total / 25);
    let dimes = Math.floor((total % 25) / 10);
    let nickles = Math.floor(((total % 25) % 10) / 5);
    let pennies = Math.floor(((total % 25) % 10) % 5);
    // Return answer
    return console.log(`Calculating change...

  •  0.25¢: ${quarters}
  •  0.10¢: ${dimes}
  •  0.05¢: ${nickles}
  •  0.01¢: ${pennies}
=========================
Total coins: ${quarters + dimes + nickles + pennies}`)
}

// Run it all
getChange();
change(amount);