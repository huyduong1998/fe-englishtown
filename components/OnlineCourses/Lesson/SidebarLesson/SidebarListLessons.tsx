import Image from "next/image";
import React, { FC } from "react";
import { LessonType } from "types/lesson";
import SidebarLessonItem from "./SidebarLessonItem";
interface Props {
  listLessons: LessonType[] | null;
}

const ListLessons: FC<Props> = ({ listLessons }) => {
  if (!listLessons) {
    return null;
  }
  return (
    <div>
      {listLessons.map((item, index) => {
        return (
          <div key={index} className="mb-4">
            <SidebarLessonItem item={item} index={index + 1} />
          </div>
        );
      })}
    </div>
  );
};

export default ListLessons;
