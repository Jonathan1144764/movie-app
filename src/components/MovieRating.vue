<template>

</template>

<script>
export default {
    name: "MovieRating",
    methods: {
        addRating() {
            this.$emit("addRating")
        }
    }
}
</script>

<style scoped lang="scss"></style>