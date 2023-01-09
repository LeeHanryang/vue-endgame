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
          type="submit"
          :disabled="!isUsernameValid || !password"
          class="btn"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
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
          await this.$store.dispatch("LOGIN", userData); // await 안붙이면 로그인처리 끝나기 전에 main 이동
          this.$router.push("/main");
        } catch (error) {
          // error handling
          console.log(error.response.data);
          this.logMessage = error.response.data;
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
