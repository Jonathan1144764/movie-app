<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>You have {{ moviesFavourited }} favourite movies.</p>
  <p>You have {{ moviesToWatch }} you want to watch.</p>
  <MovieList
    :movies="movies"
    @addToWatchlist="addToWatchlist"
    @removeFromWatchlist="removeFromWatchlist"
    @addToFavourites="addToFavourites"
    @removeFromFavourites="removeFromFavourites"
  ></MovieList>
  <MovieFavouriteList
    :moviesFavouritedList="moviesFavouritedList"
    @addToWatchlist="addToWatchlist"
    @removeFromWatchlist="removeFromWatchlist"
    @removeFromFavourites="removeFromFavourites"
  ></MovieFavouriteList>
  <MovieWatchlist
    :moviesToWatchList="moviesToWatchList"
    @removeFromWatchlist="removeFromWatchlist"
    @addToFavourites="addToFavourites"
    @removeFromFavourites="removeFromFavourites"
  ></MovieWatchlist>
</template>

<script>
import MovieList from "./components/MovieList.vue";
import MovieFavouriteList from "./components/MovieFavouriteList.vue";
import MovieWatchlist from "./components/MovieWatchlist.vue";

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
        {
          id: 2,
          title: "Jaws",
          year: 1975,
          director: "Steven Spielberg",
          poster: "https://placehold.co/250x300/55ffcc/000",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
        },
      ],
    };
  },
  components: {
    MovieList,
    MovieFavouriteList,
    MovieWatchlist,
  },
  methods: {
    addToWatchlist(id) {
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].id == id) {
          this.movies[i].isToWatch = true;
          this.moviesToWatchList.push(this.movies[i]);
        }
      }
      this.moviesToWatch++;
    },
    removeFromWatchlist(id) {
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].id == id) {
          this.movies[i].isToWatch = false;
        }
      }
      for (let i = 0; i < this.moviesToWatchList.length; i++) {
        if (this.moviesToWatchList[i].id == id) {
          this.moviesToWatchList.splice(i, 1);
        }
      }
      this.moviesToWatch--;
    },
    addToFavourites(id) {
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].id == id) {
          this.movies[i].isFavourited = true;
          this.moviesFavouritedList.push(this.movies[i]);
        }
      }
      this.moviesFavourited++;
    },
    removeFromFavourites(id) {
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].id == id) {
          this.movies[i].isFavourited = false;
        }
      }
      for (let i = 0; i < this.moviesFavouritedList.length; i++) {
        if (this.moviesFavouritedList[i].id == id) {
          this.moviesFavouritedList.splice(i, 1);
        }
      }
      this.moviesFavourited--;
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
