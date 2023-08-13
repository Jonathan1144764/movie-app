<template>
  <div class="movie">
    <img :src="movie.poster" alt="" />
    <h3>{{ movie.title }}</h3>
    <MovieRating></MovieRating>
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
    <MovieDetailsButton @showDetails="showDetails"></MovieDetailsButton>
    <div :class="{ detailsShown: isShown }" class="details-wrapper">
      <MovieDetails :movie="movie" @hide-window="hideDetails"></MovieDetails>
    </div>
  </div>
</template>

<script>
import FavouritesButton from "./FavouritesButton.vue";
import WatchlistButton from "./WatchlistButton.vue";
import MovieDetailsButton from "./MovieDetailsButton.vue";
import MovieDetails from "./MovieDetails.vue";
import MovieRating from "./MovieRating.vue";

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
    MovieRating,
  },
  data() {
    return {
      isShown: false,
    };
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
    showDetails() {
      this.isShown = true;
    },
    hideDetails() {
      this.isShown = false;
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

.details-wrapper {
  display: none;
}
.detailsShown {
  display: block;
}
</style>
