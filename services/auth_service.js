import { post } from "../utils/axios_util";
import { LmsUrls } from "../constants/lms_urls";
import { StoreKeys } from "../constants/store_keys";
import { BaseException } from "../core/base_exceptions";

export async function userLogin(userName, userPassword) {
  const body = { email: userName, password: userPassword };
  const res = await post(LmsUrls.login, body);
  const loginData = res.data;
  if (loginData.userData.role.role_name != "student") {
    throw BaseException(null, "LoginNotSupport", null);
  } else {
    localStorage.setItem(StoreKeys.token, loginData.access_token);
    localStorage.setItem(StoreKeys.userId, loginData.userData.id);
  }
}
