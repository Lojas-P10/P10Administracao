import { createRouter, createWebHistory } from "vue-router";
import ParceirosView from "@/views/Dashboard/ParceirosView.vue";
import ProdutosDashView from "@/views/Dashboard/ProdutosView.vue";
import CategoriasView from "@/views/CategoriasView.vue";
import ProdutosView from "@/views/ProdutosView.vue";
import FornecedoresView from "@/views/FornecedoresView.vue";
import EntregasView from "@/views/EntregasView.vue";
import PromocoesView from "@/views/PromocoesView.vue";
import SazonaisView from "@/views/SazonaisView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard/parceiros",
      component: ParceirosView,
    },
    {
      path: "/",
      redirect: "/dashboard/produtos"
    },
    {
      path: "/dashboard/produtos",
      name: "",
      component: ProdutosDashView,
    },
    {
      path: "/dashboard/produtos",
      name: "dashboard",
      component: ProdutosDashView,
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
    {
      path: "/sazonais",
      name: "sazonais",
      component: SazonaisView,
    },
  ],
});

export default router;
