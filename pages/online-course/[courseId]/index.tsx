import ListLessons from "components/OnlineCourses/Lesson/ListLessons";
import dynamic from "next/dynamic";
import { Be_Vietnam_Pro } from "next/font/google";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getListLessons } from "services/online-course";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { GetListLesson } from "types/lesson";
const Loading = dynamic(() => import("components/Loading"));
const LessonItem = dynamic(
  () => import("components/OnlineCourses/Lesson/LessonItem")
);
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const OnlineCourseDetailPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();
  const [tabActive, setTabActive] = useState();
  const [listLessons, setListLessons] = useState<GetListLesson | null>(null);
  const { courseId } = router.query;
  const onlineCourseState = useOnlineCourseStore((state) => state);
  
  useEffect(() => {
    if (courseId && +courseId) {
      getListLessons(+courseId)
        .then((response) => {
          const data: GetListLesson = response.data;
          setListLessons(data);
          onlineCourseState.updateListLessons(data);
          setIsError(false);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [router.query]);

  if (isError) {
    <>
      <div className="container">
        <h1 className="py-10 text-center text-primary">Something was wrong!</h1>
      </div>
    </>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container px-4 max-w-5xl text-[#194761]">
        <div className="flex my-4 overflow-x-auto flex-nowrap scrollbar-hide">
          <div className="flex-1">
            <button
              type="button"
              className="block w-full rounded bg-primary/10 px-4 py-2 text-primary"
            >
              Beginner
            </button>
          </div>
          <div className="flex-1 text-[#5D7888]">
            <button
              type="button"
              className="block w-full rounded px-4 py-2 text-sm font-semibold uppercase"
            >
              Intermediate
            </button>
          </div>
          <div className="flex-1 text-[#5D7888]">
            <button
              type="button"
              className="block w-full rounded px-4 py-2 text-sm font-semibold uppercase"
            >
              Advanced
            </button>
          </div>
          <div className="flex-1 text-[#5D7888]">
            <button
              type="button"
              className="block w-full rounded px-4 py-2 text-sm font-semibold uppercase"
            >
              Proficient
            </button>
          </div>
        </div>
        <div>
          {listLessons?.items && (
            <ListLessons listLessons={listLessons.items} />
          )}
        </div>
      </div>
    </>
  );
};

export default OnlineCourseDetailPage;
