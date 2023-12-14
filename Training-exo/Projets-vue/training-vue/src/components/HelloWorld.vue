<template>
  <h1>HELLO LES GENS !</h1>

  <div
    @click="prenomRef(customer)"
    class="container"
    :key="index"
    v-for="(customer, index) in listPrenom"
  >
    <h1>{{ customer.name }}</h1>
    <p>{{ customer.email }}</p>
    <p>{{ customer.phone }}</p>
    <RouterLink :to="`${customer.name}`">plus de détails</RouterLink>
  </div>
  <p>{{ prenomTarget }}</p>
</template>

<script setup>
import { inject, ref } from "vue";

const listPrenom = inject("liste").listParticipants;
const prenomTarget = ref("");

function prenomRef(input) {
  prenomTarget.value = input.name;
}
</script>

<style scoped>
.container {
  border: solid black 1px;
  width: 200px;
  margin: 5px auto;
  padding: 2px;
}
</style>
