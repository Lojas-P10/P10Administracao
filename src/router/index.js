import { createRouter, createWebHistory } from 'vue-router'
import ParceirosView from '@/views/Dashboard/ParceirosView.vue'
import VendasView from '@/views/Relatorios/VendasView.vue'
import ProdutosRela from '@/views/Relatorios/ProdutosView.vue'
import DescontosRela from '@/views/Relatorios/DescontosView.vue'
import CategoriasRela from '@/views/Relatorios/CategoriasView.vue'
import SazonaisRela from '@/views/Relatorios/SazonaisView.vue'
import MarcasRela from '@/views/Relatorios/MarcasView.vue'
import TagsRela from '@/views/Relatorios/TagsView.vue'
import ProdutosDashView from '@/views/Dashboard/ProdutosView.vue'
import CategoriasView from '@/views/CategoriasView.vue'
import LoginView from '@/views/LoginView.vue'
import ProdutosView from '@/views/ProdutosView.vue'
import FornecedoresView from '@/views/Relatorios/FornecedoresView.vue'
import EntregasView from '@/views/EntregasView.vue'
import PromocoesView from '@/views/PromocoesView.vue'
import SazonaisView from '@/views/SazonaisView.vue'
import BlankView from '@/layouts/BlankView.vue'
import FullView from '@/layouts/FullView.vue'

import { useAuthStore } from '@/stores/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BlankView,
      children: [
        {
          path: '/',
          name: 'login',
          component: LoginView
        }
      ]
    },
    { 
      path: '/',
      component: FullView,
      children: [
        {
          path: '/dashboard/parceiros',
          component: ParceirosView
        },
        {
          path: '/dashboard/produtos',
          name: '',
          component: ProdutosDashView
        },
        {
          path: '/vendas',
          name: '',
          component: VendasView
        },
        {
          path: '/produtos',
          name: '',
          component: ProdutosRela
        },
        {
          path: '/categorias',
          name: '',
          component: CategoriasRela
        },
        {
          path: '/sazonais',
          name: '',
          component: SazonaisRela
        },
        {
          path: '/marcas',
          name: '',
          component: MarcasRela
        },
        {
          path: '/tags',
          name: '',
          component: TagsRela
        },
        {
          path: '/descontos',
          name: '',
          component: DescontosRela
        },
        {
          path: '/dashboard/produtos',
          name: 'dashboard',
          component: ProdutosDashView
        },
        {
          path: '/categorias',
          name: 'categorias',
          component: CategoriasView
        },
        {
          path: '/produtos',
          name: 'produtos',
          component: ProdutosView
        },
        {
          path: '/fornecedores',
          name: 'fornecedores',
          component: FornecedoresView
        },
        {
          path: '/entregas',
          name: 'entregas',
          component: EntregasView
        },
        {
          path: '/promocoes',
          name: 'promocoes',
          component: PromocoesView
        },
        {
          path: '/sazonais',
          name: 'sazonais',
          component: SazonaisView
        },
      ],
    },
  ],
});
router.beforeEach(async (to) => {
  const publicPages = [ "/"];
  const user = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (user && !auth.token) {
    auth.returnUrl = to.fullPath;
    return "/dashboard/produtos";
  }
});

export default router
