import React, { FC } from "react";
import { LessonType } from "types/lesson";
import LessonItem from "./LessonItem";

interface Props {
  listLessons: LessonType[];
}

const ListLessons: FC<Props> = ({ listLessons = [] }) => {
  return (
    <div>
      {listLessons.length > 0 &&
        listLessons.map((item, index) => {
          return (
            <div key={item.id} className="mb-4">
              <LessonItem item={item} index={index + 1} />
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(ListLessons);
