<template>
  <header>
    <app-header></app-header>
    <router-view></router-view>
  </header>
</template>

<script>
  import AppHeader from "@/components/common/AppHeader";
  export default {
    components: {
      AppHeader,
    },
  };
</script>

<style></style>
