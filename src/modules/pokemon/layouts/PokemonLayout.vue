<template>
  <div class="pokemon-layout">
    <h1>Pokemon Layout</h1>
    <router-view />
  </div>
</template>

<style scoped>
.pokemon-layout {
  background-color: #41b883;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
