import { shallowMount } from "@vue/test-utils";
import MovieDetailsButton from "@/components/MovieDetailsButton.vue";

describe("MovieDetailsButtons", () => {
  it("changes boolean state of isShown data to true when it is false", async () => {
    const wrapper = shallowMount(MovieDetailsButton);
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.isShown).toBe(true);
  });
  it("changes boolean state of isShown to false when it is true", async () => {
    const wrapper = shallowMount(MovieDetailsButton);
    await wrapper.setData({
      isShown: true,
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.isShown).toBe(false);
  });
  it("emits event to show movie details component when clicked and isShown is false", async () => {
    const wrapper = shallowMount(MovieDetailsButton);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().showDetails[0][0]).toBe(0);
  });
  it("emits an event to hide movie details component when clicked and isShown is true", async () => {
    const wrapper = shallowMount(MovieDetailsButton);
    await wrapper.setData({
      isShown: true,
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().hideDetails[0][0]).toBe(0);
  });
});
