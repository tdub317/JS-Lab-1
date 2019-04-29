"use strict";
let userHealth = 40;
let bossHealth = 10;
let userWins = 0;
let bossWins = 0;
let userDmg = 0;
let bossDmg = 0;
let play = prompt("Do you want to play?");

if (play.toUpperCase() === "YES") {
    let userName = prompt("Please name your character");
    while (userWins <= 3 && bossWins <= 1) {
        userDmg = Math.floor(Math.random() * 2) + 1;
        bossDmg = Math.floor(Math.random() * 2) + 1;
        if (bossHealth <= 0) {
            userWins++;
            bossHealth = 10;
            console.log(`WIN COUNTER: ${userWins}`);
        } else if (userHealth <= 0) {
            console.log(`${userName.toUpperCase()} HAS BEEN DEFEATED. GRANT WINS! GAME OVER.`);
            break;
        } else if (userWins === 3) {
            console.log(`${userName.toUpperCase()} WINS! GAME OVER.`);
            break;
        } else {
            console.log(`${userName} has ${userHealth = userHealth - userDmg} health left.`);
            console.log(`Grant has ${bossHealth = bossHealth - bossDmg} health left.`);
        }
    }
}

// if (play.toUpperCase() === "YES") {
//     let userName = prompt("Please name your character");
//     while (userHealth >= 0 && bossHealth >= 0) {
//         userDmg = Math.floor(Math.random() * 2) + 1;
//         bossDmg = Math.floor(Math.random() * 2) + 1;
//         console.log(`${userName} has ${userHealth = userHealth - userDmg} health left.`);
//         console.log(`Grant has ${bossHealth = bossHealth - bossDmg} health left.`);
//         if (bossHealth <= 0) {
//             wins++;
//             bossHealth = 10;
//             console.log(`win counter: ${wins}`);
//         } else if (userHealth <= 0) {
//             console.log(`${userName} has been defeated. Grant the Boss wins! Game Over.`);
//             break;
//         } else if (wins = 3) {
//             console.log(`${userName} wins! Game Over.`);
//             break;
//         } else {
//             continue;
//         }
//     }
// } 