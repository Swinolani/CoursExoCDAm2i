// Variable requete
const recherche = document.getElementById("rechercher");
const pokemon = document.getElementById("pokemon");

//Variable DOM
const monImg = document.getElementById("imgContient");
const nom = document.getElementById("nom");
const taille = document.getElementById("taille");
const poids = document.getElementById("poids");
const types = document.getElementById("types");
const capacites = document.getElementById("capacites");
const flecheGauche = document.getElementById("Left-Arrow");
const flecheDroite = document.getElementById("Right-Arrow");

// Code pour rechercher un pokemon avec la barre de recherche
recherche.addEventListener("click", async function () {
  //code pour accepter les id ET les noms !
  const inputaAccepteNombre = new RegExp("[0-9]");
  const inputaAccepteLettre = new RegExp("[a-z]");
  let pokemonInfos = infos(await getPokById(pokemon.value));
  monImg.src = pokemonInfos.image;
  nom.textContent = pokemonInfos.nom;
  taille.textContent = pokemonInfos.taille;
  poids.textContent = pokemonInfos.poids;
  let listTypes = "";
  pokemonInfos.types.forEach((type) => {
    listTypes += type + "  ";
  });
  types.textContent = listTypes;
  let listCapacites = "";
  pokemonInfos.capacites.forEach((capacite) => {
    listCapacites += capacite + "  ";
  });
  capacites.textContent = listCapacites;
});

// Objet pour avoir les infos utiles du pokemon
function infos(pokemon) {
  listeTypePokemon = [];
  pokemon.types.forEach((element) => {
    listeTypePokemon.push(element.type.name);
  });
  listeAbilityPokemon = [];
  pokemon.abilities.forEach((element) => {
    listeAbilityPokemon.push(element.ability.name);
  });
  return {
    id: pokemon.id,
    nom: pokemon.species.name,
    poids: pokemon.weight,
    taille: pokemon.height,
    types: listeTypePokemon,
    capacites: listeAbilityPokemon,
    image: pokemon.sprites.front_default,
  };
}
// Reécupération API pokemon
async function getPokById(id) {
  const listPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const data = await listPokemon.json();
  return data;
}
