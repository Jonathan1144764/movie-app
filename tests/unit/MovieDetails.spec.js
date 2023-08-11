import { shallowMount } from "@vue/test-utils";
import MovieDetails from "@/components/MovieDetails.vue";

describe("MovieDetails.vue", () => {
  it("displays props", () => {
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
    const wrapper = shallowMount(MovieDetails, {
      props: { movie },
    });
    expect(wrapper.find("h3").text()).toBe("Default");
  });
  it("listens for event to hide window and emits an event in turn", async () => {
    const wrapper = shallowMount(MovieDetails);
    await wrapper.vm.hideWindow();
    expect(wrapper.emitted().hideWindow[0][0]).toBe(true);
  });
});
