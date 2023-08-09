<template>
  <div class="movie">
    <img :src="movie.poster" alt="" />
    <h3>{{ movie.title }}</h3>
    <FavouritesButton class="btn"></FavouritesButton>
    <WatchlistButton class="btn"></WatchlistButton>
  </div>
</template>

<script>
import FavouritesButton from "./FavouritesButton.vue";
import WatchlistButton from "./WatchlistButton.vue";

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
