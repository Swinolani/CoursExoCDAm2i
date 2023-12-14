import { defineStore } from "pinia";
import { ref } from "vue";

export const monStore = defineStore("monStore", () => {
  const prenoms = ref(["fi", "refe", "gtnfg"]);
  return prenoms;
});
