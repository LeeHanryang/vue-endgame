<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea
            type="text"
            id="contents"
            :class="{ 'area-warning': !isContentsValid }"
            rows="5"
            v-model="contents"
          />
          <p v-if="isContentsValid" class="validation-text">
            {{ contents.length }}/200
          </p>
          <p v-else class="validation-text warning">
            Contents length must be less than 200
          </p>
        </div>
        <button type="submit" class="btn" :disabled="!isContentsValid">
          Create
        </button>
        <p class="log" v-if="logMessage">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
  import { createPost } from "@/api/posts";

  export default {
    data() {
      return {
        title: "",
        contents: "",
        logMessage: "",
      };
    },
    computed: {
      isContentsValid() {
        return this.contents.length <= 200;
      },
    },
    methods: {
      async submitForm() {
        try {
          await createPost({
            title: this.title,
            contents: this.contents,
          });

          this.$router.push("/main");
        } catch (error) {
          this.logMessage = error.response.data.message;
          console.log(error);
        }
      },
    },
  };
</script>

<style scoped>
  .form-wrapper .form {
    width: 100%;
  }
  .btn {
    color: #fff;
  }
</style>
