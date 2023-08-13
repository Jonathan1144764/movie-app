import { shallowMount } from "@vue/test-utils";
import MovieItem from "@/components/MovieItem.vue";

describe("MovieItem.vue", () => {
  it("renders the props", () => {
    const movie = {
      id: 0,
      title: "Default",
      year: 1900,
      director: "D Fault",
      poster: "https://placehold.co/200x300/55ffcc/000",
      isFavourited: false,
      isToWatch: false,
      rating: [],
      synopsis: "A default movie synopsis.",
    };
    const wrapper = shallowMount(MovieItem, {
      props: { movie },
    });
    expect(wrapper.find("h3").text()).toBe(movie.title);
  });
  it("listens for an event to add the movie to favourites and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieItem);
    await wrapper.vm.addToFavourites(1);
    expect(wrapper.emitted().addToFavourites[0][0]).toBe(1);
  });
  it("listens for an event to remove the movie from favourites and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieItem);
    await wrapper.vm.removeFromFavourites(1);
    expect(wrapper.emitted().removeFromFavourites[0][0]).toBe(1);
  });
  it("listens for an event to add the movie to watchlist and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieItem);
    await wrapper.vm.addToWatchlist(1);
    expect(wrapper.emitted().addToWatchlist[0][0]).toBe(1);
  });
  it("listens for an event to remove the movie from watchlist and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieItem);
    await wrapper.vm.removeFromWatchlist(1);
    expect(wrapper.emitted().removeFromWatchlist[0][0]).toBe(1);
  });
  it("listens for an event that changes the boolean state of isShown to true when false", async () => {
    const wrapper = shallowMount(MovieItem);
    await wrapper.vm.showDetails();
    expect(wrapper.vm.isShown).toBe(true);
  });
  it("listens for an event that changes the boolean state of isShown to false when true", async () => {
    const wrapper = shallowMount(MovieItem);
    await wrapper.setData({ isShown: true });
    await wrapper.vm.hideDetails();
    expect(wrapper.vm.isShown).toBe(false);
  });
  it("changes the class of MovieDetails wrapper when isShown is true", async () => {
    const wrapper = shallowMount(MovieItem);
    await wrapper.setData({ isShown: true });
    expect(wrapper.find(".details-wrapper").classes()).toContain(
      "detailsShown"
    );
  });
  it("listens for an event to add movie rating and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieItem);
    await wrapper.vm.addRating(1, 2);
    expect(wrapper.emitted().addRating[0][1]).toBe(2);
  });
});
