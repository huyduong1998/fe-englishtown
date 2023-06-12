import React, { FC } from "react";
import useOnlineCourseStore from "store/useOnlineCourseStore";

interface Props {
  isOpen: boolean;
}

const RedirectLesson: FC<Props> = ({ isOpen }) => {
  const { updateActiveBlockIndex, activeBlockIndex, listBlocks } =
    useOnlineCourseStore();

  const handleNextLesson = () => {
    if (
      activeBlockIndex !== null &&
      activeBlockIndex < listBlocks.length - 1 &&
      !isLastBlock()
    ) {
      updateActiveBlockIndex(activeBlockIndex + 1);
    }
  };

  const handleBackLesson = () => {
    if (activeBlockIndex !== null && activeBlockIndex > 0 && !isLastBlock()) {
      updateActiveBlockIndex(activeBlockIndex - 1);
    }
  };

  const isLastBlock = () => {
    return activeBlockIndex && activeBlockIndex >= listBlocks.length - 1;
  };

  return (
    <div>
      <div
        className={`w-full items-center justify-between lg:-top-14 lg:left-0 ${
          isOpen ? "hidden lg:flex" : "flex"
        }`}
      >
        <button
          onClick={() => handleBackLesson()}
          type="button"
          className="flex gap-2 px-4 py-2 font-semibold text-[#15C666] transition-all hover:text-primary"
        >
          <span>
            <i className="bi bi-caret-left-fill"></i>
          </span>
          Back
        </button>
        <button
          onClick={() => handleNextLesson()}
          type="button"
          className="flex gap-2 px-4 py-2 font-semibold text-[#15C666] transition-all hover:text-primary"
        >
          Next
          <span>
            <i className="bi bi-caret-right-fill"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default RedirectLesson;
