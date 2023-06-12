// import { get } from "../utils/axios_util";
// import { LmsUrls } from "../constants/lms_urls";
// import { StoreKeys } from "../constants/store_keys";

// export async function getUserProfile() {
//   const token = localStorage.getItem(StoreKeys.token);
//   const res = await get(LmsUrls.studentProfile, null, token);
//   return res.data.data;
// }

// export async function getAllStudentCourseEnrollments() {
//   const token = localStorage.getItem(StoreKeys.token);
//   const res = await get(LmsUrls.studentAllCourseEnrollments, null, token);
//   return res.data.data.items;
// }
