<template>
  <div
    class="details-wrapper"
    @showDetails="showDetails"
    :class="{ detailsShown }"
  >
    <MovieDetailsButton :movie="movie"></MovieDetailsButton>
    <div class="details">
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.year }} - {{ movie.director }}</p>
      <p>{{ movie.synopsis }}</p>
    </div>
  </div>
</template>

<script>
import MovieDetailsButton from "./MovieDetailsButton.vue";

export default {
  name: "MovieDetails",
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
  data() {
    return {
      detailsShown: false,
    };
  },
  components: {
    MovieDetailsButton,
  },
  methods: {
    showDetails(id) {
      this.detailsShown = true;
      console.log(id);
    },
  },
};
</script>

<style scoped lang="scss">
// .details-wrapper {
//   display: none;
// }
.detailsShown {
  display: block;
}
</style>
