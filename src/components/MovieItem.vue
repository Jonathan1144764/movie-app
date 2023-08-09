<template>
  <img :src="movie.poster" alt="" />
  <FavouritesButton></FavouritesButton>
</template>

<script>
import FavouritesButton from "./FavouritesButton.vue";

export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      default() {
        return {
          id: 0,
          name: "Default",
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
  },
};
</script>

<style scoped lang="scss"></style>
