// EXO 10
function proc_sapin() {
  let n = parseInt(prompt("donne un nombre"));
  while (n % 2 == 0) {
    n = parseInt(prompt("un nombre impair s'il vous plaît"));
  }
  let tailleTronc = parseInt(prompt("la taille du tronc"));
  etoileOuBoule = ["*", "0"];

  couleurRandom = ["blue", "purple", "yellow", "red"];
  temp = "";

  for (let i = 0; i < (n + 1) / 2; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == (n - 1) / 2) {
        temp += "<span style='color:yellow'>A</span>";
      } else {
        if (j <= (n - 1) / 2 + i && j >= (n - 1) / 2 - i) {
          random = etoileOuBoule[Math.floor(Math.random() * 2)];
          temp += `<span style="color:${
            random == "0"
              ? couleurRandom[Math.floor(Math.random() * 4)]
              : "green"
          }">${random}</span>`;
        } else {
          temp += " ";
        }
      }
    }
    document.write("<pre style='margin:0'> " + temp + "</pre>");
    temp = "";
  }

  for (let k = 0; k < tailleTronc; k++) {
    for (let l = 0; l < n; l++) {
      if (l == (n - 1) / 2) {
        temp += "<span style='color:brown'>|</span>";
      } else {
        temp += " ";
      }
    }
    document.write("<pre style='margin:0'>" + temp + "</pre>");
    temp = "";
  }
}

//EXO 11
function proc_epaisseur() {
  let compteur = 0;
  let epaisseur = 0.0001;
  while (epaisseur < 400) {
    epaisseur *= 2;
    compteur++;
  }
  console.log(compteur);
}

// EXO 12

function proc_populace() {
  let pop_init = parseInt(prompt("Saisir la population"));
  let taux = parseFloat(prompt("Saisir le taux"));
  let objectifVise = parseInt(prompt("Saisir la population visée"));
  let annee = 0;

  while (pop_init < objectifVise) {
    pop_init = pop_init + pop_init * (taux / 100);
    annee++;
  }
  alert(
    `La population dépasse la population visée à l'année ${annee} (${Math.floor(
      pop_init
    )} habitants)`
  );
}

// EXO 13

function proc_somme_partielle() {
  // fonction qui calcule la somme des terme à l'intervale [depart; arrive]
  function somme_partiel(depart, arrive) {
    return arrive == depart
      ? depart
      : somme_partiel(depart, arrive - 1) + arrive;
  }

  // fonction qui affiche le calcul de la somme des terme à l'intervale [depart; arrive]
  function affiche_somme_partiel(depart, arrive) {
    temp = "";
    result = 0;
    for (let i = depart; i <= arrive; i++) {
      result += i;
      temp += i + "+";
    }
    console.log(temp.substring(0, temp.length - 1), "=", result);
  }
  // Liste des sommes partiel valides
  let nombre = parseInt(prompt("donne ton nombre"));
  let seuil = Math.ceil(nombre / 2);
  for (let j = seuil; j > 0; j--) {
    for (let i = 1; i < j; i++) {
      if (somme_partiel(i, j) == nombre) {
        affiche_somme_partiel(i, j);
      }
    }
  }
}

// EXO bis

function proc_nbr_premier() {
  function estPremier(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false;
    }
    return true;
  }

  function n_eme_premier(n) {
    let i = 0;
    let test = 2;
    let listPremiers = null;
    while (i != n) {
      if (estPremier(test)) {
        listPremiers = test;
        i++;
      }
      test++;
    }
    return listPremiers;
  }
}

// EXO 14

function prenom_nom(prenom, nom) {
  return (
    prenom[0].toUpperCase() +
    prenom.substring(1).toLowerCase() +
    " " +
    nom[0].toUpperCase() +
    nom.substring(1).toLowerCase()
  );
}

// EXO 15

function soustraire() {
  let a = parseFloat(prompt("premier nombre"));
  let b = parseFloat(prompt("second nombre"));
  console.log(`Je soustrais ${a} et ${b}`);
  return a - b;
}

// EXO 16

function quelleHeure() {
  let heure = prompt("Quelle heure est il ?");
  console.log(`Il est ${heure == "" ? "12h00" : heure} :)`);
}

// EXO 17

// const ask = (question, yes, no) => {
//   if (confirm(question))
//     // affiche une boite de dialogue avec la possibilité d'accepter ou refuser
//     yes();
//   else no();
// };
// ask(
//   "Do you agree?",
//   () => {
//     alert("You agreed.");
//   },
//   () => {
//     alert("You canceled the execution.");
//   }
// );

// EXO 18

function estPalindrome() {
  let chaine = prompt("Entre ta chaine de caractères");
  for (let i = 0; i < Math.floor(chaine.length / 2); i++) {
    if (chaine[i] != chaine[chaine.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// EXO 19

function compterLettreA() {
  let chaine = prompt("Entre une chaine de caractère");
  count = 0;
  for (let i = 0; i < chaine.length; i++) {
    if (chaine[i] == "a") {
      count++;
    }
  }
  return `résultat : ${count}`;
}

// EXO 20

function verificationAdn(chaine) {
  // La chaine est valide ?
  for (let i = 0; i < chaine.length; i++) {
    if (
      chaine[i] != "a" &&
      chaine[i] != "c" &&
      chaine[i] != "g" &&
      chaine[i] != "t"
    ) {
      return false;
    }
  }
  return true;
}

function saisieAdn(adn, message) {
  adn = prompt(`Entrez une ${message} `);
  while (!verificationAdn(adn)) {
    adn = prompt(`Entrez une ${message} valide !`);
  }
  return adn;
}

function proportion(chaine = "", sequence = "") {
  // La saisie s'enclenche sur lappel de "proportion" .
  chaine = saisieAdn(chaine, "chaine");
  sequence = saisieAdn(sequence, "séquence");
  count = 0;

  for (let i = 0; i <= chaine.length - sequence.length; i++) {
    if (chaine.substring(i, i + sequence.length) == sequence) {
      count++;
    }
  }
  pourcent =
    Math.floor(((count * sequence.length) / chaine.length) * 10000) / 100;

  return `Il y a ${pourcent}% de '${sequence}' dans la chaine '${chaine}'`;
}

function choisiTaFonction() {
  do {
    let laFonction = prompt(
      "Choisi la fonction entre : 'soustraction' , 'heure' , 'palindrome' , 'comptage' , 'ADN'"
    );
    while (
      laFonction != "soustraction" &&
      laFonction != "heure" &&
      laFonction != "palindrome" &&
      laFonction != "comptage" &&
      laFonction != "ADN"
    ) {
      laFonction = prompt(
        "entrer une fonction correspondant à la liste ci-contre : 'soustraction' , 'heure' , 'palindrome' , 'comptage' , 'ADN'"
      );
    }
    if (laFonction == "soustraction") {
      console.log(soustraire());
    } else if (laFonction == "heure") {
      quelleHeure();
    } else if (laFonction == "palindrome") {
      console.log(estPalindrome());
    } else if (laFonction == "comptage") {
      console.log(compterLettreA());
    } else if (laFonction == "ADN") {
      console.log(proportion());
    }
  } while (confirm("veux tu reessayer ? "));

  alert("merci d'avoir essayé mes fonction :)");
}

// EXO 21

// FONCTION USUELLES
function nombre_1_a_99() {
  return Math.floor(Math.random() * 100);
}
function nombre_1_a_50() {
  return Math.floor(Math.random() * 50) + 1;
}
function remplirTableauUtilisateur() {
  liste = Array(10);
  for (let i = 0; i < liste.length; i++) {
    elem = prompt("entre une valeur");
    while (elem == "") {
      elem = prompt("entre une valeur VALIDE");
    }
    liste[i] = elem;
  }
  return liste;
}
// ------------------------------------
function remplirTableauRandom_1_a_99() {
  let nombreRandom = nombre_1_a_99();
  liste = Array(10);
  for (let i = 0; i < liste.length; i++) {
    liste[i] = nombreRandom;
    nombreRandom = nombre_1_a_99();
  }
  return liste;
}

// EXO 22
function genererTableauRandom_1_a_50() {
  let nombreRandom = nombre_1_a_50();
  let longueur = parseInt(prompt("Longueur du tableau"));
  liste = Array(longueur);
  for (let i = 0; i < liste.length; i++) {
    liste[i] = nombreRandom;
    nombreRandom = nombre_1_a_50();
  }
  return liste.forEach((element) => {
    console.log(
      element % 2 == 0
        ? `Le nombre ${element} est pair`
        : `Le nombre ${element} est impair`
    );
  });
}

// EXO 23
function saisieNote() {
  let liste;
  choixSaisie = prompt(
    "Quelle mode de saisie voulez vous ? Saisie fixe => 1 / Saisie jusqu'à note négative =>2"
  );
  if (choixSaisie == "1") {
    longueur = parseInt(prompt("Donnez la longueur du tableau"));
    liste = Array(longueur);
    for (let i = 0; i < liste.length; i++) {
      note = parseFloat(prompt("Entrez votre note"));

      liste[i] = note;
    }
  } else if (choixSaisie == "2") {
    liste = Array();
    note = parseFloat(prompt("Entrez la note"));
    while (note >= 0) {
      liste.push(note);
      note = parseFloat(prompt("Entrez la note"));
    }
  }
  // AFFICHE LA LISTE ICI
}
