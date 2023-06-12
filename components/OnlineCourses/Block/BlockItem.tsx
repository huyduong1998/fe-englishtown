import Image from "next/image";
import { FC } from "react";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { ChapterBlockDataType } from "types/chapter";
import BlockItemImageContainer from "./BlockItemImageContainer";
interface Props {
  item: ChapterBlockDataType;
  index: number;
}
const BlockItem: FC<Props> = ({ item, index }) => {
  const { updateActiveBlockIndex, activeBlockIndex } = useOnlineCourseStore();
  return (
    <div
      onClick={() => updateActiveBlockIndex(index)}
      className={`flex cursor-pointer justify-start gap-4 lg:inline-block lg:gap-0 lg:text-center`}
    >
      <BlockItemImageContainer
        activeIndex={index}
        blockIndex={activeBlockIndex || 0}
      >
        <Image
          src={item.data.thumb}
          width={75}
          height={56}
          alt={item.title}
          loading="lazy"
          className="h-full p-0.5 mx-auto w-full max-w-full object-contain"
        />
      </BlockItemImageContainer>
      <div className="flex-1">
        <p className="mt-2 hidden text-sm text-[#5D7888] lg:block">
          {index + 1}
        </p>
        <p className="line-clamp-2 lg:hidden">{item.title}</p>
      </div>
    </div>
  );
};

export default BlockItem;
