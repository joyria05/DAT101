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
function cmbTask1CalculateClick() {
  const width = parseInt(document.getElementById("txtRectWidth").value);
  const height = parseInt(document.getElementById("txtRectHeight").value);

  const area = width * height;
  const perimeter = 2 * (width + height);

  document.getElementById("txtTask1Output").innerHTML =
    `Width: ${width}, Height: ${height}<br>Perimeter = ${perimeter}, Area = ${area}`;
}

document.getElementById("cmbTask1Calculate").onclick = cmbTask1CalculateClick;
//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const task2Words = [];

document.getElementById("txtTask2Word").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const word = e.target.value;
    task2Words.push(word);

    document.getElementById("txtTask2Output").innerHTML =
      "Words: " + task2Words.join(", ");

    e.target.value = "";
  }
});

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const chkTask3= document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output= document.getElementById("txtTask3Output");
txtTask3Output.innerHTML ="";  
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
const Animals = ["Dog", "Cat", "Horse", "Cow", "Sheep"];

const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

// fyll dropdown
for (let i = 0; i < Animals.length; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = Animals[i];
  selectTask5Animals.appendChild(option);
}

// når bruker velger
selectTask5Animals.addEventListener("change", function () {
  const index = selectTask5Animals.value;
  const animal = Animals[index];

  txtTask5Output.innerHTML = "You selected: " + animal + " (index " + index + ")";
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for (let i = 0; i < GirlsNames.length; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = GirlsNames[i];
  selectTask6Girls.appendChild(option);
}

selectTask6Girls.addEventListener("change", function () {
  const index = selectTask6Girls.value;
  txtTask6Output.innerHTML = "You selected: " + GirlsNames[index];
});
//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const tblMoviesBody = document.getElementById("tblMovies").getElementsByTagName("tbody")[0];

function addMovie() {
  const title = document.getElementById("txtMovieTitle").value;
  const genre = MovieGenre[document.getElementById("selectMovieGenre").value];
  const director = document.getElementById("txtMovieDirector").value;
  const rate = document.getElementById("txtMovieRate").value;

  const row = tblMoviesBody.insertRow();
  row.insertCell().innerHTML = title;
  row.insertCell().innerHTML = genre;
  row.insertCell().innerHTML = director;
  row.insertCell().innerHTML = rate;
}

document.getElementById("cmbAddMovie").onclick = addMovie;