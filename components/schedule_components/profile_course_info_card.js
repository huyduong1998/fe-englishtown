import styles from "../../module_styles/profile_course_info_card.module.css";
import { formatDateTime, DateFormatType } from "../../utils/date_utils";
import { AppCard } from "../app_card_component";
import { LanguageKeys } from "../../constants/language_keys";
import { i18n } from "../../utils/language_util";
import React from 'react';
export function CourseCard(props) {
  const course = props.course;

  return (
    <AppCard margin={"12px 0px"}>
      <div className={styles.CourseInfo}>
        <h3 className="font-semibold leading-5 text-blue">
          {course.course_name}
        </h3>
        <p className="mt-5 text-[#8995A3]">
          {formatDateTime(
            course.start_date,
            DateFormatType.yearMonthDayWithSlash
          )}{" "}
          -{" "}
          {formatDateTime(
            course.end_date,
            DateFormatType.yearMonthDayWithSlash
          )}
        </p>
        <div className="mt-6 flex items-start gap-4">
          <AchievementView
            value={course.total_book_attendance ?? 0}
            title={i18n(LanguageKeys.bookedClass)}
          />
          <AchievementView
            value={course.total_exercise_was_done ?? 0}
            title={i18n(LanguageKeys.classAttendedByMe)}
          />
          <AchievementView
            value={course.avg_exercise_was_done ?? 0}
            title={i18n(LanguageKeys.totalPointCourse)}
          />
        </div>
      </div>
    </AppCard>
  );
}

function AchievementView(props) {
  return (
    <div className={styles.AchievementView}>
      <h4 className="mb-1 text-lg leading-normal">{props.value}</h4>
      <p>{props.title}</p>
    </div>
  );
}
