import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, SetStateAction, useEffect, useRef } from "react";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { ChapterType } from "types/chapter";

interface Props {
  isOpen: boolean;
  chapterItem: ChapterType;
}

const SidebarControlContainer: FC<Props> = ({
  isOpen = false,
  chapterItem,
}) => {
  const router = useRouter();
  const { updateToggleSidebar, isOpenSidebar, lessonId } =
    useOnlineCourseStore();
  const { courseId } = router.query;
  const controlRef = useRef<HTMLDivElement>(null);

  const handleToggleSidebar = () => {
    updateToggleSidebar(!isOpenSidebar);
    router.push(
      `/online-course/${courseId}/lessons/${lessonId}/chapters/${chapterItem.id}`
    );
  };

  return (
    <div
      ref={controlRef}
      className={`absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-1/2 transition-all ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => handleToggleSidebar()}
          className={`rounded-full bg-gradient-to-r from-[#6DCDF6] to-[#9BEEE4] px-4 py-2 text-xs text-white`}
        >
          Start
        </button>
        <button
          className="rounded-full bg-gradient-to-r from-[#F8A192] to-[#F5D8C2] px-4 py-2 text-xs text-white"
          type="button"
        >
          Continue
        </button>
        <Link
          href={chapterItem.flipbook_full_url}
          className="rounded-full bg-gradient-to-r from-[#7BCEC1] to-[#CEE1A6] px-4 py-2 text-xs text-white"
        >
          Flip book
        </Link>
      </div>
    </div>
  );
};

export default SidebarControlContainer;
