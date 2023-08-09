import { shallowMount } from "@vue/test-utils";
import FavouritesButton from "@/components/FavouritesButton.vue";

describe("FavouritesButton.vue", () => {
  it("shows the text to add to favourites when the movie is not in favourites", () => {
    const buttonText = "Add to Favourites";
    const wrapper = shallowMount(FavouritesButton);
    expect(wrapper.find("button").text()).toBe(buttonText);
  });
  it("shows the text to remove from favourites when the movie is in favourites", () => {});
  it("emits an event to add the movie to favourites when the button is clicked and the movie is not in favourites", () => {});
  it("emits an event to remove the movie from favourites when the button is clicked and the movie is in favourites", () => {});
});
