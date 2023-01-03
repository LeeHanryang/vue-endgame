<template>
  <div>
    <h1>Today I Learned</h1>
    <ul>
      <li v-for="postItem in postItems" :key="postItem._id">
        {{ postItem }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { fetchPosts } from "@/api/index";

  export default {
    data() {
      return {
        postItems: [],
      };
    },
    methods: {
      async fetchData() {
        const { data } = await fetchPosts();
        console.log(data);
        this.postItems = data.posts;
      },
    },
    created() {
      this.fetchData();
    },
  };
</script>

<style></style>
