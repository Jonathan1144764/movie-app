<template>
  <button v-if="this.isShown == false" @click="showDetails">See details</button>
  <button v-else @click="hideDetails">X</button>
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
      this.isShown = true;
      console.log("emitted");
    },
    hideDetails() {
      this.$emit("hideDetails", this.movie.id);
      this.isShown = false;
    },
  },
};
</script>

<style scoped lang="scss"></style>
