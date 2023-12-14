const processi = process.argv;
let sum = 0;
for (let i = 2; i < processi.length; i++) {
  sum += Number(processi[i]);
}
console.log(sum);
