export class LmsUrls {
  static splat = "/";
  static storage = "storage";
  static public = "public";
  static oldUrl = "https://lms-admin.englishtown.edu.vn/";
  static newUrl = "https://media.englishtown.edu.vn/";

  static baseUrl = "https://erp.englishtown.edu.vn/api/";

  static cmsBaseUrl = "https://cms.englishtown.edu.vn/api/";

  static cmsUrl = "https://cms.englishtown.edu.vn";

  static login = "auth/login";

  ///student
  static studentProfile = "student-info";
  static studentPersonalCourse = "/students/me/courses";
  static studentAllCourseEnrollments = "/students/me/course-enrollments";

  static studentStatisticals = "/students/me/statisticals";

  static studentCourseEnrollment(courseId: number) {
    return "/students/me/courses/" + `${courseId}` + "/enrollment";
  }
  static courseSchedules(courseId: number) {
    return "/course-management/" + `${courseId}` + "/schedules";
  }

  static courseSettings(courseId: number) {
    return "/course-management/" + `${courseId}` + "/settings";
  }

  static bookSchedule(scheduleId: number) {
    return "/student-management/timetables/" + `${scheduleId}` + "/book";
  }

  static cancelBookSchedule(scheduleId: number) {
    return "/student-management/timetables/" + `${scheduleId}` + "/cancel";
  }

  static studentCourseReferences = "/student-management/course-references";

  static courseReferenceDetail(courseId: number) {
    return `/course-references/${courseId}`;
  }

  static courseLevels(courseId: number) {
    return `/course-references/${courseId}/lesson-levels`;
  }

  static courseReferenceLessonDetail(courseId: number, lessonId: number) {
    return `/course-references/${courseId}/lessons/${lessonId}`;
  }

  static courseReferenceToggleFollow(courseId: number) {
    return `/course-references/${courseId}/toggle-follow`;
  }

  ///cms
  static ladingPage = "landing-pages";
  ///
}
