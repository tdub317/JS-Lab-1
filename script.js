"use strict";
let userHealth = 40;
let bossHealth = 10;
let userWins = 0;
let bossWins = 0;
let userDmg = 0;
let bossDmg = 0;
let play = prompt("Do you want to play a game?");

if (play.toUpperCase() === "YES") {
    let userName = prompt("Please name your character");
    while (userWins <= 3 && bossWins <= 1) {
        userDmg = Math.floor(Math.random() * 2) + 1;
        bossDmg = Math.floor(Math.random() * 2) + 1;
        if (bossHealth <= 0) {
            userWins++;
            bossHealth = 10;
            // console.log(`WIN COUNTER: ${userWins}`);
        } else if (userHealth <= 0) {
            console.log(`${userName} HAS BEEN DEFEATED. GRANT WINS! GAME OVER.`);
            break;
        } else if (userWins === 3) {
            console.log(`${userName} WINS! GAME OVER.`);
            break;
        } else {
            console.log(`${userName} has ${userHealth = userHealth - userDmg} health left.`);
            console.log(`The Almighty Grant has ${bossHealth = bossHealth - bossDmg} health left.`);
        }
    }
}



// What if we use userHealth for while condition
// The defeat conditional won't work because the while loop won't run when userHealth is less than or equal to 0
// If I set the while condition to userHealth less than or equal to 40, it'll run fine
// If the userHealth is greater than 40, then the while loop won't run
// Using userWin <= 3 may be better for the solution

// if (play.toUpperCase() === "YES") {
//     let userName = prompt("Please name your character");
//     while (userHealth <= 40) {
//         userDmg = Math.floor(Math.random() * 2) + 1;
//         bossDmg = Math.floor(Math.random() * 2) + 1;
//         if (bossHealth <= 0) {
//             userWins++;
//             bossHealth = 10;
//             // console.log(`WIN COUNTER: ${userWins}`);
//         } else if (userHealth <= 0) {
//             console.log(`${userName} HAS BEEN DEFEATED. GRANT WINS! GAME OVER.`);
//             break;
//         } else if (userWins === 3) {
//             console.log(`${userName} WINS! GAME OVER.`);
//             break;
//         } else {
//             console.log(`${userName} has ${userHealth = userHealth - userDmg} health left.`);
//             console.log(`The Almighty Grant has ${bossHealth = bossHealth - bossDmg} health left.`);
//         }
//     }
// }