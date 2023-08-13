<template>
  <div class="star-rating-wrapper">
    <div class="star">
      <div class="star-inner" id="rs1" @click="addRating"></div>
    </div>
    <div class="star">
      <div class="star-inner" id="rs2" @click="addRating"></div>
    </div>
    <div class="star">
      <div class="star-inner" id="rs3" @click="addRating"></div>
    </div>
    <div class="star">
      <div class="star-inner" id="rs4" @click="addRating"></div>
    </div>
    <div class="star">
      <div class="star-inner" id="rs5" @click="addRating"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieRating",
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
    addRating(event) {
      let rating = Number(event.target.id.substring(2, 3));
      this.$emit("addRating", this.movie.id, rating);
    },
  },
};
</script>

<style scoped lang="scss">
.star-rating-wrapper {
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.star {
  width: 30px;
  height: 30px;
  background-color: black;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  cursor: pointer;
  &:hover .star-inner {
    background-color: yellow;
  }
}

.star-inner {
  width: 26px;
  height: 26px;
  margin: auto;
  margin-top: 2px;
  background-color: #fff;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}
</style>
