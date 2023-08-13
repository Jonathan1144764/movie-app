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
  it("emits an event to show fvaourites list", async () => {
    const wrapper = shallowMount(ListWindowButtons);
    await wrapper.vm.showFavourites();
    expect(wrapper.emitted().showFavourites[0][0]).toBe(undefined);
  });
  it("emits an event to show watchlist", async () => {
    const wrapper = shallowMount(ListWindowButtons);
    await wrapper.vm.showToWatch();
    expect(wrapper.emitted().showToWatch[0][0]).toBe(undefined);
  });
});
