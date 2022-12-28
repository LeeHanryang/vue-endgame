<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">아이디: </label>
      <input id="username" type="text" v-model="username" autocomplete="off" />
    </div>
    <div>
      <label for="password">패스워드: </label>
      <input id="password" type="text" v-model="password" autocomplete="off" />
    </div>
    <button :disabled="!isUsernameValid || !password">로그인</button>
    <p>
      {{ logMessage }}
    </p>
  </form>
</template>

<script>
  import { loginUser } from "@/api/index";
  import { validateEmail } from "@/utils/validation";

  export default {
    data() {
      return {
        // form values
        username: "",
        password: "",
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
        };
        try {
          // business logic
          const { data } = await loginUser(userData);
          console.log(data);
          this.logMessage = `${data.user.nickname}님 환영합니다.`;
          //   this.initForm();
        } catch (error) {
          //   error handling
          console.log(error.response.data);
          this.logMessage = error.response.data;
          //   this.initForm();
        } finally {
          this.initForm();
        }
      },
      initForm() {
        this.username = "";
        this.password = "";
      },
    },
  };
</script>

<style></style>
