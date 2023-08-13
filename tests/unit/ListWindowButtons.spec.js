import { shallowMount } from "@vue/test-utils";
import ListWindowButtons from "@/components/ListWindowButtons.vue";

describe("ListWindowButtons", () => {
  it("displays favourited movies prop", () => {
    const wrapper = shallowMount(ListWindowButtons);
    console.log(wrapper);
  });
  it("displays movies to watch prop", () => {});
  it("emits an event to show fvaourites list", () => {});
  it("emits an event to show watchlist", () => {});
});
