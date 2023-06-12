import { ChapterBlockDataType, ChapterBlockType, ChapterType } from "types/chapter";
import { GetListLesson } from "types/lesson";
import { create } from "zustand";

export interface OnlineCourseState {
  listLessons: GetListLesson | null;
  lessonId: number | null;
  chapterId: number | null;
  isOpenSidebar: boolean;
  listBlocks: ChapterBlockDataType[];
  activeBlock: ChapterBlockDataType | null;
  activeBlockIndex: number | null;
  chapterData: ChapterType | null;

  updateListLessons: (listLesson: GetListLesson) => void;
  updateLessonId: (lessonId: number) => void;
  updateToggleSidebar: (value: boolean) => void;
  updateListBlocks: (list: ChapterBlockDataType[]) => void;
  updateActiveBlock: (block: ChapterBlockDataType) => void;
  updateActiveBlockIndex: (index: number) => void;
  updateChapterData: (chapterData: ChapterType | null) => void;
}

const useOnlineCourseStore = create<OnlineCourseState>()((set) => ({
  listLessons: null,
  lessonId: null,
  chapterId: null,
  isOpenSidebar: false,
  listBlocks: [],
  activeBlock: null,
  activeBlockIndex: null,
  chapterData: null,

  updateListLessons: (listLessons: GetListLesson) => {
    set((state) => ({
      ...state,
      listLessons,
    }));
  },
  updateLessonId: (lessonId: number) => {
    set((state) => ({
      ...state,
      lessonId,
    }));
  },
  updateChapterId: (chapterId: number) => {
    set((state) => {
      return {
        ...state,
        chapterId,
      };
    });
  },
  updateToggleSidebar: (value: boolean = false) => {
    set((state) => {
      return {
        ...state,
        isOpenSidebar: value,
      };
    });
  },
  updateListBlocks: (list: ChapterBlockDataType[]) => {
    set((state) => {
      return {
        ...state,
        listBlocks: list,
      };
    });
  },
  updateActiveBlock: (block: ChapterBlockDataType) => {
    set((state) => {
      return {
        ...state,
        activeBlock: block,
      };
    });
  },
  updateActiveBlockIndex: (index: number) => {
    set((state) => {
      return {
        ...state,
        activeBlockIndex: index,
      };
    });
  },
  updateChapterData: (chapterData: ChapterType | null) => {
    set((state) => {
      return {
        ...state,
        chapterData,
      };
    });
  },
}));

export default useOnlineCourseStore;
