<template>
  <button v-if="movie.isFavourited == false" @click="addFavourite">
    Add to favourites
  </button>
</template>

<script>
export default {
  name: "FavouritesButton",
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
  methods: {
    addFavourite() {
      this.$emit("addToFavourites", this.movie.id);
      console.log("clicked");
    },
    removefavourite() {
      this.$emit("removeFromFavourites", 0);
    },
  },
};
</script>

<style scoped lang="scss"></style>
