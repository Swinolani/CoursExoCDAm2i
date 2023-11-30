// CALCUL MENTAL !

// //Méthode utiles
function nombre_1_a_100() {
  return Math.floor(Math.random() * 100);
}

//Variable
const calcul = document.getElementById("calcul");
const valider = document.getElementById("valider");
let result1 = nombre_1_a_100();
let result2 = nombre_1_a_100();

//Placement de l'input
calcul.innerHTML = `${result1 < 10 ? `0${result1}` : result1} × ${
  result2 < 10 ? `0${result2}` : result2
} = <input type="text" id="result" placeholder="????" maxlength="4" />`;

// Début des festivités
document.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    let result = document.getElementById("result");
    if (valider.textContent == "Valider") {
      if (parseInt(result.value) == result1 * result2) {
        result.value = "";
        calcul.innerHTML = `${result1 < 10 ? `0${result1}` : result1} × ${
          result2 < 10 ? `0${result2}` : result2
        } = ${result1 * result2}`;
        calcul.style.color = "green";
        valider.textContent = "Suivant";
      } else {
        calcul.innerHTML = `${result1 < 10 ? `0${result1}` : result1} × ${
          result2 < 10 ? `0${result2}` : result2
        } = ${result1 * result2}`;
        calcul.style.color = "red";
        result.value = "";
        valider.textContent = "Suivant";
      }
    } else if (valider.textContent == "Suivant") {
      result1 = nombre_1_a_100();
      result2 = nombre_1_a_100();
      calcul.innerHTML = `${result1 < 10 ? `0${result1}` : result1} × ${
        result2 < 10 ? `0${result2}` : result2
      } = <input type="text" id="result" placeholder="????" maxlength="4" />`;
      calcul.style.color = "";
      valider.textContent = "Valider";
    }
  }
  result.focus();
});
