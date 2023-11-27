const button = document.getElementById("button");
let listUti = [];
button.addEventListener("click", () => {
  const prenom = document.getElementById("prenom");
  const nom = document.getElementById("nom");
  const date = document.getElementById("date");
  const table = document.getElementById("table");
  const utilisateur = {
    prenom: prenom.value,
    nom: nom.value,
    date: date.value,
  };
  listUti.push(utilisateur);

  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  td1.textContent = utilisateur.prenom;
  td2.textContent = utilisateur.nom;
  td3.textContent = utilisateur.date;
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  table.appendChild(row);
});
