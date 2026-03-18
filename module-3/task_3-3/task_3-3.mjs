"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part1PrintDate() {
    const today =  new Date ();
    const options ={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const norwegianDate = today.toLocaleDateString('no-NB',options);
    
    printOut(norwegianDate);

}

Part1PrintDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function Part2GetTodayDate (){
    const today= new Date();
    const options= { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString('no-NB', options);
    printOut(`<h5>Today's Date: ${norwegianDate}</h5>`);
    return today;

}

function Part2DaysUntil2XKO(aTodayDate){
    const releaseDate = new Date('2026-11-15');
    const timeDiff = releaseDate - aTodayDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    printOut(`<h3>Days until 2XKO release: ${daysDiff} days</h3><p>Get ready for an epic gaming experience!</p>`);
    
    
}

const todayDate = Part2GetTodayDate();
    Part2DaysUntil2XKO(todayDate);




printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function Part3CalculateCircle(aRadius){
    const diameter = 2 * aRadius;
    const circumference= 2 * Math.PI * aRadius;
    const area = Math.PI * aRadius * aRadius;
    printOut(``For a circle with radius ${aRadius}`);
    printOut(` 
    <u1>
    <1i> Diameter: ${diameter.toFixed(2)}</1i>
    <1i> circumference: ${circumference.toFixed(2)}</1i>
    <1i>Area: ${area.toFixed(2)}</1i>

    </u1>
    
    `);

  }
  Part3CalculateCircle(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function Part4CalculateRectangle(aRectangle){
        const circumference = 2* (aRectangel.width + aRectangle.height);
        const area = aRectangle.width * aRectangle.height;
        printOut(`For a rectangle with width ${aRectangle.width} and height ${aRectangle.height}:`);
        printOut(`
        <u1>
            <1i>Circumference: ${circumference.toFixed(2)}</1i>
            <1i>Area: ${area.toFixed(2)}</1i>
        </u1>
        
        
     `);


}



Part4CalculateRectangle({width: 4, height: 7 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ETempratureType={'
    
    
Kelvin: 1,
celsius: 2,
Fahrenheit: 3,

}



function part5ConvertTemp(aTemp,aTempType){
  let kelvin=0 ,celsius=0, Fahrenheit=0;
  let tempTypeName="";

   switch(aTempType) {
case EtempratureType.kelvin:
    kelvin=aTemp;
    celsius=kelvin-273.15;
    Fahrenheit= (kelvin-273.15)* 9/5 + 32;
    tempTypeName="Kelvin";
    break;
    case ETempratureType.Celsius:
    celsius= aTemp;
    kelvin= celsius + 273.15;
    fahrenheit= (celsius * 9/5) + 32;
    tempTypeName= "Celsius";
    break;

    case ETempType.Fahrenheit:
        fahrenheit= aTemp;
        celsius= (fahrenheit -32)* 5/9;
    kelvn= celsius + 273.15;
    tempTypeName="Fahrenheit";
    break;
   }

   printOut(`Convert from ${aTemp} ${tempTypeName}:`);
   printOut(`&nbsp;Kelvin: ${Math.round(kelvin)}`);
   printOut(`&nbsp;Celsius: ${celsius.toFixed(0)}`);
   printOut(`&nbsp;Fahrenheit: ${fahrenheit.toFixed(0)}`);
   printOut("");
}
part5ConvertTemp(300,ETempType.kelvin);
part5ConvertTemp(26.85, ETempType.Celsius);
part5ConvertTemp(80.33,ETempType.Fahrenheit);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// furmula:Formula: net = (100 * gross) / (vat + 100)//
function Part6Calculate(aGrosssAmount, aTaxGroup){
    let aTaxGroup=aTaxGroup.toLowerCase();
    let taxRate=0;


    
    switch(taxGroup){
        case"normal":
        taxRate =25;
        break;

        case"food":
        taxRate =15;
        break;

        case"hotel"
        case"transport":
        case"cinema":
        taxRate=10;
        break;

        default;
         printOut("Error: Unkown tax group!");
        return;
    }
    const netAmount = (100 * aGrossAmount) / (taxRate + 100);

    printOut(`Gross amount: ${aGrosssAmount.toFixed(2)}`);
    printOut(`Tax group: ${aTaxGroup}, Tax rate:${taxRate}%`);
    printOut(` Net amount: ${netAmount.toFixed(2)}`);
    printOut("");
    
}


Part6Calculate(100,"normal");
Part6Calculate(100," food");
Part6Calculate(100,"hotel");
Part6Calculate(100,"transport");
Part6Calculate(100,"cinema");
Part6Calculate(100, "Cars");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.*/

function Part7CalculateSpeedDistanceTime(distance,time,speed){

    if (speed === null);{
        speed = distance / time;
        printOut("Speed: " + speed.toFixed(2));
        return speed;
    }
     else if (time=== null) {
        time = distance / speed;
        printOut("Time: " + time.toFixed(2));
        return time;
    }

    else if (distance === null){
        distance = speed *time;
        printOut("Distance: " + distance.toFixed(2));
        return distance;
    }

    else{
        printOut(" Error: One value must be missing!");
        return NaN;
    }
}

Part7CalculateSpeedDistanceTime(100,2, null);// fart
Part7CalculateSpeedDistanceTime(100, null, 50);// tid 
Part7CalculateSpeedDistanceTime(null, 2, 50);// avstand
Part7CalculateSpeedDistanceTime( null, null, 50);// NaN


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function Part8AdjustString(aText, aMaxSize, aChar, aInsertAtEnd){
    let result= aText;
    while (result.length < aMaxsize) {
        if (aInsertAtEnd=== true){
            result = result + aChar;
        
        }
        else{
            result = aChar + result;
        }
    }
    printOut("Adjusted String:");
    return result;
}
printOut("Replace this with you answer!");
printOut(newLine);

Part8AdjustString("Hello", 20, "*", true);
Part8AdjustString("Hello", 20, "#", false);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine)
 function Part9TestMathExpression(aLines){
    let currentNumber = 1;
    for(let line = 1; line <= aLines; line++){
        let leftSum= 0;
        let rightSum= 0;
        for (let i = 0; i < line +1; i++){
            leftSum += currentNumber++;
        }
         for(let i = 0; i < line; i++){
            rightSum+= currentNumber++;
         }
         if(leftSum !== rightSum){
            printOut(`Test failed at line ${line}: left sum (${leftSum})!=Right sum (${rightSum})`);
            return;
         }
    }
    printOut("Maths fun!");
 }
 Part9TestMathExpression(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.`);

let Part10IntermediateSteps = "";
let Part10Step =0;
function Part10Factorial(aNumber){
    if (aNumber <= 1) {
        return 1;
    } else{
    const result =aNumber * Part10Factorial(aNumber - 1);
    Part10Step++;
    Part10IntermediateSteps+= `Step ${Part10Step}: ${aNumber}* Factorial(${aNumber - 1})=${result}<br>`;
    return result;
}
}

const numberforFactorial = 5;
const factorialResult= Part10Factorial(aNumber -1);
printOut(`Factorial of ${numberforFactorial} is ${factorialResult}`);
printOut("Intermediate Steps:<br>"+ Part10IntermediateSteps);

printOut(newLine);
