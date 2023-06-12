import Loading from "components/Loading";
import React, { useCallback } from "react";
import useOnlineCourseStore from "store/useOnlineCourseStore";

const ChapterProgress = () => {
  const { chapterData } = useOnlineCourseStore();

  const getPercent = useCallback(() => {
    if (!chapterData) {
      return 0;
    }
    return (chapterData.progress / chapterData.total_block_enrolled) * 100;
  }, [chapterData]);

  if (!chapterData) {
    return <Loading />;
  }
  
  return (
    <div className="relative mx-auto flex max-w-3xl items-center gap-2">
      <div className="relative mx-auto flex h-1 w-full max-w-3xl items-center gap-2 rounded-full bg-[#E1E1E1]">
        <div
          className={
            "absolute top-0 h-full flex-1 rounded-full bg-primary"
          }
          style={{ width: getPercent() + "%" }}
        ></div>
      </div>
      <p className="text-sm font-semibold text-[#A6A6A6]">
        {chapterData?.progress}/{chapterData?.total_block_enrolled}
      </p>
    </div>
  );
};

export default ChapterProgress;
