import { shallowMount } from "@vue/test-utils";
import MovieWatchlist from "@/components/MovieWatchlist.vue";

describe("MovieWatchlist.vue", () => {
  it("listens for an event to remove from watchlist and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieWatchlist);
    await wrapper.vm.removeFromWatchlist(1);
    expect(wrapper.emitted().removeFromWatchlist[0][0]).toBe(1);
  });
  it("listens for an event to add to favourites and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieWatchlist);
    await wrapper.vm.addToFavourites(1);
    expect(wrapper.emitted().addToFavourites[0][0]).toBe(1);
  });
  it("listens for an event to remove from favourites and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieWatchlist);
    await wrapper.vm.removeFromFavourites(1);
    expect(wrapper.emitted().removeFromFavourites[0][0]).toBe(1);
  });
});
