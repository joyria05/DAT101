"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let textPartLine1 ="";
let textPartLine2 ="";
for(let i = 1, j = 10; i <= 10; i ++, j--) {
    textPartLine1 += " " + i;
    textPartLine2 += " " + j;
}
printOut(textPartLine1);
printOut(textPartLine2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part2GuessNumber = 45;
let part2Random = Math.floor(Math.random() * 60) +1;
while( part2Random !== part2GuessNumber ){
    part2Random = Math.floor(Math.random () * 60) +1;
}


printOut("Yes! you guessed correct:" +part2Random);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

 const part3Time = Date.now();
 const part3GuessNumber= 654321;
 let part3Random;
 let part3Count= 0;
 do{
    part3Random = Math.floor(Math.random() * 1000000) +1;
    part3Count++; //betyr det samme som part3Count++
} while (part3Random !== part3GuessNumber);
    
    
printOut("number of guesses:" + part3Count);
const part3DeltaTime = Date.now() - part3Time;
printOut("number of mSec: " + part3DeltaTime);


printOut("Replace this with you answer!");
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let textPart4Primes ="";
for (let i  = 2; i < 200; i ++){
let j= i-1;
let isPrime= true; 
while (j > 1 && isPrime){


   let rest = i % j;
    
    isPrime =  rest !=0;
    j--;
}
     if(isPrime){
    textPart4Primes += " " + i;
    }
}

printOut(textPart4Primes);
printOut(newLine);


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

    // ("K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1");
//" K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1 "




   let textPart5 ="";
   for (let row = 1; row <= 7; row++) {
    let line= "";
    for(let col = 1; col <= 9; col++){
        line += "K" + col + "R" + row + " ";
    }
    textPart5 += line + newLine;
   } 

printOut(textPart5);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function generateGrade() {
    return Math.floor( Math.random() * 236) + 1; 
}

function convertToLetterGrade(score) {
    let prosent = (score / 236) * 100;

    if (prosent >= 89) return "A";
    else if (prosent >= 77) return "B";
    else if (prosent >= 65) return "C";
    else if (prosent >= 53) return "D";
    else if (prosent >= 41) return "E";
    else return "F";
} 

 const students = 5;
 let grades= [];

 for (let i  = 0; i < students; i ++) {

    let studentScore =generateGrade();
grades.push(studentScore);


let letter = convertToLetterGrade(studentScore);

printOut("Poeng: " + studentScore + ", Karakter: " + letter);
   
}

grades.sort(function(a,b){
    return b-a;

});

printOut("Grades sorted descending:");
for (let i = 0; i < grades.length; i++) {

   let prosent=(grades[i] / 236) * 100;

    printOut("Grade #"+ (i + 1) + ": "+ prosent.toFixed(2) + "%");

}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/*Part 7 Dice Rolling Extravaganza (20 points)
Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/

let gotStraight = false;
let gotThreePairs = false;
let gotTower = false;
let gotYahtzee = false;

let throws =0;

function countDice(dice) {
    let counts =[0,0,0,0,0,0];
    
    for (let i =0; i < dice.length; i++){
        counts[dice[i] - 1]++;
    }
    return counts;

}
while (!gotStraight || !gotThreePairs || !gotTower || !gotYahtzee){
    throws++;

    let dice =[];
    for (let i = 0; i < 6; i++){
        dice.push(Math.ceil(Math.random()* 6));
    }
    let counts = countDice(dice);

    // straight

if (!gotStraight) {
    let isStraight = true;
    for (let i = 0; i < counts.length; i++){
        if(counts[i] !== 1){
            isStraight= false;
        }
    }

    if (isStraight) {
        gotStraight= true;
        printOut("Full Straight: " + dice.join(","));
    }
}
if (!gotYahtzee){ // Yahtzee
    for (let i = 0; i < counts.length; i++){
        if (counts[i]===6){
            gotYahtzee= true;
            printOut(" Yahtzee  "+ dice.join(","));
        }
    }  
}

    if (!gotTower){             // Tower

        
        let foundFour= false;
        let foundTwo= false;
        for(let i = 0; i < counts.length; i++){
            if (counts[i]===4) foundFour= true;
            if(counts[i]===2) foundTwo= true;
        }
        if ( foundFour && foundTwo){
            gotTower= true;
            printOut(" Tower (4+2): " + dice.join(","));
        }

    }

    if( !gotThreePairs){  //three pairs
        let pairs= 0;

        for (let i = 0; i < counts.length; i++){
            if(counts [i]=== 2){
                pairs++;
            }
        }

        
        if (pairs===3){
            gotThreePairs= true;
            printOut("Three Pairs:" + dice.join(","));
        }
    

    }

}

printOut("Total throws: " + throws);
printOut(newLine);

