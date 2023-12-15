<template>
  <RouterView />
</template>

<script setup>
import { provide, ref } from "vue";
import custom1 from "./assets/customer1.json";
import custom2 from "./assets/customer2.json";
import custom3 from "./assets/customer3.json";
import { monStore } from "./shared/stores/indexStore";
const listParticipants = ref([custom1, custom2, custom3]);
provide("liste", { listParticipants });

const useIndexStore = monStore(); // ICI
console.log(useIndexStore.prenoms);
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
