import { getToken } from "utils/token";
import request from "./request";

export const getCourseManagementSettings = (course_id: string) => {
  return request(`/api/course-management/${course_id}/settings`, getToken(), {
    method: "GET",
  });
};

export const getStudentCourses = () => {
  return request(`/api/students/me/courses`, getToken(), {
    method: "GET",
    params: {
      page: 1,
      page_size: 20,
    },
  });
};
