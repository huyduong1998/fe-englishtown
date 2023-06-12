import Loading from "components/Loading";
import React, { useEffect, useRef, useState } from "react";
import useScheduleStore from "store/useScheduleStore";
import { StudentCourseType } from "types/course";

const DropdownCourse = () => {
  const { currentCourse, studentCourses, updateCurrentCourse } =
    useScheduleStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickContext);
    return () => {
      document.removeEventListener("click", handleClickContext);
    };
  }, []);

  const handleClickContext = (e: globalThis.MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleUpdateCourse = (item: StudentCourseType) => {
    updateCurrentCourse(item);
  };

  if (!currentCourse) {
    return <div className="w-72 h-10 bg-gray-300 animate-pulse rounded-full"></div>;
  }

  return (
    <div ref={dropdownRef} className="relative w-72 text-blue">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-full cursor-pointer items-center justify-between rounded-full border border-solid bg-[#F2F5F7]/80 px-4 py-2.5 text-sm ${
          isOpen ? "border-gray-300" : "border-transparent"
        }`}
      >
        <div>{currentCourse.name}</div>
        <div>
          <button
            type="button"
            className={`flex h-6 w-6 items-center justify-center transition-all rounded-full${
              isOpen ? " rotate-180" : " rotate-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`absolute left-0 top-full w-full translate-y-1 rounded border shadow-lg transition-all shadow-black/10${
          isOpen ? " visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {studentCourses.map((item, index) => {
          return (
            <div
              onClick={() => handleUpdateCourse(item)}
              key={item.id}
              className="cursor-pointer border-b px-4 py-3 text-sm transition-all last:border-b-0 hover:bg-gray-100"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownCourse;
