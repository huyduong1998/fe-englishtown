import styles from "../../module_styles/course_detail_card.module.css";
import Image from "next/image";
import React, { FC } from "react";
import { CourseType } from "types/course";

interface Props {
  course: CourseType;
}

const CourseDetailCard: FC<Props> = (props) => {
  const course = props.course;
  return (
    <div className={styles.CourseDetailCard}>
      <div className={styles.Image}>
        <Image
          alt={course.name}
          fill={true}
          src={course.thumb_url}
          style={{ objectFit: "cover", borderRadius: "16px 16px 0px 0px" }}
        />
      </div>
      <div className={styles.CourseContent}>
        <p className={styles.Name}>{course.name}</p>
        <p className={styles.Description}>{course.description}</p>
      </div>
    </div>
  );
};

export default CourseDetailCard;
