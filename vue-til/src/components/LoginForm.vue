<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">아이디:</label>
          <input
            id="username"
            type="text"
            v-model="username"
            autocomplete="off"
          />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">패스워드:</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <button
          class="btn"
          type="submit"
          :disabled="!isUsernameValid || !password"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
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
          this.$store.commit("setUsername", data.user.nickname);
          this.logMessage = `${data.user.nickname}님 환영합니다.`;
          this.$router.push("/main");
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
