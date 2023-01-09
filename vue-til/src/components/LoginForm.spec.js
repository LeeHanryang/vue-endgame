import { shallowMount } from "@vue/test-utils";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.", () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe("");
  });
});
