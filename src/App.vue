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
          poster: "https://flxt.tmsimg.com/assets/p629_p_v8_af.jpg",
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
          poster:
            "https://images.moviesanywhere.com/246283329b6fbec9158c89d2c8a76bfe/3f2f72c0-6820-413f-a347-173d330d27ed.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
        },
        {
          id: 3,
          title: "Withnail & I",
          year: 1987,
          director: "Bruce Robinson",
          poster:
            "https://s3.amazonaws.com/criterion-production/films/979e33ba0898b1efdb6edc222952fb46/7n9ZlJZc3CMZ8Mi0VjmApO7EHyXcU5_large.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "In 1969, two substance-abusing, unemployed actors retreat to the countryside for a holiday that proves disastrous.",
        },
        {
          id: 4,
          title: "Threads",
          year: 1984,
          director: "Mick Jackson",
          poster:
            "https://m.media-amazon.com/images/I/81CHD7nBT2L._AC_UF894,1000_QL80_.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "The effects of a nuclear holocaust on the working class city of Sheffield, England and the eventual long-term effects of nuclear war on civilization.",
        },
        {
          id: 5,
          title: "Come and See",
          year: 1985,
          director: "Elem Klimov",
          poster:
            "https://s3.amazonaws.com/criterion-production/films/9259a40bf9ceb623f565a9629416e6cc/ZMwlUFL3CDDMgsvBiMLhyDcWcdSAli_original.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
        },
        {
          id: 6,
          title: "Starship Troopers",
          year: 1997,
          director: "Paul Verhoeven",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNWExNzg3MmMtYjc3MS00MzFlLWJiOWQtNWYxZTgxNjhlZTQ2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "Humans in a fascist, militaristic future wage war with giant alien bugs.",
        },
        {
          id: 7,
          title: "Control",
          year: 2007,
          director: "Anton Corbijn",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNTEzOTYwMTcxN15BMl5BanBnXkFtZTcwNTgyNjI1MQ@@._V1_.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "A profile of Ian Curtis, the enigmatic singer of Joy Division whose personal, professional, and romantic troubles led him to commit suicide at the age of 23.",
        },
        {
          id: 8,
          title: "The Devil Rides Out",
          year: 1968,
          director: "Terence Fisher",
          poster: "https://flxt.tmsimg.com/assets/p47034_v_v8_aa.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis: "Devil worshipers plan to convert two new victims.",
        },
        {
          id: 9,
          title: "Trading Places",
          year: 1983,
          director: "John Landis",
          poster: "https://i.ebayimg.com/images/g/pE8AAOSwmCVY86RS/s-l1600.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires.",
        },
        {
          id: 10,
          title: "Gojira",
          year: 1954,
          director: "Ishiro Honda",
          poster:
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Gojira_1954_Japanese_poster.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "American nuclear-weapons testing results in the creation of a seemingly unstoppable, dinosaur-like beast.",
        },
        {
          id: 11,
          title: "The Dead Zone",
          year: 1983,
          director: "David Cronenberg",
          poster:
            "https://image.tmdb.org/t/p/w500/9yTVaeS8eIkOpbwIycVFm7EQrgF.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "A man awakens from a coma to discover he has a psychic ability.",
        },
        {
          id: 12,
          title: "The Forest of Love",
          year: 2019,
          director: "Sion Sono",
          poster:
            "https://images.sr.roku.com/idType/roku/context/global/id/f6279d51fa995a20ae46c01c0903b02f/images/gracenote/assets/p17396179_b_v12_aa.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "A small group of student filmmakers and a shy young girl with strict parents are simultaneously manipulated, seduced and abused by an older man. They follow his bidding, even when murder is involved.",
        },
        {
          id: 13,
          title: "Gummo",
          year: 1997,
          director: "Harmony Korine",
          poster: "https://flxt.tmsimg.com/assets/p19874_p_v8_aa.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "Lonely residents of a tornado-stricken Ohio town wander the deserted landscape trying to fulfill their boring, nihilistic lives.",
        },
        {
          id: 14,
          title: "Shadows",
          year: 1954,
          director: "John Cassavetes",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMmYzMzBmYTQtYmRkZC00MjdjLTg5MzctYjU1OWRjYjdlYmU1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "Cassavetes' jazz-scored improvisational film explores interracial friendships and relationships in Beat-Era (1950s) New York City.",
        },
        {
          id: 15,
          title: "City of God",
          year: 2002,
          director: "Fernando Meirelles",
          poster: "https://www.miramax.com/assets/City-of-God1.png",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        },
        {
          id: 16,
          title: "Kung Fu Hustle",
          year: 2004,
          director: "Stephen Chow",
          poster:
            "https://www.tvguide.com/a/img/catalog/provider/1/2/1-776253416.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious 'Axe Gang' while residents of a housing complex exhibit extraordinary powers in defending their turf.",
        },
        {
          id: 17,
          title: "The Fearless Vampire Killers",
          year: 1967,
          director: "Roman Polanski",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNzFiYTY5YzktYjU2My00OTdjLWE3NDEtNzM1ZTFhNjdiYTM3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "A noted professor and his dim-witted apprentice fall prey to their inquiring vampires, while on the trail of the ominous damsel in distress.",
        },
        {
          id: 18,
          title: "Dawn of the Dead",
          year: 1978,
          director: "George A. Romero",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMzc1YTIyNjctYzhlNy00ZmYzLWI2ZWQtMzk4MmQwYzA0NGQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "During an escalating zombie epidemic, two Philadelphia SWAT team members, a traffic reporter and his TV executive girlfriend seek refuge in a secluded shopping mall.",
        },
        {
          id: 19,
          title: "Cruising",
          year: 1980,
          director: "William Friedkin",
          poster:
            "https://filmartgallery.com/cdn/shop/products/Cruising-Vintage-Movie-Poster-Original-40x60.jpg?v=1629781413",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "A police detective goes undercover in the underground S&M gay subculture of New York City to catch a serial killer who is preying on gay men.",
        },
        {
          id: 20,
          title: "The Breakfast Club",
          year: 1985,
          director: "John Hughes",
          poster: "https://flxt.tmsimg.com/assets/p8670_p_v10_aa.jpg",
          isFavourited: false,
          isToWatch: false,
          rating: [],
          synopsis:
            "Five high school students meet in Saturday detention and discover how they have a great deal more in common than they thought.",
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

header {
  width: 100%;
  background-color: #222;
  color: #fff;
  position: fixed;
  z-index: 10;

  .header-flex {
    height: 10vh;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
  }
}

section {
  padding: 20px 0;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-weight: 500;
  }
}

button {
  cursor: pointer;
}

.container {
  width: 90%;
  max-width: 1400px;
  margin: auto;
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
  padding-top: calc(10vh + 20px);
  background: radial-gradient(#376186, #180e46);

  h2 {
    color: #e1c90a;
  }
}

.movie-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 1.5rem;

  .movie {
    padding: 10px;
    border-radius: 10px;
    background-color: #377fbf;
    box-shadow: 2px 5px 10px black;
    transition: all 0.2s linear;
    position: relative;

    &:hover {
      transform: scale(1.1);
    }

    .movie-poster {
      width: 80%;
      height: 325px;
      margin: auto;
      margin-bottom: 1.5rem;
      background-size: cover;
      background-position: center;
    }

    h3 {
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .star-rating-wrapper {
      margin-bottom: 1rem;
    }

    .list-buttons {
      width: 100%;
      margin: auto;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;

      button {
        padding: 5px 10px;
        background-color: #e1c90a;
        border: none;
        border-radius: 10px;
      }
    }

    .details-btn {
      padding: 5px 10px;
      background-color: #aa8d11;
      border: none;
      border-radius: 10px;
    }

    .details {
      width: 90%;
      padding: 10px;
      background-color: #180e46;
      border-radius: 10px;
      color: #fff;
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s linear;

      .exit-window-btn {
        color: #e1c90a;
      }
    }

    .details p:nth-child(4) {
      margin-bottom: 1rem;
      color: #e1c90a;
    }

    .detailsShown {
      display: block;
      animation: fade-in 0.5s linear;
    }
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.favourite-movies-list,
.movies-to-watch-list {
  background: radial-gradient(#555, #222);
  position: absolute;
  top: 10vh;
  left: 100%;
  width: 100%;
  transition: all 0.5s linear;

  h2 {
    margin-bottom: 1rem;
    color: #e1c90a;
  }
}

.favouritesShown,
.toWatchShown {
  transform: translateX(-100%);
}

.exit-window-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #fff;
  float: right;
}

.star-rating-wrapper {
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  .star {
    width: 36px;
    height: 36px;
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

    .star-inner {
      width: 32px;
      height: 32px;
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
  }
}

@media screen and (min-width: 480px) {
  header {
    .header-flex {
      flex-direction: row;
    }
  }

  .movie-list-grid {
    .movie {
      .list-buttons {
        width: 85%;
      }
    }
  }
}

@media screen and (min-width: 576px) {
  section {
    padding: 40px 0;
  }

  .movie-list-all {
    padding-top: calc(10vh + 40px);
  }

  .movie-list-grid {
    .movie {
      .details {
        width: 80%;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  section {
    h2 {
      margin-bottom: 2rem;
    }
  }

  .movie-list-grid {
    .movie {
      .list-buttons {
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .movie-list-grid {
    .movie {
      .list-buttons {
        width: 70%;
        flex-direction: column;

        button {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  header {
    h1 {
      font-size: 2rem;
    }
  }

  section {
    padding: 60px;

    h2 {
      font-size: 1.6rem;
    }
  }

  .movie-list-all {
    padding-top: calc(10vh + 60px);
  }

  .movie-list-grid {
    .movie {
      .list-buttons {
        width: 100%;
        flex-direction: row;

        button {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
