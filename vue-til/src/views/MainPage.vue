<template>
  <div class="main list-container contents">
    <h1 class="page-header">Today I Learned</h1>
    <loading-spinner v-if="isLoading"></loading-spinner>
    <ul v-else>
      <post-list-item
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"
      >
      </post-list-item>
    </ul>
  </div>
</template>

<script>
  import PostListItem from "@/components/posts/PostListItem";
  import { fetchPosts } from "@/api/index";
  import LoadingSpinner from "@/components/common/LoadingSpinner";

  export default {
    data() {
      return {
        postItems: [],
        isLoading: false,
      };
    },
    components: {
      PostListItem,
      LoadingSpinner,
    },
    methods: {
      async fetchData() {
        this.isLoading = true;
        const { data } = await fetchPosts();
        this.isLoading = false;
        this.postItems = data.posts;
      },
    },
    created() {
      this.fetchData();
    },
  };
</script>

<style></style>
