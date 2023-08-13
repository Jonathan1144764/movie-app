import { shallowMount } from "@vue/test-utils";
import MovieList from "@/components/MovieList.vue";

describe("MovieList.vue", () => {
  it("listens for an event when a movie is added to favourites and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieList);
    await wrapper.vm.addToFavourites(1);
    expect(wrapper.emitted().addToFavourites[0][0]).toBe(1);
  });
  it("listens for an event when a movie is removed from favourites and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieList);
    await wrapper.vm.removeFromFavourites(1);
    expect(wrapper.emitted().removeFromFavourites[0][0]).toBe(1);
  });
  it("listens for an event when a movie is added to watchlist and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieList);
    await wrapper.vm.addToWatchlist(1);
    expect(wrapper.emitted().addToWatchlist[0][0]).toBe(1);
  });
  it("listens for an event when a movie is removed from watchlist and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieList);
    await wrapper.vm.removeFromFavourites(1);
    expect(wrapper.emitted().removeFromFavourites[0][0]).toBe(1);
  });
  it("listens for an event to add movie rating and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieList);
    await wrapper.vm.addRating(1, 2);
    expect(wrapper.emitted().addRating[0][1]).toBe(2);
  });
});
