<template>
  <header>
    <div class="container">
      <img src="../assets/piniaLogo.png" alt="" />
      <h1>To Do</h1>
    </div>
    <div class="container">
      <input
        type="text"
        name="tache"
        id="tache"
        class="ajouter"
        placeholder="I need to"
        ref="tache"
        @keyup.enter="ajouter($refs.tache)"
      />
      <button @click="ajouter($refs.tache)">Add</button>
    </div>
  </header>
</template>

<script setup>
import { listStore } from "../stores/ListItemsStore";
const useListStore = listStore();

function ajouter(item) {
  useListStore.ajouterDansListe(item.value);
  item.value = "";
}
</script>

<style scoped>
header {
  background-color: #e7e6e8;
  padding: 10px 0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 50px;
  margin: 5px;
  rotate: -10deg;
}
h1 {
  width: 7%;
  margin: 5px;
  font-weight: 900;
  color: rgb(102, 102, 102);
  font-size: 1.5rem;
}
.ajouter {
  outline: none;
  border: none;
  height: 35px;
  border-radius: 5px;
  padding: 8px 10px;
}
button {
  padding: 5px 20px;
  border: none;
  background-color: #fed85b;
  color: #b5893a;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
}
input,
button {
  margin: 5px;
}
</style>
