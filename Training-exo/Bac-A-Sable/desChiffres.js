// Fonctions utiles-----------------------------------------------
function contenanceBonChiffre(chaine) {
  let listeChiffreCorrecte = new RegExp(/\b(?:[1-9]|10|25|50|75|100)\b/);
  for (let c of chaine.split(" ")) {
    if (c.match(listeChiffreCorrecte) == null) {
      return false;
    }
  }
  return true;
}
// comparaison de 2 tableau
function egaliteEntreListes(liste1, liste2) {
  if (liste1.length != liste2.length) {
    return false;
  } else {
    for (let i = 0; i < liste1.length; i++) {
      if (liste1[i] !== liste2[i]) {
        return false;
      }
    }
  }
  return true;
}
// verification du contenu d'un tableau de tableaux
function listeEstDansGrandeListe(liste, grosseListe) {
  for (let i = 0; i < grosseListe.length; i++) {
    if (egaliteEntreListes(grosseListe[i], liste)) {
      return true;
    }
  }
  return false;
}
// Tableau de tout les arrangements d'un tableau de nombre
function listePermutations(nums) {
  let result = [];
  const backtrack = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      backtrack(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  backtrack(0, nums);
  let resultTronque = [];
  for (let i = 0; i < result.length; i++) {
    if (!listeEstDansGrandeListe(result[i], resultTronque)) {
      resultTronque.push(result[i]);
    }
  }

  return resultTronque;
}

// Liste toutes les combinaisons opératoire
function generateOperatorCombinations(
  operators,

  currentCombination = [],
  result = []
) {
  if (currentCombination.length === 5) {
    // Vous avez atteint la longueur désirée, ajoutez la combinaison au tableau de résultats
    result.push(currentCombination.join(""));
    return;
  }

  // Pour chaque opérateur, ajoutez-le à la combinaison actuelle et appelez récursivement la fonction
  for (let i = 0; i < operators.length; i++) {
    generateOperatorCombinations(
      operators,

      currentCombination.concat(operators[i]),
      result
    );
  }

  return result;
}

console.log(1024 * 720);

// -------------------------------------------------------

// Corps du code pour les chiffres
let listeLettre = new RegExp("[a-zA-Z]");
let listChiffre = prompt(
  "Entrez vos 6 nombres espacé contenant au coix ces chiffres : 1,2,3,4,5,6,7,8,9,10,25,50,75,100"
);
while (
  listChiffre.match(listeLettre) != null ||
  listChiffre.split(" ").length - 1 != 5 ||
  !contenanceBonChiffre(listChiffre) ||
  listChiffre.split(" ").length != 6
) {
  listChiffre = prompt(
    "La saisie est incorrecte, vous devez entrer 6 nombres espacés parmi ces chiffres : 1,2,3,4,5,6,7,8,9,10,25,50,75,100\nExemple : '2 25 7 10 100 8'"
  );
}

// Faire la fusion des 2 élément sans parenthésage
// Utilisation des élément necessaire résultant de tout le code au dessus !

const listeOperateur = generateOperatorCombinations(["*", "/", "+", "-"]);
const listeArrangementsNombres = listePermutations(listChiffre.split(" "));
// SUITE ICI
// --------------------------------------
