import { shallowMount } from "@vue/test-utils";
import MovieFavouriteList from "@/components/MovieFavouriteList.vue";

describe("MovieFavouriteList.vue", () => {
  it("listens for an event to remove from favourites and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieFavouriteList);
    await wrapper.vm.removeFromFavourites(1);
    expect(wrapper.emitted().removeFromFavourites[0][0]).toBe(1);
  });
  it("listens for an event to add to watchlist and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieFavouriteList);
    await wrapper.vm.addToWatchlist(1);
    expect(wrapper.emitted().addToWatchlist[0][0]).toBe(1);
  });
  it("listens for an event to remove from watchlist and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieFavouriteList);
    await wrapper.vm.removeFromWatchlist(1);
    expect(wrapper.emitted().removeFromWatchlist[0][0]).toBe(1);
  });
  it("listens for an event to add movie rating and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieFavouriteList);
    await wrapper.vm.addRating(1, 2);
    expect(wrapper.emitted().addRating[0][1]).toBe(2);
  });
  it("listens for an event to hide the section window and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieFavouriteList);
    await wrapper.vm.hideWindow();
    expect(wrapper.emitted().hideWindow[0][0]).toBe(true);
  });
  it("changes the class of the section when favouritesSHown is true", async () => {
    const wrapper = shallowMount(MovieFavouriteList);
    await wrapper.setProps({ favouritesShown: true });
    expect(wrapper.find("section").classes()).toContain("favouritesShown");
  });
});
