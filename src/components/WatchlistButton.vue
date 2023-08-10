<template>
  <button v-if="movie.isToWatch == false" @click="addWatchlist">
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
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis: "A default movie synopsis.",
        }
      }
    }
  },
  methods: {
    addWatchlist() {
      this.$emit("addToWatchlist", this.movie.id);
    },
    removeWatchlist() {
      this.$emit("removeFromWatchlist", this.movie.id);
    }
  }
};
</script>

<style scope lang="scss"></style>
