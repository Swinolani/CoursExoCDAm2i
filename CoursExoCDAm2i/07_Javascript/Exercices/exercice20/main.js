function verificationAdn(chaineAdn){
    for(let i = 0; i < chaineAdn.length; i++){
        // if(chaineAdn[i] !== "a" || chaineAdn[i] !== "c" ||chaineAdn[i] !== "t" ||chaineAdn[i] !== "g")
        // if("actg".search(chaineAdn[i]) == -1) // cherche le caractère dans "actg" => si il n'y est pas, invalide !
        if(!"actg".includes(chaineAdn[i])) // même chose mais renvoie true si la chaine est trouvée
            return false;
    }
    return true;
}

function saisieChaineAdn(message){
    let chaine = prompt(message).trim().toLowerCase()
    while(!verificationAdn(chaine)){
        chaine = prompt("Erreur ! " + message).trim().toLowerCase()
    }
    return chaine;
}

function pourcentageSequence(chaine, sequence){
    let regex = new RegExp(sequence, "g") 
    let occurrences = chaine.match(regex)?.length ?? 0 // compte le nombre de fois où la chaine apparaît
    let pourcentage = occurrences * sequence.length / chaine.length * 100
    return pourcentage
}

// Programme principal
// Saisies
let chaineAdn = saisieChaineAdn("Saisir la chaine : ")
let sequence = saisieChaineAdn("Saisir la séquence : ")

console.log("chaine :", chaineAdn)
console.log("sequence :", sequence)

// Calcul
let pourcentage = pourcentageSequence(chaineAdn, sequence)

// Affichage du résultat
console.log(`Il y a ${pourcentage.toFixed(1)}% de \"${sequence}\" dans la chaine \"${chaineAdn}\"`)