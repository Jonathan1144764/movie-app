<template>
  <div class="movie">
    <img :src="movie.poster" alt="" />
    <h3>{{ movie.title }}</h3>
    <div class="list-buttons">
      <FavouritesButton
        :movie="movie"
        class="btn"
        @addToFavourites="addToFavourites"
        @removeFromFavourites="removeFromFavourites"
      ></FavouritesButton>
      <WatchlistButton
        :movie="movie"
        class="btn"
        @addToWatchlist="addToWatchlist"
        @removeFromWatchlist="removeFromWatchlist"
      ></WatchlistButton>
    </div>
    <MovieDetailsButton :movie="movie"></MovieDetailsButton>
    <MovieDetails :movie="movie"></MovieDetails>
  </div>
</template>

<script>
import FavouritesButton from "./FavouritesButton.vue";
import WatchlistButton from "./WatchlistButton.vue";
import MovieDetailsButton from "./MovieDetailsButton.vue";
import MovieDetails from "./MovieDetails.vue";

export default {
  name: "MovieItem",
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
        };
      },
    },
  },
  components: {
    FavouritesButton,
    WatchlistButton,
    MovieDetailsButton,
    MovieDetails,
  },
  methods: {
    addToWatchlist(id) {
      this.$emit("addToWatchlist", id);
    },
    removeFromWatchlist(id) {
      this.$emit("removeFromWatchlist", id);
    },
    addToFavourites(id) {
      this.$emit("addToFavourites", id);
    },
    removeFromFavourites(id) {
      this.$emit("removeFromFavourites", id);
    },
  },
};
</script>

<style scoped lang="scss">
img {
  display: inline-block;
}

.btn {
  margin: 0 1rem;
}

.movie {
  position: relative;
}
</style>
