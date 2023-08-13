<template>
  <header>
    <div class="container">
      <div class="header-flex">
        <h1>Numberboxd</h1>
        <ListWindowButtons
          :moviesFavourited="moviesFavourited"
          :moviesToWatch="moviesToWatch"
          @showFavourites="showFavourites"
          @showToWatch="showToWatch"
        ></ListWindowButtons>
      </div>
    </div>
  </header>

  <MovieList
    :movies="movies"
    @addToWatchlist="addToWatchlist"
    @removeFromWatchlist="removeFromWatchlist"
    @addToFavourites="addToFavourites"
    @removeFromFavourites="removeFromFavourites"
    @addRating="addRating"
  ></MovieList>
  <MovieFavouriteList
    :moviesFavouritedList="moviesFavouritedList"
    :favouritesShown="favouritesShown"
    @addToWatchlist="addToWatchlist"
    @removeFromWatchlist="removeFromWatchlist"
    @removeFromFavourites="removeFromFavourites"
    @addRating="addRating"
    @hideWindow="hideFavouritesWindow"
  ></MovieFavouriteList>
  <MovieWatchlist
    :moviesToWatchList="moviesToWatchList"
    :toWatchShown="toWatchShown"
    @removeFromWatchlist="removeFromWatchlist"
    @addToFavourites="addToFavourites"
    @removeFromFavourites="removeFromFavourites"
    @addRating="addRating"
    @hideWindow="hideToWatchWindow"
  ></MovieWatchlist>
</template>

<script>
import MovieList from "./components/MovieList.vue";
import MovieFavouriteList from "./components/MovieFavouriteList.vue";
import MovieWatchlist from "./components/MovieWatchlist.vue";
import ListWindowButtons from "./components/ListWindowButtons.vue";

export default {
  name: "App",
  data() {
    return {
      moviesFavourited: 0,
      moviesFavouritedList: [],
      moviesToWatch: 0,
      moviesToWatchList: [],
      favouritesShown: false,
      toWatchShown: false,
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
    ListWindowButtons,
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
    addRating(id, rating) {
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].id == id) {
          this.movies[i].rating.push(rating);
        }
        console.log(this.movies[i]);
      }
    },
    showFavourites() {
      this.favouritesShown = true;
    },
    showToWatch() {
      this.toWatchShown = true;
    },
    hideFavouritesWindow() {
      this.favouritesShown = false;
    },
    hideToWatchWindow() {
      this.toWatchShown = false;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: #000;
  color: #fff;
}

section {
  padding: 40px 0;
}

button {
  cursor: pointer;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

.header-flex {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.window-buttons {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    color: #fff;
  }
}

.movie-list-all {
  background: radial-gradient(#376186, #180e46);
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }
}

.movie-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
