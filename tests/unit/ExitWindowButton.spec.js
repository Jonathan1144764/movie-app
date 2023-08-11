import { shallowMount } from "@vue/test-utils";
import ExitWindowButton from "@/components/ExitWindowButton.vue";

describe("ExitWindowButton", () => {
  it("emits an event to close component window when clicked", async () => {
    const wrapper = shallowMount(ExitWindowButton);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().hideWindow[0][0]).toBe(true);
  });
});
