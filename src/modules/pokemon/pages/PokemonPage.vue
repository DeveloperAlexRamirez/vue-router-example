<template>
  <h3>Pokemon: # {{ id }}</h3>
  <div v-if="pokemon" class="container">
    <div class="pokemon-container">
      <img :src="pokemon.sprites.front_default" alt="pokemon.name" />
    </div>
  </div>
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
      pokemon: null,
    };
  },

  created() {
    this.getPokemonById();
  },

  methods: {
    async getPokemonById() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((response) => response.json());

        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push('/');
        console.log('No hay nada que hacer aqui');
      }
    },
  },

  watch: {
    // Hace referencia al id de props
    id() {
      this.getPokemonById();
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
