import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { ChapterType } from "types/chapter";
import ControlContainer from "./ControlContainer";
import Link from "next/link";

interface Props {
  chapterItem: ChapterType;
  index: number;
}

const ChapterItem: FC<Props> = ({ chapterItem, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
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
        className={`relative select-none rounded-2xl border border-solid bg-white p-2 shadow-md shadow-black/10 transition-all lg:p-6 ${
          isOpen ? "lg:mb-10 border-primary lg:pb-10" : "border-transparent"
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
            <div className="flex w-full flex-1 flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <h4
                  className="cursor-pointer text-sm font-semibold transition-all hover:text-primary lg:text-base"
                  onClick={() => handleOpenChapter()}
                >
                  Chapter {(index + 1).toString().padStart(2, "0")}.{" "}
                  {chapterItem.name}
                </h4>
                <p className="text-xs">
                  <span>
                    <i className="bi bi-clock"></i>
                  </span>{" "}
                  5 minutes
                </p>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="inline-flex gap-2 rounded-full bg-gradient-to-l from-[#9BEEE4] to-[#6DCDF6] px-4 py-2 text-sm text-white lg:text-base"
                >
                  <span>
                    <i className="bi bi-calendar3"></i>
                  </span>
                  Booking a teacher
                </button>
              </div>
            </div>
          </div>
          <p className="mt-2.5 text-sm text-[#5D7888]">
            {chapterItem.description}
          </p>
          <div className="mt-3">
            <p className="text-sm">
              <span className="text-base font-semibold">100%</span> points
            </p>
            <div className="grid grid-cols-[1fr_60px] items-center gap-1">
              <div className="relative h-1.5 w-full rounded-full bg-[#CED5DE]">
                <span
                  className="absolute left-0 top-0 h-full w-2/3 rounded-full bg-primary"
                  style={{ width: chapterItem.progress + "%" }}
                ></span>
              </div>
              <div>
                <p className="text-right text-sm">
                  <span className="text-base font-medium text-blue">20</span>/20
                </p>
              </div>
            </div>
          </div>
        </div>
        <ControlContainer isOpen={isOpen} chapterItem={chapterItem} />
      </div>
    </Fragment>
  );
};

export default ChapterItem;
