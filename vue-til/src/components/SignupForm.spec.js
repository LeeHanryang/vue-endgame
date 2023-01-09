// 라이브러리
import { shallowMount } from "@vue/test-utils";
import SignupForm from "./SignupForm";

describe("SignupForm", () => {
  test("이메일 주소만 가입 가능하다.", () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: "abc@abc.com",
          password: "1234",
          nickname: "영어",
        };
      },
    });

    const button = wrapper.find(".btn");
    // button.element.disabled
    expect(button.element.disabled).toBeTruthy();
  });
});
