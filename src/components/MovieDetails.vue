<template>
  <div class="details" :class="{ detailsShown: isShown }">
    <ExitWindowButton @hide-window="hideWindow"></ExitWindowButton>
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.year }} - {{ movie.director }}</p>
    <p>Rating: {{ ratingAverage }}</p>
    <p>{{ movie.synopsis }}</p>
  </div>
</template>

<script>
import ExitWindowButton from "./ExitWindowButton.vue";

export default {
  name: "MovieDetails",
  props: {
    isShown: {
      type: Boolean,
      default() {
        return false;
      },
    },
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
  components: { ExitWindowButton },
  methods: {
    hideWindow() {
      this.$emit("hideWindow", true);
    },
  },
  computed: {
    ratingAverage() {
      if (this.movie.rating.length >= 1) {
        let sum = 0;
        for (let i = 0; i < this.movie.rating.length; i++) {
          sum += this.movie.rating[i];
        }
        let avg = sum / this.movie.rating.length;
        return Math.round(avg * 10) / 10;
      } else {
        return "No ratings";
      }
    },
  },
};
</script>
