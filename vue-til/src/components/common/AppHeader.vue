<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
        <span v-if="isUserLogin" class="username"
          >by {{ $store.state.username }}</span
        >
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isUserLogin">
        <a href="javascript:;" @click="logoutUser" class="logout-button"
          >Logout</a
        >
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
  export default {
    computed: {
      isUserLogin() {
        return this.$store.getters.isLogin;
      },
      logoLink() {
        return this.$store.getters.isLogin ? "/main" : "/login";
      },
    },
    methods: {
      logoutUser() {
        this.$store.commit("clearUsername");
        this.$store.commit("clearToken");
        this.$router.push("/login");
      },
    },
  };
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #927dfc;
    z-index: 2;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  }
  .logo > span {
    font-size: 14px;
    font-weight: normal;
  }
  a {
    color: #dedede;
    font-size: 18px;
  }
  a.logo {
    font-size: 30px;
    font-weight: 900;
    color: white;
  }
  .logo > span {
    font-size: 14px;
    font-weight: normal;
  }
  .navigations a {
    margin-left: 10px;
  }
  .logout-button {
    font-size: 14px;
    line-height: 14px;
    color: #fff;
  }
  .fixed {
    position: fixed;
    top: 0;
    width: 100%;
  }
  a.router-link-exact-active {
    color: white;
    font-weight: bold;
  }
</style>
