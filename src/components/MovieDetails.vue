<template>
  <div class="details">
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.year }} - {{ movie.director }}</p>
    <p>{{ movie.synopsis }}</p>
  </div>
</template>

<script>
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
};
</script>

<style scoped lang="scss"></style>
