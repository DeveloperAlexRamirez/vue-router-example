<template>
  <div class="container">
    <nav class="nav">
      <!-- <div class="nav__home">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </div>

      <div class="nav__othersPages">
        <router-link :to="{ name: 'pokemon-id', params: { id: 79 } }"
          >Pokemon</router-link
        >
        <router-link :to="{ name: 'about' }">About</router-link>
      </div>  -->
      <CustomLink v-for="link in links" :key="link.to" :link="link" />
    </nav>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data() {
    return {
      links: [
        { to: 'pokemon-home', name: 'Home' },
        { to: 'pokemon-about', name: 'Pokemon About' },
        { to: 'pokemon-id', name: 'Por ID', id: 151 },

        { to: 'dbz-about', name: 'DBZ-About' },
        { to: 'dbz-characters', name: 'DBZ-Characters' },

        { to: 'https://google.com', name: 'Google' },
      ],
    };
  },

  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink')),
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #41b883;
  padding: 2rem 0;
}

a {
  margin-right: 2rem;
}

/* la clase se activa dependiendo la ruta en la que estemos */
a.router-link-exact-active {
  color: #246347;
}

.nav {
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  margin: 0 6rem;
  justify-content: space-between;
}

@media screen and (min-width: 468px) {
  .nav {
    flex-direction: row;
  }
}

@media screen and (min-width: 1224px) {
  .nav {
    margin: 0 auto;
  }
}
</style>
