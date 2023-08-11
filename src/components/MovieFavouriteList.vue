<template>
  <h2>Favourite Movies</h2>
  <div class="favourite-movie-list">
    <MovieItem
      v-for="movie in moviesFavouritedList"
      :movie="movie"
      :key="movie.id"
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
};
</script>

<style scoped lang="scss"></style>
