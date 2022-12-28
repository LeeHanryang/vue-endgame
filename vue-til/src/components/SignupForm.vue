<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" autocomplete="off" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" autocomplete="off" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" autocomplete="off" />
    </div>
    <button type="submit">SignUp</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        nickname: "",
      };
    },
    methods: {
      submitForm(event) {
        console.log("form sended");
        console.log(event);
      },
    },
  };
</script>

<style></style>
