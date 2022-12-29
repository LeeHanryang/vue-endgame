<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">아이디: </label>
          <input
            id="username"
            type="text"
            v-model="username"
            autocomplete="off"
          />
        </div>
        <div>
          <label for="password">패스워드: </label>
          <input
            id="password"
            type="password"
            v-model="password"
            autocomplete="off"
          />
        </div>
        <div>
          <label for="nickname">별명: </label>
          <input
            id="nickname"
            type="text"
            v-model="nickname"
            autocomplete="off"
          />
        </div>
        <button
          class="btn"
          type="submit"
          :disabled="!isUsernameValid || !password || !nickname"
        >
          가입하기
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
  import { registerUser } from "@/api/index";
  import { validateEmail } from "@/utils/validation";

  export default {
    data() {
      return {
        // form values
        username: "",
        password: "",
        nickname: "",
        // log
        logMessage: "",
      };
    },
    computed: {
      isUsernameValid() {
        return validateEmail(this.username);
      },
    },
    methods: {
      async submitForm() {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        try {
          const { data } = await registerUser(userData);
          console.log(data.username);
          this.logMessage = `${data.username}님이 가입되었습니다.`;
        } catch (error) {
          console.log(error);
          this.logMessage = error.response.data;
        } finally {
          this.initForm();
        }
      },
      initForm() {
        this.username = "";
        this.password = "";
        this.nickname = "";
      },
    },
  };
</script>

<style></style>
