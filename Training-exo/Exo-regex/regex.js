let regex = new RegExp("[Aa0-3]{2}", "g");
let carac = "a2a2ruuAA10a77d";
console.log(carac.replace(regex, "+"));
