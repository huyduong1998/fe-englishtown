import React from "react";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import ListLessons from "../Lesson/SidebarLesson/SidebarListLessons";

const ListLessonsTabSidebar = () => {
  const { listLessons } = useOnlineCourseStore();
  return (
    <div>
      <div className="mb-4 flex flex-nowrap overflow-y-auto scrollbar-hide lg:scrollbar-default">
        <div className="flex-auto">
          <button
            type="button"
            className="w-full border-b p-2 text-xs font-semibold uppercase text-blue"
          >
            Beginner
          </button>
        </div>
        <div className="flex-auto">
          <button
            type="button"
            className="w-full p-2 text-xs font-semibold uppercase text-[#5D7888]"
          >
            Intermediate
          </button>
        </div>
        <div className="flex-auto">
          <button
            type="button"
            className="w-full p-2 text-xs font-semibold uppercase text-[#5D7888]"
          >
            Advanced
          </button>
        </div>
        <div className="flex-auto">
          <button
            type="button"
            className="w-full p-2 text-xs font-semibold uppercase text-[#5D7888]"
          >
            Proficient
          </button>
        </div>
      </div>
      <ListLessons listLessons={listLessons?.items || null} />
    </div>
  );
};

export default React.memo(ListLessonsTabSidebar);
