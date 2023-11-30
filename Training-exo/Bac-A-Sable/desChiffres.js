// Fonctions utiles-----------------------------------------------

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
const listePermutations = function (nums) {
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
};

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

// Utilisation avec votre liste d'opérateurs et une longueur de 5
const operators = ["*", "/", "+", "-"];
const result = generateOperatorCombinations(operators);

// -------------------------------------------------------

// Corps du code pour les chiffres

function bonCompte(sequenceChiffre, nombre) {
  let listChiffre = sequenceChiffre.split(" ");

  let listPermutationsChiffre = listePermutations(listChiffre);
  leCompteEstPasBon = true;
  while (leCompteEstPasBon) {}
}

// --------------------------------------
