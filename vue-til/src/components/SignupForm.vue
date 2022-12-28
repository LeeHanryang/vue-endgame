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
    <div>
      <label for="nickname">별명: </label>
      <input id="nickname" type="text" v-model="nickname" autocomplete="off" />
    </div>
    <button type="submit">가입하기</button>
    <p>
      {{ logMessage }}
    </p>
  </form>
</template>

<script>
  import { registerUser } from "@/api/index";

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
    methods: {
      async submitForm() {
        console.log("form sended");
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        try {
          const { data } = await registerUser(userData);
          console.log(data.username);
          this.logMessage = `${data.username}님이 가입되었습니다.`;
          this.initForm();
        } catch (error) {
          console.log(error);
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
