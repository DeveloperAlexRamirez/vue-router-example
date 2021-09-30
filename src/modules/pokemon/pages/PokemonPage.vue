<template>
  <h1>Pokemon page</h1>
  <h3>{{ id }}</h3>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      // id: null,
    };
  },

  created() {
    // const { id } = this.$route.params;
    // this.id = id;
  },
};
</script>
