export class Personnage {
  // Attribut
  nom;
  vie;
  force;

  // Constructeur
  constructor(nom, vie, force) {
    this.nom = nom;
    this.vie = vie;
    this.force = force;
  }

  // Methode

  get getNom() {
    return this.nom;
  }
  get getVie() {
    return this.vie;
  }

  get getForce() {
    return this.force;
  }

  setVie(vie) {
    this.vie = vie;
  }
}
