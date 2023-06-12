import { FC, useState } from "react";
import { ChapterBlockDataType, ChapterBlockType } from "types/chapter";
import ListContainer from "./ListContainer";
import RedirectLesson from "./RedirectLesson";

interface Props {
  listBlocks: ChapterBlockDataType[];
}

const BlockListBottom: FC<Props> = ({ listBlocks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div
      className={
        "fixed bottom-0 left-0 z-50 w-full overflow-hidden rounded-tl-xl rounded-tr-xl bg-white lg:absolute lg:rounded-none lg:bg-[#FAFBFC] lg:px-10"
      }
    >
      <RedirectLesson isOpen={isOpen} />
      <hr className="hidden lg:block" />
      <div className="relative bg-[#FAFBFC]">
        <div className="absolute right-0 top-0 hidden -translate-y-1/2 lg:block">
          <button
            onClick={() => setIsHidden((prev) => !prev)}
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-blue text-xl text-white transition-all ${
              isHidden ? "rotate-180" : "rotate-0"
            }`}
            type="button"
          >
            <i className="bi bi-arrow-down-short"></i>
          </button>
        </div>
        <div className="relative text-center lg:hidden">
          {isOpen ? (
            <div className="py-4">
              <p>Danh sách video bài học</p>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          ) : (
            <div
              className="bg-primary py-4 text-center font-semibold text-blue"
              onClick={() => setIsOpen(true)}
            >
              Xem danh sách bài học{" "}
              <i className="bi bi-arrow-up-circle-fill"></i>
            </div>
          )}
        </div>
        <div
          className={`pb-2 ${
            isOpen
              ? "max-h-[60vh] overflow-y-auto"
              : "max-h-0 overflow-hidden lg:max-h-none lg:overflow-auto"
          }`}
        >
          <div
            className={`flex w-full flex-col gap-x-4 gap-y-4 overflow-x-auto overflow-y-auto overscroll-contain px-4 pb-2 pt-4 scrollbar-hide lg:h-auto lg:flex-row lg:flex-nowrap lg:gap-y-0 lg:scrollbar-default ${
              isHidden ? "lg:max-h-0 lg:overflow-hidden" : "max-h-none"
            } ${isOpen ? "" : ""}`}
          >
            <ListContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockListBottom;
