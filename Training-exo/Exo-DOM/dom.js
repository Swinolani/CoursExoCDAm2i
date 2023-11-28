const button = document.getElementById("button");
const pseudo = document.getElementById("pseudo");
const form = document.getElementsByTagName("form")[0];
const mdp = document.getElementById("mdp");
const br = document.getElementsByTagName("br");

// Je crée les balise d'erreur
let span1 = document.createElement("span");
form.insertBefore(span1, br[0]);
span1.style.color = "red";
let span2 = document.createElement("span");
form.insertBefore(span2, br[1]);
span2.style.color = "red";
// ------------

button.addEventListener("click", function (e) {
  userDetails = {
    pseudo: pseudo.value,
    mdp: mdp.value,
  };
  // LE CHAMP EST VIDE ??
  if (userDetails.pseudo == "") {
    span1.textContent = "Saisie invalide, remplissez le champ !";
    e.preventDefault();
  } else {
    span1.textContent = "";
  }
  if (userDetails.mdp == "") {
    span2.textContent = "Saisie invalide, remplissez le champ !";
    e.preventDefault();
  } else {
    span2.textContent = "";
  }
  // ------------------
  if (userDetails.pseudo != "" && userDetails.mdp != "") {
    console.log(userDetails);
    pseudo.value = "";
    mdp.value = "";
    e.preventDefault(); // Sans cet event, le formulaire est renvoyé et tu ne peux pas voir la console
  }
});
