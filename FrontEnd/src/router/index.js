import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CategoriasView from "@/views/CategoriasView.vue";
import ProdutosView from "@/views/ProdutosView.vue";
import FornecedoresView from "@/views/FornecedoresView.vue";
import EntregasView from "@/views/EntregasView.vue";
import PromocoesView from "@/views/PromocoesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/produtos",
      name: "produtos",
      component: ProdutosView,
    },
    {
      path: "/fornecedores",
      name: "fornecedores",
      component: FornecedoresView,
    },
    {
      path: "/entregas",
      name: "entregas",
      component: EntregasView,
    },
    {
      path: "/promocoes",
      name: "promocoes",
      component: PromocoesView,
    },
  ],
});

export default router;
