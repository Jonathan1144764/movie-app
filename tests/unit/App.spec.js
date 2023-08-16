import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  it("listens for an event to add movie to watchlist and change movie isToWatch data to true", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
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
      ],
      moviesToWatch: 0,
      moviesToWatchList: [],
    });
    await wrapper.vm.addToWatchlist(1);
    expect(wrapper.vm.addToWatchlist).toBeTruthy();
    expect(wrapper.vm.movies[0].isToWatch).toBe(true);
    expect(wrapper.vm.moviesToWatch).toBe(1);
    expect(wrapper.vm.moviesToWatchList[0].id).toBe(1);
  });
  it("listens for an event to remove movie from watchlist and change movie isToWatch data to false", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      movies: [
        {
          id: 1,
          title: "Monty Python and the Holy Grail",
          year: 1975,
          director: "Terry Gilliam",
          poster: "https://flxt.tmsimg.com/assets/p629_p_v8_af.jpg",
          isFavourited: false,
          isToWatch: true,
          rating: [],
          synopsis:
            "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
        },
      ],
      moviesToWatch: 1,
      moviesToWatchList: [
        {
          id: 1,
          title: "Monty Python and the Holy Grail",
          year: 1975,
          director: "Terry Gilliam",
          poster: "https://flxt.tmsimg.com/assets/p629_p_v8_af.jpg",
          isFavourited: false,
          isToWatch: true,
          rating: [],
          synopsis:
            "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
        },
      ],
    });
    await wrapper.vm.removeFromWatchlist(1);
    expect(wrapper.vm.removeFromWatchlist).toBeTruthy();
    expect(wrapper.vm.movies[0].isToWatch).toBe(false);
    expect(wrapper.vm.moviesToWatch).toBe(0);
    expect(wrapper.vm.moviestoWatchList).toBeFalsy();
  });
  it("listens for an event to add movie to favourites and change movie isFavourited data to true", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
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
      ],
      moviesFavourited: 0,
      moviesFavouritedList: [],
    });
    await wrapper.vm.addToFavourites(1);
    expect(wrapper.vm.addToFavourites).toBeTruthy();
    expect(wrapper.vm.movies[0].isFavourited).toBe(true);
    expect(wrapper.vm.moviesFavourited).toBe(1);
    expect(wrapper.vm.moviesFavouritedList[0].id).toBe(1);
  });
  it("listens for an event to remove movie from favourites and change movie isFavourited data to false", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      movies: [
        {
          id: 1,
          title: "Monty Python and the Holy Grail",
          year: 1975,
          director: "Terry Gilliam",
          poster: "https://flxt.tmsimg.com/assets/p629_p_v8_af.jpg",
          isFavourited: true,
          isToWatch: false,
          rating: [],
          synopsis:
            "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
        },
      ],
      moviesFavourited: 1,
      moviesFavouritedList: [
        {
          id: 1,
          title: "Monty Python and the Holy Grail",
          year: 1975,
          director: "Terry Gilliam",
          poster: "https://flxt.tmsimg.com/assets/p629_p_v8_af.jpg",
          isFavourited: true,
          isToWatch: false,
          rating: [],
          synopsis:
            "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
        },
      ],
    });
    await wrapper.vm.removeFromFavourites(1);
    expect(wrapper.vm.removeFromFavourites).toBeTruthy();
    expect(wrapper.vm.movies[0].isFavourited).toBe(false);
    expect(wrapper.vm.moviesFavourited).toBe(0);
    expect(wrapper.vm.moviesFavouritedList).toStrictEqual([]);
  });
  it("listens for an event to add rating to movies data rating", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
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
      ],
    });
    await wrapper.vm.addRating(1, 2);
    expect(wrapper.vm.addRating).toBeTruthy();
    expect(wrapper.vm.movies[0].rating[0]).toBe(2);
  });
  it("listens for an event that changes the favouritesShown data to true when false", async () => {
    const wrapper = shallowMount(App);
    await wrapper.vm.showFavourites();
    expect(wrapper.vm.showFavourites).toBeTruthy();
    expect(wrapper.vm.favouritesShown).toBe(true);
  });
  it("listens for an event that changes the favouritesShown data to false when true", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({ favouritesShown: true });
    await wrapper.vm.hideFavouritesWindow();
    expect(wrapper.vm.hideFavouritesWindow).toBeTruthy();
    expect(wrapper.vm.favouritesShown).toBe(false);
  });
  it("listens for an event that changes the toWatchShown data to true when false", async () => {
    const wrapper = shallowMount(App);
    await wrapper.vm.showToWatch();
    expect(wrapper.vm.showToWatch).toBeTruthy();
    expect(wrapper.vm.toWatchShown).toBe(true);
  });
  it("listens for an event that changes the toWatchShown data to false when true", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({ toWatchShown: true });
    await wrapper.vm.hideToWatchWindow();
    expect(wrapper.vm.hideToWatchWindow).toBeTruthy();
    expect(wrapper.vm.toWatchShown).toBe(false);
  });
});
