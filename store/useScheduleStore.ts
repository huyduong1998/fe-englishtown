import { StudentCourseType } from "types/course";
import { SettingType } from "types/schedule";
import { create, createStore } from "zustand";

export interface ScheduleStoreType {
  studentCourses: StudentCourseType[];
  currentCourse: StudentCourseType | null;
  settings: SettingType[];
  updateStudentCourses: (courses: StudentCourseType[]) => void;
  updateCurrentCourse: (course: StudentCourseType) => void;
  updateSettings: (settings: SettingType[]) => void;
}

const useScheduleStore = create<ScheduleStoreType>()((set) => ({
  studentCourses: [],
  currentCourse: null,
  settings: [],

  updateStudentCourses: (courses) => {
    set((state) => {
      return {
        ...state,
        studentCourses: courses,
      };
    });
  },
  updateCurrentCourse: (course) => {
    set((state) => {
      return {
        ...state,
        currentCourse: course,
      };
    });
  },
  updateSettings: (settings: SettingType[]) => {
    set((state) => {
      return {
        ...state,
        settings,
      };
    });
  },
}));

export default useScheduleStore;
