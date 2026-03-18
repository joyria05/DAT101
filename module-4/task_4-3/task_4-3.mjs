"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const chkTask3= document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output= document.getElementById("txtTask2Output");
txtTask3Output. innerHTML ="";
function cmbTask3CheckAnswerClick(){
  for(let i = 0; i < chkTask3.length; i++){
    const chkBox = chkTask3[i];
    console.log(`chkTask3[${i}].checked = $ {chkBox.checked}`);
    txtTask3Output.innerHTML += text + "<br/>";

  }
  
  
}

cmbTask3CheckAnswer. addEventListener("click", cmbTask3CheckAnswerClick);
//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function carbrandCarNameSelect(aEvent){
  const txtTask4Output = document.getElementById("txtTask4Output");
  `User select car type number: ${aEvent.target.value}`;
  console.log(aEvent)
}

const divTask4Cars= document.getElementById("divTask4Cars");
for(let i = 0; i< CarTypes.length; i++){
  const car = CarTypes [i];
  const inpRadio = document.createElement ("input");
  inpRadio.type = "radio";
  inpRadio.name ="carbrandCarName";
  inpRadio.value = car.value;
 inpRadio.id="carbrandCarName"+ i.toString();
 inpRadio.addEventListener("cange", carbrandCarNameSelect);
  const lblCaption= document. createElement("label");
  lblCaption.for =inpRadio.id;
  lblCaption.appendChild(document.createTextNode(car.caption));
  divTask4Cars.appendChild(inpRadio);
  divTask4Cars.appendChild(lblCaption);
  divTask4Cars.appendChild(document.createElement("br"));



  console.log(`CarTtpes[${i}].value = ${CarTypes.value}, CarsTypes[${i}].caption= ${CarTypes}`)
}


//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
