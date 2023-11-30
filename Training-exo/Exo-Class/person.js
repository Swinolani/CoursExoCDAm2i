export class Person {
  // Attribut
  #nom;
  #prenom;
  #dateNaissance;
  static id = 0;
  // Constructeur
  constructor(nom, prenom, dateNaissance) {
    this.#nom = nom;
    this.#prenom = prenom;
    this.#dateNaissance = dateNaissance;
    Person.id++;
  }

  // Methode

  get nom() {
    return this.#nom;
  }
  get prenom() {
    return this.#prenom;
  }

  get dateNaissance() {
    return this.#dateNaissance;
  }
}
