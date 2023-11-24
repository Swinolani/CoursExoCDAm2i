let populationInitiale, tauxAccroissement, populationVisee;

// contrôles de saisie => on force l'utilisateur à ressaisir jusqu'à avoir une valeur correcte
do {
    populationInitiale = parseFloat(prompt("Entrez la population initiale (>0): "));
} while (isNaN(populationInitiale) && populationInitiale > 0);

do {
    tauxAccroissement = parseFloat(prompt("Entrez le taux d'accroissement en pourcentage (>0): "));
    
} while (isNaN(tauxAccroissement) && tauxAccroissement > 0);
tauxAccroissement = tauxAccroissement / 100;

do {
    populationVisee = parseFloat(prompt("Entrez la population visée (>0): "));
} while (isNaN(populationVisee) && populationInitiale > 0);

let annee = 0;
let populationActuelle = populationInitiale;

while (populationActuelle < populationVisee) {
    populationActuelle *= 1 + tauxAccroissement;
    annee++;
}

console.log("La population dépasse la population visée à l'année " + annee + " (" + Math.round(populationActuelle) + " habitants)");