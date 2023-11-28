import { Chat } from "./person.js";
const button = document.getElementById("valide");

button.addEventListener("click", function () {
  // Variables
  const nom = document.getElementById("nom");
  const age = document.getElementById("age");
  const race = document.getElementById("race");
  const table = document.getElementById("table");
  //Instanciation
  let monChat = new Chat(nom.value, age.value, race.value);
  console.log(monChat.toString());
  //Création des ligne de tableaux + ajout
  let tr = document.createElement("tr");
  let tdNom = document.createElement("td");
  let tdAge = document.createElement("td");
  let tdRace = document.createElement("td");
  tdNom.textContent = monChat.nom;
  tdAge.textContent = monChat.age;
  tdRace.textContent = monChat.race;
  tr.appendChild(tdNom);
  tr.appendChild(tdAge);
  tr.appendChild(tdRace);
  table.appendChild(tr);
  //Reset des inputs
  nom.value = "";
  age.value = "";
  race.value = "";
});
