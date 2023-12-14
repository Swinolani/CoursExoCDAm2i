import { Personnage } from "./Personnage.js";

export class Guerrier extends Personnage {
  #armure;

  constructor(nom, vie, force, armure) {
    super(nom, vie, force);
    this.#armure = armure;
  }

  get getArmure() {
    return this.#armure;
  }
  setArmure(armure) {
    this.#armure = armure;
  }
  attaquer(cible) {
    if (cible.getVie - this.force >= 0) {
      if (cible.getArmure - this.force <= 0) {
        cible.setVie(cible.getVie + cible.getArmure - this.force);
        console.log(
          `${this.nom} a infligé ${this.force} point de degat à ${cible.getNom}. Son shield est peté et il ne lui reste que ${cible.getVie} pv :(`
        );
        cible.setArmure(0);
      } else {
        cible.setArmure(cible.getArmure - this.force);
        console.log(
          `${this.nom} a infligé ${this.force} point de degat à ${cible.getNom}. Il lui reste ${cible.getArmure} de shield et ${cible.getVie} pv :(`
        );
      }
    } else {
      console.log(`${cible.getNom} n'a plus de vie, il est décédé`);
      cible.setVie(0);
    }
  }
}
