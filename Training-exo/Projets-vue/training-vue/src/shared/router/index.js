import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import usersDetails from "@/components/usersDetails.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/home",
    redirect: "/",
  },
  { path: "/:prenom", component: usersDetails },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
