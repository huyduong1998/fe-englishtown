import Loading from "components/Loading";
import SidebarChapterItem from "components/OnlineCourses/Chapter/SidebarChapter/SidebarChapterItem";
import Image from "next/image";
import React, {
  FC,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getListChapters } from "services/online-course";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { ChapterType, GetListChapter } from "types/chapter";
import { LessonType } from "types/lesson";

interface Props {
  item: LessonType;
  index: number;
}

const SidebarLessonItem: FC<Props> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listChapters, setListChapters] = useState<GetListChapter | null>(null);
  const lessonItemRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const onlineCourseStore = useOnlineCourseStore();

  useEffect(() => {
    document.addEventListener("click", handleClickContext);
    return () => {
      document.removeEventListener("click", handleClickContext);
    };
  }, []);

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

  const handleClickContext = (e: globalThis.MouseEvent) => {
    if (
      lessonItemRef.current &&
      !lessonItemRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleOpenLesson = async (lessonId: number) => {
    onlineCourseStore.updateLessonId(lessonId);
    if (!listChapters) {
      setIsLoading(true);
      await fetchListChapters();
      setIsOpen((prev) => !prev);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="mb-4" ref={lessonItemRef}>
      <div className="flex gap-4 rounded-lg p-2.5 shadow-md shadow-black/10">
        <div className="h-[72px] w-[82px]">
          <Image
            alt={item.name}
            src={item.thumb_url}
            width={82}
            height={72}
            loading="lazy"
            className="h-full w-full max-w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <div>
            <p className="text-[10px] text-[#A6A6A6]">Lesson {index + 1}</p>
            <h3
              className="mt-1 cursor-pointer text-xs font-semibold transition-all hover:text-primary"
              onClick={() => handleOpenLesson(item.id)}
            >
              {item.description}
            </h3>
            <p className="mt-1 text-xs text-[#A6A6A6]">{item.name}</p>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="py-4">
          <Loading />
        </div>
      )}
      <div className={`mt-2.5 flex gap-4 p-2.5 ${isOpen ? "flex" : "hidden"}`}>
        <div className="w-[82px] hidden lg:block"></div>
        <div className="flex-1">
          <div className={`transition-all`}>
            {listChapters &&
              listChapters.items.map((chapterItem, idx) => {
                return (
                  <div className="mb-4 last:mb-0" key={idx}>
                    <SidebarChapterItem
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

export default SidebarLessonItem;
