import { posts } from "@/api/index";

// 학습 노트 조작과 관련된 CRUD API 함수 파일
function fetchPosts() {
  return posts.get("/");
}
// 특정 학습 노트 데이터를 조회하는 API
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return posts.post("/", postData);
}

// 학습 노트 데이터를 수정하는 API
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, fetchPost, createPost, editPost, deletePost };
