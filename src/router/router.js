import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // TODO: Pokemon Routes
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ '../modules/pokemon/layouts/PokemonLayout'
      ),

    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage'
          ),
      },

      {
        path: 'about',
        name: 'pokemon-about',
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage'
          ),
      },

      {
        path: 'pokemonid/:id',
        name: 'pokemon-id',
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'
          ),
        props: (route) => {
          // const { id } = route.params;
          // Validamos si el id es un NaN
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },

      {
        path: '',
        redirect: { name: 'pokemon-about' },
      },
    ],
  },

  // TODO: Dragon Ball Z Routes
  {
    path: '/bdz',
    name: 'dbz',
    component: () =>
      import(
        /* webpackChunkName: "DragonBallLayout" */ '../modules/dbz/layouts/DragonBallLayout'
      ),

    children: [
      {
        path: 'about',
        name: 'dbz-about',
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ '../modules/dbz/pages/AboutPage'
          ),
      },

      {
        path: 'characters',
        name: 'dbz-characters',
        component: () =>
          import(
            /* webpackChunkName: "Characters" */ '../modules/dbz/pages/Characters'
          ),
      },

      {
        path: '',
        redirect: { name: 'dbz-characters' },
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    component: () =>
      import(
        /* webpackChunkName: "NoPageFound" */ '../modules/shared/pages/NoPageFound'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// TODO: Hola este es un texto de ejemplo

export default router;
