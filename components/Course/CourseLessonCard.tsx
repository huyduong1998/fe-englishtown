import styles from "../../module_styles/course_lesson_card.module.css";
import Image from "next/image";
import React, { FC } from "react";
import { LessonType } from "types/lesson";

interface Props {
  lesson: LessonType;
  onClick: (lesson: LessonType) => void;
}

const CourseLessonCard: FC<Props> = (props) => {
  const lesson = props.lesson;

  return (
    <div
      onClick={() => props.onClick(lesson)}
      className={styles.CourseLessonCard}
    >
      <div className={styles.Image}>
        <Image
          alt={lesson.name}
          fill={true}
          src={lesson.thumb_url}
          style={{ objectFit: "cover", borderRadius: "16px 0px 0px 16px" }}
          className="h-auto w-full max-w-full object-cover"
        />
      </div>
      <div className={styles.LessonContent}>
        <p className={styles.Name}>{lesson.name}</p>
        <p className={styles.Description}>{lesson.description}</p>
      </div>
    </div>
  );
};

export default CourseLessonCard;
