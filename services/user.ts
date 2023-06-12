import { getToken } from "utils/token";
import request from "./request";

export const getUserProfile = () => {
  const token = getToken();
  return request("/api/student-info", token, {
    method: "GET",
  });
};

export const getEnrollmentsCourse = () => {
  const token = getToken();
  return request("/api/students/me/course-enrollments", token, {
    method: "GET",
  });
};
