import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const listStore = defineStore("list", () => {
  const mesTaches = ref([]);
  const id = ref(0);
  const isActiveCoeur = ref(false);
  const allFavoris = ref(false);

  function ajouterDansListe(item) {
    const monItem = {
      tache: item,
      id: id.value,
      isActiveCoeur: isActiveCoeur.value,
    };

    mesTaches.value.push(monItem);
    id.value++;
  }
  function supprimerDansListe(id) {
    mesTaches.value.splice(id, 1);
    for (let i = id; i < mesTaches.value.length; i++) {
      mesTaches.value[i].id--;
    }
  }
  return {
    supprimerDansListe,
    allFavoris,
    mesTaches,
    id,
    isActiveCoeur,
    ajouterDansListe,
  };
});
