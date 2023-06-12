import dynamic from "next/dynamic";
import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { getListChapters } from "services/online-course";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { GetListChapter } from "types/chapter";
import { LessonType } from "types/lesson";
const Loading = dynamic(() => import("../../Loading"));
const ChapterItem = dynamic(() => import("../Chapter/ChapterItem"));

interface Props {
  item: LessonType;
  index: number;
}

const LessonItem: FC<Props> = ({ item, index }) => {
  const [listChapters, setListChapters] = useState<GetListChapter | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const lessonItemRef = useRef<HTMLDivElement>(null);
  const onlineCourseState = useOnlineCourseStore();

  useEffect(() => {
    document.addEventListener("click", handleClickContext);
    return () => {
      document.removeEventListener("click", handleClickContext);
    };
  }, []);

  const handleClickContext = (e: MouseEvent) => {
    if (
      lessonItemRef.current &&
      !lessonItemRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const fetchListChapters = useCallback(() => {
    getListChapters(item.id)
      .then((response) => {
        const data: GetListChapter = response.data;
        setListChapters(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setListChapters(null);
        setIsLoading(false);
      });
  }, [listChapters]);

  const handleToggleLesson = async () => {
    onlineCourseState.updateLessonId(item.id);
    if (!listChapters) {
      setIsLoading(true);
      await fetchListChapters();
      setIsOpen((prev) => !prev);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="rounded-2xl bg-white p-2 shadow-md shadow-black/10 lg:p-6"
      ref={lessonItemRef}
    >
      <div className={`flex select-none gap-4 rounded-2xl`}>
        <div className="h-16 w-16 lg:h-36 lg:w-36">
          <Image
            src={item.thumb_url}
            width={144}
            height={144}
            className="h-full w-full rounded-lg object-cover"
            loading="lazy"
            alt={item.description}
          />
        </div>
        <div className="flex-1">
          <div>
            <p className="text-sm font-semibold uppercase text-blue">
              Lesson {index.toString().padStart(2, "0")}
            </p>
            <h2
              onClick={handleToggleLesson}
              className="mt-2 cursor-pointer text-sm font-semibold text-blue transition-all hover:text-primary lg:text-lg"
            >
              {item.description}
            </h2>
            <p className="mt-1 text-sm text-[#5D7888] lg:text-base">
              {item.name}
            </p>
            <div className="mt-2">
              <p className="text-sm text-primary">
                <span className="text-sm font-bold uppercase lg:text-xl">
                  100%
                </span>{" "}
                pointer
              </p>
              <div className="flex items-center gap-5">
                <div className="relative flex-1">
                  <div className="h-2 w-full rounded-full bg-primary"></div>
                  <span className="absolute left-1/3 top-1/2 block h-[18px] w-[18px] -translate-y-1/2 rounded-full border-[6px] border-white bg-transparent shadow-md shadow-black/10"></span>
                </div>
                <div>
                  <p className="text-sm text-[#5D7888]">
                    <span className="text-sm lg:text-xl font-medium text-blue">60</span>/60
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mt-6 flex select-none gap-4 rounded-2xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="lg:w-36 hidden lg:block"></div>
        <div className="flex-1">
          <div className={`rounded-2xl bg-[#F2F5F7] p-2 lg:p-6 transition-all`}>
            {isLoading && <Loading />}
            {!isLoading &&
              listChapters &&
              listChapters.items.map((chapterItem, idx) => {
                return (
                  <div className="mb-4 last:mb-0" key={idx}>
                    <ChapterItem
                      key={idx}
                      chapterItem={chapterItem}
                      index={idx}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonItem;
