"use strict";

let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let play = true;
let hit = 0;

// START GAME
function startGame() {
    let permission = prompt("Do you want to play the game?");
    if (permission === "yes") {
        let name = prompt("Enter your name.");
        return startCombat(play, name);
    } else {
        return alert(`Ok, we will play later.`);
    }
 
};
startGame();

function startCombat(play, name) {
    while (play) {
        let attack = prompt(`would you like to attack? or quit`);
        if (attack === `attack`) {
            grantHealth -= getDamage();
            userHealth -= getDamage();
            console.log(`${name} was attacked. ${name} has ${userHealth} health left.`);
            console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
            return healthCheck();
        
        } else {
            return play = false;
            
        }
    }
};

function healthCheck () {
    if (grantHealth <= 0) {
      userWins++;
      grantHealth = 10;
      if (userWins === 3) {
        console.log(`${name} is victorious!`);
        break;
      } else {
        console.log(`${name} has beaten Grant. ${name} must win ${3 - userWins} more time(s).`);
        return startCombat();
      }
    } 
    if (userHealth <= 0) {
      console.log("Grant beat you. Sucks to suck.");
      return play = fasle;
    }  
};

// GET DAMAGE #
function getDamage() {
    return Math.floor(Math.random() * 5) +1;
    
};


S// intial startcombat function (has illegal break statement)
// function startCombat(play, name) {
//     while (play) {
//         let attack = prompt(`Would you like to attack or quit?`);
//         if (attack === `attack`) {
//             grantHealth -= getDamage();
//             userHealth -= getDamage();
//             console.log(`${name} was attacked. ${name} has ${userHealth} health left.`);
//             console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
//             return healthCheck();
//         } else {
//             return play = false;
//         }
        
//     }      
// }  


// while (play) {
//     userHealth -= Math.floor(Math.random() * 2) + 1;
//     grantHealth -= Math.floor(Math.random() * 2) + 1;
//     console.log(`${name} was attacked. ${name} has ${userHealth} health left.`);
//     console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
//     if (grantHealth <= 0) {
//       userWins++;
//       grantHealth = 10;
//       if (userWins === 3) {
//         console.log(`${name} is victorious!`);
//         break;
//       } else {
//         console.log(`${name} has beaten Grant. ${name} must win ${3 - userWins} more time(s).`);
//       }
//     } 
//     if (userHealth <= 0) {
//       console.log("Grant beat you. Sucks to suck.");
//       break;
//       }
//     }
// } else {
//   console.log("Ok, we will play later.");
// }


// YESTERDAYS LAB11111111111111111111111111111111111111111111111111111111111
// let play = prompt("Do you want to play the game?");
// if (play === "yes") {
//   let name = prompt("Enter your name.");
//   let userHealth = 40;
//   let grantHealth = 10;
//   let userWins = 0;
//   while (play) {
//     userHealth -= Math.floor(Math.random() * 2) + 1;
//     grantHealth -= Math.floor(Math.random() * 2) + 1;
//     console.log(`${name} was attacked. ${name} has ${userHealth} health left.`);
//     console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
//     if (grantHealth <= 0) {
//       userWins++;
//       grantHealth = 10;
//       if (userWins === 3) {
//         console.log(`${name} is victorious!`);
//         break;
//       } else {
//         console.log(`${name} has beaten Grant. ${name} must win ${3 - userWins} more time(s).`);
//       }
//     } 
//     if (userHealth <= 0) {
//       console.log("Grant beat you. Sucks to suck.");
//       break;
//       }
//     }
// } else {
//   console.log("Ok, we will play later.");
// }

// YESTERDAYS LAB 11111111111111111111111111111111111111111111111


// function playAgain() {
//     let again = prompt(`Wanna attack again?`);
//     if (again === `yes`) {
//         return play;
//     } else {
//         return play = false;
//     }
// }








// START GAME
// function startGame() {
//     let permission = prompt("Do you want to play the game?");
//     if (permission === "yes") {
//         let name = prompt("Enter your name.");
//         return startCombat(play, name);
//     } else {
//         return alert(`Ok, we will play later.`);
//     }
 
// };
// startGame();











// let play = prompt("Do you want to play the game?");
// if (play === "yes") {
//   let name = prompt("Enter your name.");
//   let userHealth = 40;
//   let grantHealth = 10;
//   let userWins = 0;
//   while (play) {
//     userHealth -= Math.floor(Math.random() * 2) + 1;
//     grantHealth -= Math.floor(Math.random() * 2) + 1;
//     console.log(`${name} was attacked. ${name} has ${userHealth} health left.`);
//     console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
//     if (grantHealth <= 0) {
//       userWins++;
//       grantHealth = 10;
//       if (userWins === 3) {
//         console.log(`${name} is victorious!`);
//         break;
//       } else {
//         console.log(`${name} has beaten Grant. ${name} must win ${3 - userWins} more time(s).`);
//       }
//     } 
//     if (userHealth <= 0) {
//       console.log("Grant beat you. Sucks to suck.");
//       break;
//     }
//   }
// } else {
//   console.log("Ok, we will play later.");
// }





// fucntion startGame() {
//     let permission = prompt(`Would you like to play?`);
//     if (permission === 'yes') {
//         let name = prompt(`Enter your name:`);
//         let userHealth = 40;
//         let grantHealth = 10;
//         let userWins = 0;
//     } else {
//         return console.log(`Maybe next time.`)
//     }
// }