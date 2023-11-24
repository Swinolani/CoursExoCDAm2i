// function compterLettreA(chaine) {
//     let compteur = 0;
//     for (let i = 0; i < chaine.length; i++)
//         if (chaine[i] === "a")
//             compteur += 1;
//     return compteur;
// }

// console.log(compterLettreA("abba"));
// console.log(compterLettreA("mixer"));



function compterLettreA(chaine) {
    let compteur = 0;
    for (let char of chaine)
        if (char === "a")
            compteur += 1;
    return compteur;
}

console.log(compterLettreA("abba"));
console.log(compterLettreA("mixer"));
