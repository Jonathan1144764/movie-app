<template>
  <button @click="addFavourite">Add to favourites</button>
</template>

<script>
export default {
  name: "FavouritesButton",
  methods: {
    addFavourite() {
      this.$emit("addToFavourites", 1);
    },
    removefavourite() {
      this.$emit("removeFromFavourites", 0);
    },
  },
};
</script>

<style scoped lang="scss"></style>
