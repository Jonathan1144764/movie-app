<template>
  <button class="exit-window-btn" @click="hideWindow">X</button>
</template>

<script>
export default {
  name: "ExitWindowButton",
  methods: {
    hideWindow() {
      this.$emit("hideWindow", true);
    },
  },
};
</script>
