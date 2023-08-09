import { shallowMount } from "@vue/test-utils";
import FavouritesButton from "@/components/FavouritesButton.vue";

describe("FavouritesButton.vue", () => {
  it("shows the text to add to favourites when the movie is not in favourites", () => {
    const buttonText = "Add to Favourites";
    const wrapper = shallowMount(FavouritesButton);
    expect(wrapper.find("button").text()).toBe(buttonText);
  });
  it("shows the text to remove from favourites when the movie is in favourites", async () => {
    const buttonText = "Remove from Favourites";
    const wrapper = shallowMount(FavouritesButton);
    await wrapper.setProps({
      movie: {
        id: 0,
        title: "Default",
        year: 1900,
        director: "D Fault",
        poster: "https://placehold.co/200x300/55ffcc/000",
        isFavourited: true,
        isToWatch: false,
        rating: [],
        synopsis: "A default movie synopsis.",
      },
    });
    expect(wrapper.find("button").text()).toBe(buttonText);
  });
  it("emits an event to add the movie to favourites when the button is clicked and the movie is not in favourites", async () => {
    const wrapper = shallowMount(FavouritesButton);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().addToFavourites[0][0]).toBe(0);
  });
  it("emits an event to remove the movie from favourites when the button is clicked and the movie is in favourites", async () => {
    const wrapper = shallowMount(FavouritesButton);
    await wrapper.setProps({
      movie: {
        id: 0,
        title: "Default",
        year: 1900,
        director: "D Fault",
        poster: "https://placehold.co/200x300/55ffcc/000",
        isFavourited: true,
        isToWatch: false,
        rating: [],
        synopsis: "A default movie synopsis.",
      },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().removeFromFavourites[0][0]).toBe(0);
  });
});
