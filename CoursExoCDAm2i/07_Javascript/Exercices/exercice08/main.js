console.log("Table des matières :");

for(let chap = 1; chap <= 3; chap++){
    console.log(`\tChapitre ${chap}:`);
    for(let part = 1; part <= 3; part++){
        console.log(`\t\t-partie ${chap}.${part}`);
    }
}
