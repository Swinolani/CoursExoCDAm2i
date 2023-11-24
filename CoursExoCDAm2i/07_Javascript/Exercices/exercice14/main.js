// function nomPrenom(nom, prenom){
//     return nom + " " + prenom
// }

// let resultat = nomPrenom("Guillaume", "Mairesse")
// console.log(resultat)

// console.log(nomPrenom("Guillaume", "Mairesse"))



// function nomPrenom(nom, prenom){
//     nom = nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase()
//     prenom = prenom.charAt(0).toUpperCase() + prenom.substring(1).toLowerCase()

//     return nom + " " + prenom
// }

// console.log(nomPrenom("gUiLLaume", "maiREsse"))


function toTitle(text){
    // return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    return text[0].toUpperCase() + text.substring(1).toLowerCase()
}

function nomPrenom(nom, prenom){
    return toTitle(nom) + " " + toTitle(prenom)
}

console.log(nomPrenom("gUiLLaume", "maiREsse"))