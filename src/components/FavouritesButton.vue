<template>
  <button v-if="movie.isFavourited == false" @click="addFavourite">
    Add to Favourites
  </button>
  <button @click="removeFavourite">Remove from Favourites</button>
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
  data() {
    return {
      favourited: false,
    };
  },
  methods: {
    addFavourite() {
      this.$emit("addToFavourites", this.movie.id);
      console.log(this.movie.id);
      this.favourited = true;
    },
    removefavourite() {
      this.$emit("removeFromFavourites", this.movie.id);
      console.log(this.movie.id);
      this.favourited = false;
    },
  },
};
</script>

<style scoped lang="scss">
.favourited {
  background-color: #dd000044;
}

.notFavourited {
  background-color: #00dd0044;
}
</style>
