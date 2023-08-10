<template>
  <button v-if="isToWatch == false" @click="addWatchlist">
    Add to Watchlist
  </button>
  <button v-else @click="removeWatchlist">Remove from Watchlist</button>
</template>

<script>
export default {
  name: "WatchlistButton",
  props: {
    movie: {
      type: Object,
      default() {
        return {
          id: 0,
          title: "Default",
          year: 1900,
          director: "D Fault",
          poster: "https://placehold.co/200x300/55ffcc/000",
          rating: [],
          synopsis: "A default movie synopsis.",
        };
      },
    },
  },
  data() {
    return {
      isToWatch: false,
    };
  },
  methods: {
    addWatchlist() {
      this.$emit("addToWatchlist", this.movie.id);
      this.isToWatch = true;
    },
    removeWatchlist() {
      this.$emit("removeFromWatchlist", this.movie.id);
      this.isToWatch = false;
    },
  },
};
</script>

<style scope lang="scss"></style>
