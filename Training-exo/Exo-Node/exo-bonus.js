import colors from "colors";
const processi = process.argv;

function estPremier(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
let sum = 0;
for (let i = 2; i < processi.length; i++) {
  sum += Number(processi[i]);
}
if (estPremier(sum)) {
  console.log(colors.green(sum));
} else {
  console.log(colors.red(sum));
}
