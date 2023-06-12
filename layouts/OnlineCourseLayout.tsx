import ButtonTabSidebar from "components/OnlineCourses/Sidebar/ButtonTabSidebar";
import ContainerTabSidebar from "components/OnlineCourses/Sidebar/ContainerTabSidebar";
import Tooltip from "components/Tooltip";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { getListLessons } from "services/online-course";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { GetListLesson } from "types/lesson";
import { LessonTabType } from "types/sidebar";

interface Props {
  children: ReactNode;
}

const OnlineCourseLayout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [listLessons, setListLessons] = useState<GetListLesson | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { courseId } = router.query;
  const [activeTabSidebar, setActiveTabSidebar] =
    useState<LessonTabType>("list_lessons");
  const { isOpenSidebar, updateToggleSidebar, ...onlineCourseState } =
    useOnlineCourseStore();

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

  const handleToggleLesson = () => {
    updateToggleSidebar(!isOpenSidebar);
  };

  return (
    <div className="flex h-[calc(100vh_-_73px)] flex-row-reverse">
      <div className="w-24 border-b border-l bg-white">
        <div className="flex items-center justify-center">
          <div className="">
            <div className="mt-6">
              <Tooltip title="Bài giảng" position="left">
                <button
                  onClick={() => handleToggleLesson()}
                  type="button"
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border border-solid text-blue transition-all hover:border-primary hover:text-primary ${
                    isOpenSidebar
                      ? "border-primary/10 bg-primary/10 text-primary hover:border-primary/10"
                      : "border-gray-400"
                  }`}
                >
                  <i className="bi bi-grid-3x3-gap-fill"></i>
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full flex-1 overflow-hidden">
        <div
          className={`absolute left-0 top-0 z-50 flex h-full w-full justify-end overflow-hidden bg-white/70 backdrop-blur transition-all ${
            isOpenSidebar ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            className={`relative w-[559px] origin-right bg-white p-4 pb-6 pl-10 pr-6 pt-6 transition-all ${
              isOpenSidebar ? "scale-x-100" : "scale-x-0"
            }`}
          >
            <div className="absolute left-0 top-8 block -translate-x-1/2">
              <button
                onClick={() => updateToggleSidebar(false)}
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-blue shadow-md shadow-black/10 transition-all hover:bg-blue hover:text-white"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div>
              <div className="flex items-center gap-1 bg-[#F2F5F7] p-0.5">
                <div className="flex-auto">
                  <ButtonTabSidebar
                    type="introduce"
                    onChange={setActiveTabSidebar}
                    isActive={activeTabSidebar === "introduce"}
                  >
                    Giới thiệu chung
                  </ButtonTabSidebar>
                </div>
                <div className="flex-auto">
                  <ButtonTabSidebar
                    type="list_lessons"
                    onChange={setActiveTabSidebar}
                    isActive={activeTabSidebar === "list_lessons"}
                  >
                    Danh sách bài giảng
                  </ButtonTabSidebar>
                </div>
              </div>
              <div className="mt-4">
                <ContainerTabSidebar tabType={activeTabSidebar} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full bg-[#FAFBFC] pb-44">
          <div className="h-full overflow-auto px-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCourseLayout;
