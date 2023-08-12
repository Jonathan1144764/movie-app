<template>
  <h2>Favourite Movies</h2>
  <div class="favourite-movie-list">
    <MovieItem
      v-for="movie in moviesFavouritedList"
      :movie="movie"
      :key="movie.id"
      @removeFromFavourites="removeFromFavourites"
      @addToWatchlist="addToWatchlist"
      @removeFromWatchlist="removeFromWatchlist"
    ></MovieItem>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
  name: "MovieFavouriteList",
  props: {
    moviesFavouritedList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    MovieItem,
  },
  methods: {
    addToWatchlist(id) {
      this.$emit("addToWatchlist", id);
    },
    removeFromWatchlist(id) {
      this.$emit("removeFromWatchlist", id);
    },
    removeFromFavourites(id) {
      this.$emit("removeFromFavourites", id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
