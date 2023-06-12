import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useRef } from "react";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { ChapterType } from "types/chapter";

interface Props {
  isOpen: boolean;
  chapterItem: ChapterType;
}

const ControlContainer: FC<Props> = ({ isOpen = false, chapterItem }) => {
  const controlRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { courseId } = router.query;
  const onlineCourseState = useOnlineCourseStore();

  return (
    <div
      ref={controlRef}
      className={`lg:absolute bottom-0 left-1/2 w-full lg:-translate-x-1/2 lg:translate-y-1/2 transition-all ${
        isOpen ? "visible opacity-100 block" : "invisible opacity-0 hidden"
      }`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
        <Link
          href={`/online-course/${courseId}/lessons/${onlineCourseState.lessonId}/chapters/${chapterItem.id}`}
          className={`rounded-full bg-gradient-to-r from-[#6DCDF6] to-[#9BEEE4] px-4 py-2 text-sm text-white lg:text-base`}
        >
          Start{" "}
          <span>
            <i className="bi bi-play-fill"></i>
          </span>
        </Link>
        <button
          className="rounded-full bg-gradient-to-r from-[#F8A192] to-[#F5D8C2] px-4 py-2 text-sm text-white lg:text-base"
          type="button"
        >
          Continue{" "}
          <span>
            <i className="bi bi-arrow-right-short"></i>
          </span>
        </button>
        <Link
          href={chapterItem.flipbook_full_url}
          className="rounded-full bg-gradient-to-r from-[#7BCEC1] to-[#CEE1A6] px-4 py-2 text-sm text-white lg:text-base"
        >
          Flip book{" "}
          <span>
            <i className="bi bi-book"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ControlContainer;
