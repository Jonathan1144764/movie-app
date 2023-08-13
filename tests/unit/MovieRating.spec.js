import { shallowMount } from "@vue/test-utils";
import MovieRating from "@/components/MovieRating.vue";

describe("MovieRating.vue", () => {
  it("emits an event to add a rating to the movie's average rating when the stars are clicked", async () => {
    const wrapper = shallowMount(MovieRating);
    await wrapper.find("#rs1").trigger("click");
    expect(wrapper.emitted().addRating[0][1]).toBe(1);
  });
});
