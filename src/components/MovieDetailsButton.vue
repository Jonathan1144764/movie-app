<template>
  <button class="details-btn" @click="showDetails">See details</button>
</template>

<script>
export default {
  name: "MovieDetailsButton",
  methods: {
    showDetails() {
      this.$emit("showDetails", true);
    },
  },
};
</script>
