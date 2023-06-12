import ButtonTabSidebar from "components/OnlineCourses/Sidebar/ButtonTabSidebar";
import ContainerTabSidebar from "components/OnlineCourses/Sidebar/ContainerTabSidebar";
import Tooltip from "components/Tooltip";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { getListLessons } from "services/online-course";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { GetListLesson } from "types/lesson";
import { LessonTabType, SidebarTabType } from "types/sidebar";

interface Props {
  children: ReactNode;
}

const OnlineCourseLayoutMobile: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [listLessons, setListLessons] = useState<GetListLesson | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<SidebarTabType>("slide");
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
    <div className="block flex-row-reverse">
      <div className="border-b">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-4 py-1">
            <div>
              <button
                onClick={() => handleToggleLesson()}
                type="button"
                className={`flex items-center gap-1 px-4 py-2 text-xs font-semibold transition-all ${
                  isOpenSidebar ? "text-primary" : "text-blue"
                }`}
              >
                <span className="text-lg">
                  <i className="bi bi-grid-3x3-gap-fill"></i>
                </span>
                <span>Bài giảng</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => updateToggleSidebar(false)}
                type="button"
                className={`flex items-center gap-1 px-4 py-2 text-xs font-semibold text-blue transition-all ${
                  isOpenSidebar ? "text-blue" : "text-primary"
                }`}
              >
                <span className="text-lg">
                  <i className="bi bi-play-btn"></i>
                </span>
                <span>Trình chiếu</span>
              </button>
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
            className={`relative w-full origin-right bg-white p-4 transition-all ${
              isOpenSidebar ? "scale-x-100" : "scale-x-0"
            }`}
          >
            <div className="absolute left-0 top-8 hidden -translate-x-1/2">
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
        <div className="h-full bg-[#FAFBFC] pb-28">{children}</div>
      </div>
    </div>
  );
};

export default OnlineCourseLayoutMobile;
