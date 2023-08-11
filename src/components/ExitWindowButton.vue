<template>
  <button @click="hideWindow">X</button>
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

<style scoped lang="scss"></style>
