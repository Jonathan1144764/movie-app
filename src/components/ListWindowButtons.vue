<template>
  <div class="window-buttons">
    <button @click="showFavourites">
      {{ moviesFavourited }} favourite movies
    </button>
    <button @click="showToWatch">
      {{ moviesToWatch }} movies you want to watch
    </button>
  </div>
</template>

<script>
export default {
  name: "ListWindowButtons",
  props: {
    moviesToWatch: {
      type: Number,
      default() {
        return 0;
      },
    },
    moviesFavourited: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  methods: {
    showFavourites() {
      this.$emit("showFavourites", true);
    },
    showToWatch() {
      this.$emit("showToWatch", true);
    },
  },
};
</script>

<style scoped lang="scss"></style>
