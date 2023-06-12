import React, { FC } from "react";
import { LessonTabType } from "types/sidebar";
import IntroduceTabSidebar from "./IntroduceTabSidebar";
import ListLessonsTabSidebar from "./ListLessonsTabSidebar";

interface Props {
  tabType: LessonTabType;
}

const ContainerTabSidebar: FC<Props> = ({ tabType }) => {
  switch (tabType) {
    case "introduce": {
      return <IntroduceTabSidebar />;
    }
    case "list_lessons": {
      return <ListLessonsTabSidebar />;
    }
    default:
      return null;
  }
};

export default ContainerTabSidebar;
