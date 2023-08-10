<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <MovieList :movies="movies" @addToWatchlist="addToWatchlist"></MovieList>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MovieList from "./components/MovieList.vue";

export default {
  name: "App",
  data() {
    return {
      moviesFavourited: 0,
      moviesFavouritedList: [],
      moviesToWatch: 0,
      moviesToWatchList: [],
      movies: [
        {
          id: 1,
          title: "Monty Python and the Holy Grail",
          year: 1975,
          director: "Terry Gilliam",
          poster: "https://placehold.co/250x300/55ffcc/000",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
        },
      ],
    };
  },
  components: {
    // HelloWorld,
    MovieList,
  },
  methods: {
    addToWatchlist(id) {
      console.log("arrived3");
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].id == id) {
          this.movies[i].isToWatch = true;
          console.log(this.movies[i].isToWatch);
        }
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
