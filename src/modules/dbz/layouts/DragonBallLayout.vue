<template>
  <div class="dragon-layout">
    <h1>Hello world DragonBallLayout</h1>
    <router-view />
  </div>
</template>

<style scoped>
.dragon-layout {
  background-color: #e2551c;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
