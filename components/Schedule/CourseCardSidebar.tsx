import moment from "moment";
import React, { useEffect, useState } from "react";
import { getEnrollmentsCourse } from "services/user";
import { EnrollmentCourseType } from "types/course";

const CourseCardSidebar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<EnrollmentCourseType[]>([]);

  useEffect(() => {
    getAllEnrollmentsCourse();
  }, []);

  const getAllEnrollmentsCourse = () => {
    getEnrollmentsCourse()
      .then((response) => {
        const items: EnrollmentCourseType[] = response.data.items;
        setData(items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDateTime = (datetime: string) => {
    return moment(datetime).format("DD/MM/YYYY");
  };

  return (
    <div className="text-blue">
      <h3 className="mb-5 font-medium uppercase">Khoá học</h3>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={item.id}>
              <div className="rounded-xl border border-solid border-[#CED5DF] bg-[#FAFBFC] px-4 py-5">
                <h4 className="font-semibold">{item.course_name}</h4>
                <p className="text-sm text-[#8995A3] mt-5">{getDateTime(item.start_date)}-{getDateTime(item.end_date)}</p>
                <div className="grid grid-cols-3 gap-8 mt-6">
                  <div className="col-span-1">
                    <p className="text-lg font-semibold text-primary mb-1">{item.total_booking}</p>
                    <p className="text-sm text-[#8995A3]">Lớp đã đặt</p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-lg font-semibold text-primary mb-1">{item.total_attendance}</p>
                    <p className="text-sm text-[#8995A3]">Lớp đã tham gia</p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-lg font-semibold text-primary mb-1">{item.avg_exercise_was_done}</p>
                    <p className="text-sm text-[#8995A3]">Tổng điểm trung bình</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseCardSidebar;
