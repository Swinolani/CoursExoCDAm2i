import { Person } from "./person.js";
// fonction utile
function trie(chaine1, chaine2) {
  const list = [chaine1, chaine2];
  if (list.sort() == list) {
    return list;
  } else {
    return [chaine2, chaine1];
  }
}

// Variables globaux
const button = document.getElementById("valide");
const modal = document.getElementById("modal");
const afficheButton = document.getElementById("affiche");
const body = document.getElementsByTagName("body")[0];
const listPerson = [];
// Variable pour formulaire
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const naissance = document.getElementById("naissance");
const table = document.getElementById("table");

// Quand on demande l'affichgage du formuaire
afficheButton.addEventListener("click", function () {
  modal.style.display = "flex";
  body.style.backgroundColor = "lightgrey";
});

//Gestion  du modal par le clic
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    modal.style.display = "none";
    body.style.backgroundColor = "";
  } else {
    e.preventDefault;
  }
});
// Quand on valide le fomulaire
button.addEventListener("click", function (e) {
  // On cancel la propriété du form pour eviter le rechargement de la page
  e.preventDefault();

  //Instanciation
  let maPersonne = new Person(nom.value, prenom.value, naissance.value);

  listPerson.push(maPersonne);

  //Création des ligne de tableaux + ajout
  let tr = document.createElement("tr");
  tr.setAttribute("class", "contenu");
  let tdId = document.createElement("td");
  tdId.textContent = Person.id;
  let tdNom = document.createElement("td");
  let tdPrenom = document.createElement("td");
  let tdNaissance = document.createElement("td");
  let suppr = document.createElement("td");
  suppr.setAttribute("class", "supprimer");
  suppr.textContent = "supprimer";
  suppr.style.backgroundColor = "#ef5353";
  suppr.style.borderRadius = "5px";
  suppr.style.cursor = "pointer";

  tdNom.textContent = maPersonne.nom;
  tdPrenom.textContent = maPersonne.prenom;
  tdNaissance.textContent = maPersonne.dateNaissance;
  tr.appendChild(tdId);
  tr.appendChild(tdNom);
  tr.appendChild(tdPrenom);
  tr.appendChild(tdNaissance);
  tr.appendChild(suppr);
  table.appendChild(tr);

  // Reset des inputs
  // nom.value = "";
  // prenom.value = "";
  // naissance.value = "";
  console.log(tr.children);
  suppr.addEventListener("click", function () {
    tr.remove();
    for (
      let i = parseInt(tr.children[0].textContent);
      i < table.childElementCount;
      i++
    ) {
      table.children[i].children[0].textContent = i;
    }
  });

  console.log(listPerson);
  // CHOIX DU TRI
  const trier = document.getElementById("trier");
  if (trier.value == "croissant") {
  }
  console.log(table.children[1].children[2].textContent);
});
