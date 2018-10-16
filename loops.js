
// Grant Health
let gHealth = 10; 
let gLives = 3;
// User Health
let uHealth = 40;
// User Wins Tally
let uWins = 0;
let game = prompt(`Would you like to play?`);
if (game === 'yes') {
    let uName = prompt(`What's your name?`);
    while (uName) {
        uHealth -= Math.floor(Math.random()*2) + 1;
        gHealth -= Math.floor(Math.random()*2) + 1;
        if (gHealth <= 0) {
           uWins++;
           gLives--;
           if (uWins === 3) {
                console.log(`${uName} wins!`);
                break;
           } else {
            gHealth = 10;
           }
        } else {
            if (uHealth <= 0) {
                console.log(`Grant wins!`);
                break;
            }
        }
    }
} else {
    console.log(`Yeah, fun is no fun.`);
}