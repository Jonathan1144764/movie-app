import { shallowMount } from "@vue/test-utils";
import ListWindowButtons from "@/components/ListWindowButtons.vue";

describe("ListWindowButtons", () => {
  it("displays favourited movies prop", () => {
    const moviesFavourited = 3;
    const wrapper = shallowMount(ListWindowButtons, {
      props: { moviesFavourited },
    });
    expect(wrapper.findAll("button")[0].text()).toBe("3 favourite movies");
  });
  it("displays movies to watch prop", () => {
    const moviesToWatch = 3;
    const wrapper = shallowMount(ListWindowButtons, {
      props: { moviesToWatch },
    });
    expect(wrapper.findAll("button")[1].text()).toBe(
      "3 movies you want to watch"
    );
  });
  it("emits an event to show fvaourites list when favourites button is clicked", async () => {
    const wrapper = shallowMount(ListWindowButtons);
    await wrapper.findAll("button")[0].trigger("click");
    expect(wrapper.emitted().showFavourites[0][0]).toBe(true);
  });
  it("emits an event to show watchlist when watchlist button is clicked", async () => {
    const wrapper = shallowMount(ListWindowButtons);
    await wrapper.findAll("button")[1].trigger("click");
    expect(wrapper.emitted().showToWatch[0][0]).toBe(true);
  });
});
