import { shallowMount } from "@vue/test-utils";
import WatchlistButton from "@/components/WatchlistButton.vue";

describe("WatchlistButton.vue", () => {
  it("shows the text to add to watchlist when the movie is not in watchlist", () => {
    const buttonText = "Add to Watchlist";
    const wrapper = shallowMount(WatchlistButton);
    expect(wrapper.find("button").text()).toBe(buttonText);
  });
  it("shows the text to remove from watchlist when the movie is in watchlist", async () => {
    const buttonText = "Remove from Watchlist";
    const wrapper = shallowMount(WatchlistButton);
    await wrapper.setProps({
      movie: {
        id: 0,
        title: "Default",
        year: 1900,
        director: "D Fault",
        poster: "https://placehold.co/200x300/55ffcc/000",
        isFavourited: false,
        isToWatch: true,
        rating: [],
        synopsis: "A default movie synopsis.",
      },
    });
    expect(wrapper.find("button").text()).toBe(buttonText);
  });
  it("emits an event to add the movie to watchlist when the button is clicked and the movie is not in watchlist", async () => {
    const wrapper = shallowMount(WatchlistButton);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().addToWatchlist[0][0]).toBe(0);
  });
  it("emits an event to remove the movie from watchlist when the button is clicked and the movie is in watchlist", async () => {
    const wrapper = shallowMount(WatchlistButton);
    await wrapper.setProps({
      movie: {
        id: 0,
        title: "Default",
        year: 1900,
        director: "D Fault",
        poster: "https://placehold.co/200x300/55ffcc/000",
        isFavourited: false,
        isToWatch: true,
        rating: [],
        synopsis: "A default movie synopsis.",
      },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().removeFromWatchlist[0][0]).toBe(0);
  });
});
