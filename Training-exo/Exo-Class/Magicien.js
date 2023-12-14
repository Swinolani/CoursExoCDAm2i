import { Personnage } from "./Personnage.js";

export class Magicien extends Personnage {
  #mana;
  constructor(nom, vie, force, mana) {
    super(nom, vie, force);
    this.#mana = mana;
  }
  attaquer(cible) {
    if (cible.getVie - this.force >= 0) {
      if (this.#mana - this.force > 0) {
        if (cible.getArmure - this.force <= 0) {
          cible.setVie(cible.getVie + cible.getArmure - this.force);
          console.log(
            `${this.nom} a infligé ${this.force} point de degat à ${
              cible.getNom
            }, ${this.nom} a perdu ${
              this.#mana
            } pts de mana. Son shield est peté et il ne lui reste que ${
              cible.getVie
            } pv :(`
          );
          cible.setArmure(0);
          this.setMana(this.#mana - this.force);
        } else {
          cible.setArmure(cible.getArmure - this.force);
          console.log(
            `${this.nom} a infligé ${this.force} point de degat à ${
              cible.getNom
            }, ${this.nom} a perdu ${this.#mana} pts de mana. Il lui reste ${
              cible.getArmure
            } de shield et ${cible.getVie} pv :(`
          );
        }
        this.setMana(this.#mana - this.force);
      } else {
        console.log(
          `${this.nom} n'a pas assez de mana pour infliger des dégats`
        );
      }
    } else {
      console.log(`${cible.getNom} n'a plus de vie, il est décédé`);
    }
  }
  soigner(cible) {
    if (this.#mana > 0) {
      cible.setVie(this.#mana + cible.getVie);
      console.log(
        `${this.nom} a soigne ${cible.getNom} en lui conférant ${
          this.#mana
        } point de vie. ${cible.getNom} a desormais ${cible.getVie} pts de vie`
      );
      this.setMana(0);
    } else {
      console.log(
        `${this.nom} n'a plus de mana et n'est pas en mesure de soigner ${cible.getNom}`
      );
    }
  }
  get getMana() {
    return this.#mana;
  }
  setMana(mana) {
    this.#mana = mana;
  }
}
