import { shallowMount } from "@vue/test-utils";
import MovieWatchlist from "@/components/MovieWatchlist.vue";

describe("MovieWatchlist.vue", () => {
  it("listens for an event to remove from watchlist and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieWatchlist);
    await wrapper.vm.removeFromWatchlist(1);
    expect(wrapper.vm.removeFromWatchlist).toBeTruthy();
    expect(wrapper.emitted().removeFromWatchlist[0][0]).toBe(1);
  });
  it("listens for an event to add to favourites and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieWatchlist);
    await wrapper.vm.addToFavourites(1);
    expect(wrapper.vm.addToFavourites).toBeTruthy();
    expect(wrapper.emitted().addToFavourites[0][0]).toBe(1);
  });
  it("listens for an event to remove from favourites and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieWatchlist);
    await wrapper.vm.removeFromFavourites(1);
    expect(wrapper.vm.removeFromFavourites).toBeTruthy();
    expect(wrapper.emitted().removeFromFavourites[0][0]).toBe(1);
  });
  it("listens for an event to add movie rating and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieWatchlist);
    await wrapper.vm.addRating(1, 2);
    expect(wrapper.vm.addRating).toBeTruthy();
    expect(wrapper.emitted().addRating[0][1]).toBe(2);
  });
  it("listens for an event to hide the section window and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieWatchlist);
    await wrapper.vm.hideWindow();
    expect(wrapper.vm.hideWindow).toBeTruthy();
    expect(wrapper.emitted().hideWindow[0][0]).toBe(true);
  });
  it("changes the class of the section whe toWatchShown is true", async () => {
    const wrapper = shallowMount(MovieWatchlist);
    await wrapper.setProps({ toWatchShown: true });
    expect(wrapper.find("section").classes()).toContain("toWatchShown");
  });
});
