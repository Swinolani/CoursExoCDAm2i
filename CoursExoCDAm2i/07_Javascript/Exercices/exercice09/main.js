// let n = Number(prompt("Saisir N :"))

// // Premier style d'affichage
// for(let table = 1; table <= n; table++){
//     console.log(`\nTable des ${table} :`);
//     for(let mul = 1; mul <= 10; mul++){
//         console.log(`${table} x ${mul} = ${table*mul}`);
//     }
// }

// Deuxième style d'affichage

// let entete = ""
// for(let chiffre = 1; chiffre <= 10; chiffre++){
//     entete += `\t${chiffre}`;
// }
// console.log(entete);

// console.log("----".repeat(10) + "---");

// for(let table = 1; table <= n; table++){
//     let ligneAAfficher = ""
//     for(let mul = 1; mul <= 10; mul++){
//         ligneAAfficher += `\t${table*mul}`;
//     }
//     console.log(ligneAAfficher);
// }

// version avec une chaine

// let affichageTotalTables = "";

// let entete = ""
// for(let chiffre = 1; chiffre <= 10; chiffre++){
//     entete += `\t${chiffre}`;
// }
// affichageTotalTables += entete + "\n";

// affichageTotalTables += "----".repeat(10) + "---" + "\n";

// for(let table = 1; table <= n; table++){
//     let ligneAAfficher = ""
//     for(let mul = 1; mul <= 10; mul++){
//         ligneAAfficher += `\t${table*mul}`;
//     }
//     affichageTotalTables += ligneAAfficher + "\n";
// }

// console.log(affichageTotalTables);



// version Difficile (avec le code de Cécile)

let number = parseInt(prompt("Entrez le nombre maximal pour la table de multiplication :"), 10);
let cellWidth = parseInt(prompt("Entrez la largeur de la cellule (nombre d'espaces) :"), 10);

// le séparateur et l'en-tête
let separator = '+' + ('-'.repeat(cellWidth + 2)+ '+').repeat(10); 
let header = '|';
for (let i = 1; i <= 10; i++) { 
        header += ` ${i.toString().padEnd(cellWidth, ' ')} |`;
}

// Affichage de l'en-tête de la table
console.log(separator);
console.log(header);
console.log(separator);

// Construire et afficher chaque ligne de la table
for (let i = 1; i <= number; i++) {
    let row = '|';
    for (let j = 1; j <= 10; j++) {
        let product = (i * j).toString().padEnd(cellWidth, ' ');
        row += ` ${product} |`;
    }
    console.log(row);
    console.log(separator);
}