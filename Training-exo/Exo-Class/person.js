export class Person {
  // Attribut
  #nom;
  #prenom;
  #dateNaissance;

  // Constructeur
  constructor(nom, prenom, dateNaissance) {
    this.#nom = nom;
    this.#prenom = prenom;
    this.#dateNaissance = dateNaissance;
  }
  get nom() {
    return this.#nom;
  }
  get prenom() {
    return this.#prenom;
  }
  get dateNaissance() {
    return this.#dateNaissance;
  }

  // Methode
  set nom(nom) {
    if (this.#nom == "") {
      this.#nom = nom;
    } else {
      console.error("on ne remplace pas un nom déjà existant");
    }
  }
}
