import { getToken } from "utils/token";
import request from "./request";

export const getCourses = () => {
  return request(`/api/v2/student-management/course-references`, getToken(), {
    method: "GET",
    params: {
      include: "lessons,levels",
    },
  });
};

export const getListLessons = (course_id: number) => {
  return request(`/api/v2/course-references/${course_id}/lessons`, getToken(), {
    method: "GET",
  });
};

export const getListChapters = (lesson_id: number) => {
  return request(
    `/api/v2/course-references/${lesson_id}/chapters`,
    getToken(),
    {
      method: "GET",
    }
  );
};

// export async function getCourseFollowed(include) {
//   const query = {
//     include: include ?? "followers",
//   };
//   const res = await get(LmsUrls.studentCourseReferences, query, token);
//   return res.data.data.items;
// }

export const getDetailChapter = (
  lesson_id: number | string,
  chapter_id: number | string,
  params: object
) => {
  return request(
    `/api/v2/course-references/${lesson_id}/chapters/${chapter_id}`,
    getToken(),
    {
      method: "GET",
      params,
    }
  );
};

export const submitEnrolledBlock = (
  blockId: number,
  timeSpent: number | null,
  record: any
) => {
  return request(
    `/api/v2/course-references/blocks/${blockId}/enrollment`,
    getToken(),
    {
      method: "POST",
      data: {
        time_spent: timeSpent,
        record,
      },
    }
  );
};
