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
