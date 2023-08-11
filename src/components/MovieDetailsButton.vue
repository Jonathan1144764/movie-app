<template>
  <button v-if="this.isShown == false">See details</button>
  <button v-else>X</button>
</template>

<script>
export default {
  name: "MovieDetailsButton",
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
      isShown: false,
    };
  },
  methods: {
    showDetails() {
      this.$emit("showDetails", this.movie.id);
      console.log(this.movie.id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
