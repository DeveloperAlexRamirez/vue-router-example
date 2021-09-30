<template>
  <h1>About page</h1>
  <h3>{{ name }}</h3>
  <button @click="onChangeName">Change name</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Alex',
    };
  },

  methods: {
    onChangeName() {
      this.name = 'Ramírez';
    },
  },

  beforeCreate() {
    console.log('beforeCreate');
  },

  created() {
    console.log('created');
    // Es buen lugar para Peticiones HTTP
  },

  beforeMount() {
    console.log('beforeMount');
  },

  mounted() {
    console.log('mounted');
  },

  beforeUpdate() {
    console.log('beforeUpdate');
  },

  updated() {
    console.log('updated');
  },

  activated() {
    console.log('activated');
  },

  deactivated() {
    console.log('deactivated');
  },

  beforeUnmount() {
    console.log('beforeUnmount');
  },

  unmounted() {
    console.log('unmounted');
  },

  errorCaptured() {
    console.log('errorCaptured');
  },

  renderTracked() {
    console.log('renderTracked');
  },

  renderTriggered() {
    console.log('renderTriggered');
  },
};
</script>
