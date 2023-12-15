<template>
  <h1>{{ useIndexStore.prenoms[0] }}</h1>
  <h1>{{ bonCustomer[0].name }}</h1>
  <p>name : {{ bonCustomer[0].name }}</p>
  <p>Email : {{ bonCustomer[0].email }}</p>
  <p>Phone : {{ bonCustomer[0].phone }}</p>
  <p>City : {{ bonCustomer[0].city }}</p>
  <p>State : {{ bonCustomer[0].state }}</p>
  <p>Country : {{ bonCustomer[0].country }}</p>
  <p>Organization : {{ bonCustomer[0].Organization }}</p>
  <p>Job profile : {{ bonCustomer[0].jobProfile }}</p>
  <p>Additional infos : {{ bonCustomer[0].additionalInfo }}</p>
  <button @click="goBack">Go back</button>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { inject } from "vue";
import { monStore } from "../shared/stores/indexStore";

const useIndexStore = monStore();

const route = useRoute();
const prenomTarget = route.params.prenom;
const listPrenom = inject("liste").listParticipants;
let bonCustomer = [];
for (let i = 0; i < listPrenom.value.length; i++) {
  if (listPrenom.value[i].name == prenomTarget) {
    bonCustomer.push(listPrenom.value[i]);
  }
}
const navigaation = useRouter();
function goBack() {
  navigaation.push("/");
}
</script>
