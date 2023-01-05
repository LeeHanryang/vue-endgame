<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" v-model="title" ref="onFocus" />
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
          Edit
        </button>
        <p class="log" v-if="logMessage">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
  import { fetchPost, editPost } from "@/api/posts";

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
    mounted() {
      this.focusInput();
    },
    methods: {
      async submitForm() {
        try {
          const id = this.$route.params.id;
          await editPost(id, {
            title: this.title,
            contents: this.contents,
          });

          this.$router.push("/main");
        } catch (error) {
          this.logMessage = error.response.data.message;
          console.log(error);
        }
      },
      focusInput() {
        this.$refs.onFocus.focus();
      },
    },
    async created() {
      const id = this.$route.params.id;
      const { data } = await fetchPost(id);
      this.title = data.title;
      this.contents = data.contents;
      console.log(data);
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
