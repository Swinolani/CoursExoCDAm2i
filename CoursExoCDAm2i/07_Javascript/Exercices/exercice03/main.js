let rayon, hauteur, volume;

// rayon = Number(prompt("Veuillez saisir le rayon :"))
// // rayon = parseFloat(prompt("Veuillez saisir le rayon :"))

// hauteur = Number(prompt("Veuillez saisir la hauteur :"))

// volume = (Math.PI * rayon ** 2 * hauteur) / 3;
// // volume = (Math.PI * Math.pow(rayon, 2) * hauteur) / 3;


// console.log(volume);
// // alert(volume);

// // let message = "Votre volume est " + volume + "m³";
// let message = `Votre volume est ${volume} m³`;

// console.log(message);


rayon = Number(prompt("Veuillez saisir le rayon :"))
hauteur = Number(prompt("Veuillez saisir la hauteur :"))

console.log(`Votre volume est ${(Math.PI * rayon ** 2 * hauteur) / 3} m³`);
console.log(`Votre volume est ${((Math.PI * rayon ** 2 * hauteur) / 3).toFixed(2)} m³`);


// console.log(`Votre volume est ${(Math.PI * Number(prompt("Veuillez saisir le rayon :")) ** 2 * Number(prompt("Veuillez saisir la hauteur :"))) / 3} m³`);