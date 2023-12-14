import { Guerrier } from "./Guerrier.js";
import { Magicien } from "./Magicien.js";
let varus = new Guerrier("Varus", 50, 3, 5);
let kled = new Guerrier("kled", 150, 12, 20);
let Syndra = new Magicien("Syndra", 60, 30, 31);
kled.attaquer(varus);
Syndra.attaquer(varus);
kled.attaquer(varus);
kled.attaquer(varus);
