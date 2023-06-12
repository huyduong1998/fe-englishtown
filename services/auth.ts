import { post } from "../utils/axios_util";
import { LmsUrls } from "../constants/lms_urls";
import { StoreKeys } from "../constants/store_keys";
import request from "./request";

export async function userLogin(email: string, password: string) {
  const body = { email, password };

  return request(`/api/auth/login`, "", {
    method: "POST",
    data: body,
  });

  // const res = await post(LmsUrls.login, body);
  // const loginData = res.data;
  // if (loginData.userData.role.role_name != "student") {
  //   throw BaseException(null, "LoginNotSupport", null);
  // } else {
  //   localStorage.setItem(StoreKeys.token, loginData.access_token);
  //   localStorage.setItem(StoreKeys.userId, loginData.userData.id);
  // }
}
