import Image from "next/image";
import { useRouter } from "next/router";
import { FC, Fragment, useEffect, useRef, useState } from "react";
import { ChapterType } from "types/chapter";
import SidebarControlContainer from "./SidebarControlContainer";

interface Props {
  chapterItem: ChapterType;
  index: number;
}

const SidebarChapterItem: FC<Props> = ({ chapterItem, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const chapterItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickContext);
    return () => {
      document.removeEventListener("click", handleClickContext);
    };
  }, []);

  const handleClickContext = (e: MouseEvent) => {
    if (
      chapterItemRef.current &&
      !chapterItemRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleOpenChapter = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <div
        ref={chapterItemRef}
        className={`relative select-none rounded-2xl border border-solid bg-white p-2.5 shadow-md shadow-black/10 transition-all ${
          isOpen ? "mb-10 border-primary pb-10" : "border-transparent"
        }`}
      >
        <div>
          <div className="flex gap-4">
            <div>
              <Image
                src={chapterItem.icon_url}
                width={40}
                height={40}
                className="h-10 w-10 max-w-full rounded-xl bg-primary object-contain p-2"
                alt={chapterItem.name}
              />
            </div>
            <div className="flex w-full flex-1">
              <div className="flex-1">
                <h4
                  className="cursor-pointer text-xs font-semibold transition-all hover:text-primary"
                  onClick={() => handleOpenChapter()}
                >
                  Chapter {(index + 1).toString().padStart(2, "0")}.{" "}
                  {chapterItem.name}
                </h4>
                <div className="">
                  <div className="relative mt-2 flex items-center gap-2.5">
                    <div className="relative h-1 w-full max-w-[154px] flex-1 rounded-full bg-[#E1E1E1]">
                      <div className="absolute left-0 top-0 h-full w-0 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm font-semibold text-[#A6A6A6]">
                      {chapterItem.progress}/{chapterItem.total_block_enrolled}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#A6A6A6]">
                  <span>
                    <i className="bi bi-clock"></i>
                  </span>{" "}
                  {chapterItem.total_time_spent} minutes
                </p>
              </div>
            </div>
          </div>
          <p className="mt-2.5 text-sm text-blue">{chapterItem.description}</p>
        </div>
        <SidebarControlContainer isOpen={isOpen} chapterItem={chapterItem}/>
      </div>
    </Fragment>
  );
};

export default SidebarChapterItem;
