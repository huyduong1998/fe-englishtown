import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const TabLevel: FC<Props> = ({ children, isActive }) => {
  return (
    <button
      type="button"
      className={`block w-full rounded px-4 py-2  ${
        isActive ? "bg-primary/10 text-primary" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default TabLevel;
