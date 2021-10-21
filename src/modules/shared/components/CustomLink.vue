<template>
  <a v-if="isExternalLink" :href="link.to" target="_blank" class="normal-link">
    {{ link.name }}
  </a>
  <router-link v-else :to="route" v-slot="{ isActive }">
    <!-- href, isActive -->
    <a :class="isActive ? 'is-active' : 'normal-link'">{{ link.name }}</a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isExternalLink() {
      return this.link.to.startsWith('http');
    },

    // Si el params id viene undefined solo mostramos el name de la ruta
    route() {
      return this.link.id === undefined
        ? { name: this.link.to }
        : { name: this.link.to, params: { id: this.link.id } };
    },
  },

  created() {
    // console.log(this.link);
  },
};
</script>

<style scoped>
.is-active {
  color: #246347;
}

.normal-link {
  color: '#c6cc5c5';
}
</style>
