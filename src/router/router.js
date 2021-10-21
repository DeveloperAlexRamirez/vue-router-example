import { createRouter, createWebHashHistory } from 'vue-router';
import isAuthenticatedGuard from './auth-guard';

const routes = [
  {
    path: '/',
    redirect: '/pokemon',
  },

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
    // Guard
    // TODO: una vez que este dentro de las rutas ya esta validado el usuario para navegar en ellas, pero al salirse a rutas de pokemon entonces otra vez se tendra que validar
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "DragonBallLayout" */ '../modules/dbz/layouts/DragonBallLayout'
      ),

    children: [
      {
        path: 'about',
        name: 'dbz-about',
        // TODO: Pero podemons aplicarlo en una ruta en particular si asi lo deseamos
        beforeEnter: [isAuthenticatedGuard],
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

// Como su nombre indica, los guardias de navegación proporcionados por vue-router se utilizan principalmente para proteger las navegaciones, ya sea redirigiéndolas o cancelándolas. Hay un número de maneras de enganchar en el proceso de navegación de la ruta: globalmente, por ruta, o en el componente.

// router.beforeEach((to, from, next) => {
//   const random = Math.random() * 100;

//   if (random > 50) {
//     next();
//   } else {
//     console.log(random, 'Bloqueado por el beforeEach guard');
//     next({ name: 'pokemon-home' });
//   }
// });

// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;

//     if (random > 50) {
//       resolve(true);
//     } else {
//       console.log(random, 'Bloqueado por el beforeEach guard');
//       resolve(false);
//     }
//   });
// };

// // Guard asincrono
// router.beforeEach(async (to, from, next) => {
//   const autorized = await canAccess();

//   autorized ? next() : next({ name: 'pokemon-home' });
// });

export default router;
