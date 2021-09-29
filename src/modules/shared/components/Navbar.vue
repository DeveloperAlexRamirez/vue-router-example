<template>
  <div class="container">
    <nav class="nav">
      <div class="nav__home">
        <router-link to="/">Home</router-link>
      </div>

      <div class="nav__othersPages">
        <router-link to="/about">About</router-link>
        <router-link to="/id">Pokemon</router-link>
      </div>
    </nav>
  </div>
</template>

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
