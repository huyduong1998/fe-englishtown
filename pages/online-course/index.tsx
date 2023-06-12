import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CourseType } from "types/course";
import CourseCard from "components/Course/CourseCard";
import Loading from "components/Loading";
import { useTranslation } from "react-i18next";
import { getCourses } from "services/online-course";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function OnlineCourse() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    getCoursesStarted();
  }, []);

  async function getCoursesStarted() {
    try {
      const response = await getCourses();
      // setCourses(response);
      const data = await response.data.items;
      setCourses(data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  if (isError) {
    return (
        <h1 className="py-1 text-center text-primary">Something was wrong!</h1>
    );
  }

  return (
    <>
      <div className="bg-[#FBA1200F]">
        <div className="container">
          <div className="grid lg:grid-cols-2 pt-10 lg:pt-0 items-center gap-20 px-10">
            <div className="col-span-1">
              <h1 className="mb-4 text-3xl lg:text-5xl font-bold leading-tight text-blue">
                Sử dụng tiếng Anh 100%
              </h1>
              <p className="text-lg text-[#5D7888]">
                {t("online_course_hero_description")}
              </p>
            </div>
            <div className="col-span-1 pr-10">
              <Image
                src="/images/study_img.svg"
                alt="Online course"
                className="h-auto w-full max-w-full"
                width={590}
                height={340}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-9 px-4">
        <h2 className="mb-8 mt-12 text-center text-[28px] font-semibold text-blue">
          {t("online_course_list_courses")}
        </h2>
        {isLoading && <Loading />}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {!isLoading &&
            courses.map((course, index) => {
              return (
                <div key={index} className="col-span-1">
                  <CourseCard course={course} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
