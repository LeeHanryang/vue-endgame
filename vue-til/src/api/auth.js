import { instance } from "@/api/index";

// 로그인, 회원 가입, 회원 탈퇴
/**
 *
 * @param {*} userData
 * @returns signup response
 */
function registerUser(userData) {
  return instance.post("signup", userData);
}

/**
 *
 * @param {*} userData
 * @returns login response
 */
function loginUser(userData) {
  return instance.post("login", userData);
}

export { registerUser, loginUser };
