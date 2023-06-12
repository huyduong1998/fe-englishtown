import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  blockIndex: number;
  activeIndex: number;
}

const BlockItemImageContainer: FC<Props> = ({
  children,
  blockIndex,
  activeIndex,
}) => {
  return (
    <div
      className={`relative h-14 w-[75px] mx-auto overflow-hidden rounded-lg border-2 border-solid ${
        blockIndex === activeIndex ? "border-[#2F82FF]" : "border-white"
      }`}
    >
      {children}
    </div>
  );
};

export default BlockItemImageContainer;
