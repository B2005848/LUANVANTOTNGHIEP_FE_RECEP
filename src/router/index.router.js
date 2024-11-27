import { createRouter, createWebHashHistory } from "vue-router";
import doctor from "./recep.router";
import { useAuthStore } from "@/stores/authenticate-login";
import PageNotFound from "@/pages/404page_not_found/index.vue";
const routes = [
  ...doctor,
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: PageNotFound,
    meta: {
      title: "404 - Trang không tồn tại",
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  document.title = to.meta?.title ?? "No title page!!!";
  if (to.path.startsWith("/recep") && !authStore.isLogged) {
    next({ name: "recep.login" });
  } else {
    next();
  }
});
export default router;
