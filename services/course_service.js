import { get, post } from "../utils/axios_util";
import { LmsUrls } from "../constants/lms_urls";
import { StoreKeys } from "../constants/store_keys";
import { StudentScheduleStatus } from "../constants/enum";

export function requiredBookedStudentId(status) {
  const contain = [
    StudentScheduleStatus.upcoming,
    StudentScheduleStatus.past,
  ].find((e) => e === status);

  return contain != null;
}

export function requiredStartDate(status) {
  const contain = [
    StudentScheduleStatus.available,
    StudentScheduleStatus.past,
  ].find((e) => e === status);

  return contain != null;
}

const _defaultIncludes =
  "branch,room,fixStudentsInClass.student,bookStudents.student,class.course,class.setting,teacher,levels,lesson.activeSections,";

const _defaultAppend = "students_in_class";

const _defaultSortBy = "start_date";

const _defaultScopeFilter = "starts_at";

export async function getPersonalCourse(page, pageSize) {
  const token = localStorage.getItem(StoreKeys.token);

  const query = {
    page: page ?? 1,
    page_size: pageSize ?? 20,
  };

  const res = await get(LmsUrls.studentPersonalCourse, query, token);

  return res.data.data.items;
}

export async function getCourseSettings(courseId) {
  const token = localStorage.getItem(StoreKeys.token);

  const url = LmsUrls.courseSettings(courseId);

  const res = await get(url, null, token);

  return res.data.data;
}

export async function getStudentCourseEnrollment(courseId, include) {
  const token = localStorage.getItem(StoreKeys.token);

  const query = {
    include: include ?? "branch",
  };

  const url = LmsUrls.studentCourseEnrollment(courseId);

  const res = await get(url, query, token);

  return res.data.data;
}

export async function getCourseSchedules(
  courseId,
  page,
  pageSize,
  include,
  append,
  settingId,
  status,
  booked,
  startsAt,
  startBetween,
  sort,
  scopeFilter
) {
  const query = {
    page: page ?? 1,
    page_size: pageSize ?? 20,
    include: include ?? _defaultIncludes,
    append: append ?? _defaultAppend,
    "filter[setting]": settingId,
    "filter[status]": status,
    "filter[booked]": booked,
    "filter[starts_at]": startsAt,
    "filter[starts_between]": startBetween,
    sort: sort ?? _defaultSortBy,
    scopeFilter: scopeFilter ?? _defaultScopeFilter,
  };

  const token = localStorage.getItem(StoreKeys.token);

  const url = LmsUrls.courseSchedules(courseId);

  const res = await get(url, query, token);

  return res.data.data.items;
}

export async function bookSchedule(scheduleId, courseStudentId) {
  const token = localStorage.getItem(StoreKeys.token);

  const url = LmsUrls.bookSchedule(scheduleId);

  const body = {
    course_student_id: courseStudentId,
  };

  await post(url, body, token);
}

export async function cancelBookSchedule(scheduleId, courseStudentId) {
  const token = localStorage.getItem(StoreKeys.token);

  const url = LmsUrls.cancelBookSchedule(scheduleId);

  const body = {
    course_student_id: courseStudentId,
  };

  await post(url, body, token);
}

export async function getStudentCourseReferences(include) {
  const token = localStorage.getItem(StoreKeys.token);
  const query = {
    include: include ?? "followers",
  };
  const res = await get(LmsUrls.studentCourseReferences, query, token);
  return res.data.data.items;
}

export async function getCourseReferenceDetail(courseId) {
  const defaultInclue = "activeLessons,activeLessons.levels,levels,followers";

  const token = localStorage.getItem(StoreKeys.token);

  const query = {
    include: defaultInclue,
  };

  const res = await get(LmsUrls.courseReferenceDetail(courseId), query, token);

  return res.data.data;
}

export async function getLevelsOfCourse(courseId) {
  const token = localStorage.getItem(StoreKeys.token);

  const res = await get(LmsUrls.courseLevels(courseId), null, token);

  return res.data.data;
}

export async function getCourseReferenceLessonDetail(courseId, lessonId) {
  const token = localStorage.getItem(StoreKeys.token);

  const query = {
    include: "activeSections.blocks",
  };

  const res = await get(
    LmsUrls.courseReferenceLessonDetail(courseId, lessonId),
    query,
    token
  );

  return res.data.data;
}

export async function toggleCourseReferenceFollow(courseId) {
  const token = localStorage.getItem(StoreKeys.token);

  await post(LmsUrls.toggleCourseReferenceFollow(courseId), null, token);
}
