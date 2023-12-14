import { appendFile } from "fs/promises";

const filePath = process.argv[2];

(async function () {
  await appendFile("test.txt", "J'ajoute des lignes\n", {
    encoding: "utf-8",
  });
})();
