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
    expect(wrapper.vm.movies[0].isToWatch).toBe(false);
    expect(wrapper.vm.moviesToWatch).toBe(0);
    expect(wrapper.vm.moviestoWatchList).toBeFalsy();
  });
});
