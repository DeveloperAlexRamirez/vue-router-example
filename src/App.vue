<template>
  <Navbar />
  <div class="app__contenedor">
    <div class="app__contenedorLogo">
      <img src="./assets/logo.png" />
    </div>
    <router-view />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    // para carga peresoza
    Navbar: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "Navbar" */ '@/modules/shared/components/Navbar'
      )
    ),
  },
};
</script>

<style scoped>
.app__contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app__contenedorLogo {
  max-width: 120rem;
}
</style>
