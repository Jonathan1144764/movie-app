import { shallowMount } from "@vue/test-utils";
import MovieDetailsButton from "@/components/MovieDetailsButton.vue";

describe("MovieDetailsButtons", () => {
  it("emits event to show movie details component when clicked", async () => {
    const wrapper = shallowMount(MovieDetailsButton);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().showDetails[0][0]).toBe(0);
  });
});
