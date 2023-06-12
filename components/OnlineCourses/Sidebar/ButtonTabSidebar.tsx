import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { LessonTabType } from "types/sidebar";

interface Props {
  isActive: boolean;
  onChange: Dispatch<SetStateAction<LessonTabType>>;
  type: LessonTabType;
  children: ReactNode;
}

const ButtonTabSidebar: FC<Props> = ({
  isActive,
  onChange,
  type,
  children,
}) => {
  return (
    <button
      onClick={() => onChange(type)}
      type="button"
      className={`block w-full rounded px-4 py-2 text-xs font-semibold lg:text-sm ${
        isActive ? "bg-white text-blue" : "bg-transparent text-[#5D7888]"
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonTabSidebar;
