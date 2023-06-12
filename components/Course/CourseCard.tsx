import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CourseType } from "types/course";

const CourseCard = (props: { course: CourseType }) => {
  const course = props.course;

  if (!props.course) {
    return null;
  }

  return (
    <div
      className="h-full overflow-hidden rounded-2xl border border-solid border-[#E8EAED]"
      key={`course-card-${course.id}`}
    >
      <div className="h-[180px]">
        <Image
          width={400}
          height={180}
          alt={course.name}
          src={course.thumb_url}
          style={{ objectFit: "cover", borderRadius: "16px 16px 0px 0px" }}
          className="h-full w-full max-w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-blue transition-all hover:text-primary">
          <Link href={`/online-course/${course.id}`} className="block">
            {course.name}
          </Link>
        </h4>
        <p className="text-sm">{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
