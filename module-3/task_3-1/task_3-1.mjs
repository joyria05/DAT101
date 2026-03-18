"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");

let wakeUpTime = 2;
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
}
else if (wakeUpTime === 8){
  printOut("I can take the train to school.");
}
else {
  printOut("I have to take the car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number =-5;
if (number > 0){
  printOut("Positive");
}
else if (number < 0){
  printOut("Negative");
}
else {
  printOut("Zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imageSize + "MP");

if (imageSize>= 4) {
  printOut("Thank you");

}
else{
  printOut("The image is too small");
}



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (imageSize >= 6){
  printOut("Image is too big");
}
else if(imageSize >= 4){
  printOut("Thank you");
}
else{
  printOut("The image is too small");
}


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const MonthList =["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = MonthList.length;
const MonthName = MonthList[Math.floor(Math.random()* noOfMonth)];
// List[Math.floor(Math.random() * noOfMonth)];

printOut("Month: " + MonthName);
  if (MonthName.includes("r")) {
    printOut("You must take vitamin D");
    }
    


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let Days;
if (
MonthName==="January" ||
MonthName===" March" ||
MonthName==="May" ||
MonthName==="July" ||
MonthName==="August" ||
MonthName==="October"||
MonthName==="December"
){
  Days = 31;
}
else if (
  MonthName ==="April" 
  MonthName ==="June" ||
  MonthName ==="September" ||
  MonthName ==="November"
){
  Days = 30;
}
else if (MonthName ==="February"){
  Days = 28;
}

printOut(" Days in the Month: " + Days);


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (MonthName ==="March" || MonthName==="May"){
  printOut("The gallery is closed");{

  }
  else if ( MonthName ==="April"){
    printOut("The gallery is open in a temporary building");


  }
  else{
    printOut("The gallery is open");
  }

printOut(newLine);
