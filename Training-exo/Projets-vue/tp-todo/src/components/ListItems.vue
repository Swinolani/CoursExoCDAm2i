<template>
  <main>
    <div class="items">
      <div class="param-button">
        <button @click="toutLesItems">All tasks</button>
        <button @click="queLesFavoris">Favorite tasks</button>
      </div>
      <div class="container2" v-for="item in listItems" v-show="!allFavoris">
        <div class="item">
          <p>{{ item.tache }}</p>
          <div class="svg">
            <svg
              @click="supprimer(item.id)"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
              />
              <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
              />
            </svg>
            <svg
              @click="isActiveCoeur(item.id)"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              :style="item.isActiveCoeur ? 'color:red' : ''"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="container2"
        v-for="item in listItems"
        v-show="allFavoris && item.isActiveCoeur"
      >
        <div class="item">
          <p>{{ item.tache }}</p>
          <div class="svg">
            <svg
              @click="supprimer(item.id)"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
              />
              <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
              />
            </svg>
            <svg
              @click="isActiveCoeur(item.id)"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              :style="item.isActiveCoeur ? 'color:red' : ''"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { listStore } from "../stores/ListItemsStore";
import { ref } from "vue";
const useListStore = listStore();
const listItems = useListStore.mesTaches;
let allFavoris = ref(useListStore.allFavoris);

function supprimer(id) {
  useListStore.supprimerDansListe(id);
}

function isActiveCoeur(id) {
  listItems[id].isActiveCoeur = !listItems[id].isActiveCoeur;
}

function queLesFavoris() {
  allFavoris.value = true;
}
function toutLesItems() {
  allFavoris.value = false;
}
</script>

<style scoped>
main {
  background-color: #f3f2f3;
  padding-bottom: 5px;
}
svg {
  cursor: pointer;
  margin: 5px;
}
.item {
  width: 40%;
  display: flex;
  margin: 3px auto;
  justify-content: space-between;
  box-shadow: 2px 2px 0 #ecebec;
  background-color: white;
}
.item > * {
  padding: 10px;
}
.item > p {
  margin: 0;
  font-weight: bold;
}
.param-button {
  width: 46%;
  margin-left: auto;
}
.param-button > button {
  margin: 5px;
  border: 1px solid #c5c4c5;
  background-color: white;
}
</style>
