"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const sum1 = 2 + 3 * (2 - 4) * 6 //-34
//  jeg skal regne ut det samme resulatt, med og uten parantes

const originalExpression= 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + 3 * (2 - 4) * 6;
printOut("Original expression 2 + 3 * 2 - 4 * 6 = " + originalExpression);
printOut("Modified expression 2 + 3 * (2 - 4) * 6 = " + modifiedExpression);
printOut(newLine);

printOut("svar: " + sum1);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let fulltall = 25340 // mm
const inch = 25.4 // mm
let sum2 = fulltall / inch// 977,64

printOut(sum2.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days3 = 3;
let hours3 = 12;
let minuttes3 = 14;
let seconds3 = 45;

const sum3 = (days3 * 24 * 60) + (hours3 * 60) + minuttes3 + (seconds3 / 60);

printOut(sum3);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const minuttes4ToConvert = 6322.52;

let days4 = Math.floor(minuttes4ToConvert / (60 * 24));
let hours4 = Math.floor((minuttes4ToConvert % (60 * 24)) / 60);
let minuttes4 = Math.floor(minuttes4ToConvert % 60);
let seconds4 = Math.round((minuttes4ToConvert % 1) * 60);



// const sum4 = ( days4, hours4, minuttes4, seconds4);

printOut(days4 + "days");
printOut(hours4 + "hours");
printOut(minuttes4 + "minuttes");
printOut(seconds4 + "seconds");
printOut(days4 + "days, " + hours4 + " hours, " + minuttes4 + "minuttes, " + seconds4 + "seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const dollar = 54;
const exgangeRate = 76 / 8.6;
const nok = dollar * exgangeRate;    //54*(76/8.6)

let roundedNok = Math.round(nok);
let nokValue =54;
let usd = nokValue / exgangeRate;

printOut(Math.round(usd) + "DOLLARS");
printOut(roundedNok + " KRONER");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Lag en variabel med tekst
let tekst= "There is much between heaven and earth that we do not understand.";

printOut("Antall tegn: " + tekst.length);
printOut("Tegnett på posisjon 19: " + tekst [19]);
printOut("8 tegn fa posisjon 35: " + tekst.substr(35, 8));
printOut("Indeks for `earth` : " + tekst.indexOf("earth"));


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const txtPrintValue = 5 > 3;
printOut("5> 3= " + txtPrintValue.toString());

const txtPrintValue2 = 7 >= 7;
printOut("7 >= 7 "+ txtPrintValue2.toString());

const thirdstats = "a" > "b";
printOut("a > b =" + thirdstats.toString());

const fourthstats = 1 < "a"
printOut('"1" < "a" = ' + fourthstats.toString());

const fivthstats = "2500" < "abcd"
printOut("2500 < abcd" + fivthstats.toString());

const sixthstats = "arne" !== "thomas"
printOut("arne !== thomas" + sixthstats.toString());

const seventhstats = 2 != 5
printOut(" 2 != 5" + seventhstats.toString());

const eathstats = "abcd" > "bcd"
printOut("abcd> bcd" + eathstats.toString());

printOut(txtPrintValue, txtPrintValue2, thirdstats, fourthstats, fivthstats, sixthstats, seventhstats, eathstats);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let printnumberone = "254";
let printnumbertwo = "57.23";
let printnumberthree = "25 kroner";

let convert1 = Number(printnumberone);
let convert2 = Number(printnumbertwo);
let convert3 = Number(printnumberthree.replace("kroner",""));

printOut(convert1, convert2, convert3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r= Math.floor (Math.random() * 360 ) + 1;
let meters = 25;
let centimeters= 34;

let totalMillimeters=(meters * 1000) + ( centimeters *10);
let inches = totalMillimeters / 25.4;



printOut("tilfeldig tall"+ r);
printOut(inches.toFixed(2));
printOut(newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalDays = 131;
let Weeks = Math.floor(totalDays / 7);
let Days = totalDays % 7;

printOut(Weeks + "Weeks");
printOut( Days+ "Days");

printOut("Replace this with you answer!");
printOut(newLine);