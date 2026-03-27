"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
<u1>

  <1i style="list-style: noen;">
</u1>
`)


const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

printOut("Lengde = " + part1Array.length + ", Verdi = " + part1Array[part1Array.length - 1]);

let part1Text = "";
for (let i = 0; i < /*20*/ part1Array.length; /*i++*/ i = i + 1) {
  const value = part1Array[i]; // -> Every index of part1Array
  if (i === part1Array.length - 1) {
    part1Text += value.toString() + ".";
  } else {
    part1Text += value.toString() + ", ";
  }
}
printOut(part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
<u1>

  <1i style="list-style: noen;">
</u1>

const part2Text= partArray,join(",);


`)
printOut("part2Text");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(`
<br> "hei på deg, hvordan har du det?"(hello there, how are you?)<br>
take this text and convert it into an array that contains all the words in the text,i.e., </br>
each element should contain only one word from the text.<br>
use a loop to traverse (run through) this array so that you can print which word number,<br>
which index the word is at, and the word itself.
  <br>
`);

const part3Greeting = "Hei på deg, hvordan har du det?";
const greetingArray = part3Greeting.split(" ");

let part3Text = "";
for (let i = 0; i < greetingArray.length; i++) {
  const word = greetingArray[i];
  part3Text += "Word nr: " + (i + 1) + ", Index: " + i + " = " + word + newLine;
}
printOut(part3Text);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
<u1>

  <1i style="list-style: noen;">
</u1>
`)
const girls = ["Ann", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
  "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
function removeNameFromArray(aArray, aName) {
  let deleteIndex = -1;
  for (let i = 0; i < aArray.length; i++) {
    const name = aArray[i];
    if (name === aName) {
      deleteIndex = i;
      break;
    }
  }
  if (deleteIndex >= 0) {
    printOut(aName + " is found, and deleted.");
    aArray.splice(deleteIndex, 1);

  } else {
    printOut(aName + " is not found!");
  }
}

removeNameFromArray(girls, "Solveig");

printOut("girls");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias",
"Liam", "Håkon", "Theodor", "Magnus"];

const allNames = girls.concat(boys);

printOut(allNames.join(", "));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
  #title;
  #author;
  #isbn;

  constructor(title, author, isbn) {
    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
  }

  toString() {
    return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`;
  }
}

const books = [
  new TBook("1984", "George Orwell", "123"),
  new TBook("Harry Potter", "J.K. Rowling", "456"),
  new TBook("The Hobbit", "J.R.R. Tolkien", "789")
];

let part6Text = "";
for (const book of books) {
  part6Text += book.toString() + newLine;
}
printOut(part6Text);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag" },
  WeekDay7: { value: 0x40, name: "Søndag" },

  Workdays: { value: 0x1F, name: "Arbeidsdager" },
  Weekends: { value: 0x60, name: "Helg" }
};

const keys = Object.keys(EWeekDays);

let part7Text = "";
for (const key of keys) {
  const day = EWeekDays[key];
  part7Text += key + ": " + day.name + " (" + day.value + ")" + newLine;
}
printOut(part7Text);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumber = [];
for (let i = 0; i < 35; i++) {
  const randomNum = Math.floor(Math.random() * 20) + 1;
  randomNumber.push(randomNum);


}
function ascending(a, b) {
  return a - b;

}
function descending(a, b) {
  return b - a;

}


const ascendingNumbers = [...randomNumber].sort(ascending);
const descendingNumbers = [...randomNumber].sort(descending);
printOut("Original Array: " + randomNumber.join(","));
printOut("Ascending: " + ascendingNumbers.join(","));
printOut("Descending Order:" + descendingNumbers.join(","));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const frequency = {};

for (let i = 0; i < randomNumber.length; i++) {
  const num = randomNumber[i];
  if (frequency[num]) {
    frequency[num]++;
  } else {
    frequency[num] = 1;
  }
}

let text1 = "";
for (const num in frequency) {
  text1 += `Number ${num} occurs ${frequency[num]} times` + newLine;
}
printOut(text1);

// sortering
const keysFreq = Object.keys(frequency);

keysFreq.sort(function(a, b) {
  if (frequency[b] === frequency[a]) {
    return a - b;
  }
  return frequency[b] - frequency[a];
});

let text2 = "";
for (const num of keysFreq) {
  text2 += `Number ${num} occurs ${frequency[num]} times` + newLine;
}
printOut(text2);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const rows = 5;
const cols = 9;
const matrix = [];

for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < cols; j++) {
    row.push(`Row ${i + 1}, Col ${j + 1}`);
  }
  matrix.push(row);
}

let part10Text = "";

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    part10Text += matrix[i][j] + " | ";
  }
  part10Text += newLine;
}

printOut(part10Text);
printOut(newLine);
