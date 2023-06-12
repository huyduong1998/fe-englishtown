import { FC, useEffect, useRef, useState } from "react";
import { AnswerType, QuestionItemType } from "./types";

const QuestionItem: FC<QuestionItemType> = ({ item }) => {
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickContext);
    return () => {
      document.removeEventListener("click", handleClickContext);
    };
  }, []);

  const handleClickContext = (e: MouseEvent) => {
    if (answerRef.current && !answerRef.current.contains(e.target as Node)) {
      setIsOpenAnswer(false);
    }
  };

  const handleSelectOption = (answerItem: AnswerType) => {
    console.log(answerItem);
    setIsOpenAnswer(false);
  };

  return (
    <div ref={answerRef} className="relative">
      <div className="relative mb-2.5 flex gap-2">
        <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue text-white">
          {item.question_index}
          <div className="absolute bottom-0 left-1/2 h-9 w-5 translate-y-full rounded-bl-lg border-b border-l border-dashed border-[#CED5DE]"></div>
        </span>
        {/* <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#15C666] text-white">
          {item.question_index}
          <div className="absolute bottom-0 left-1/2 h-9 w-5 translate-y-full rounded-bl-lg border-b border-l border-dashed border-[#15C666]"></div>
        </span> */}
        {/* <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FF434E] text-white">
          {item.question_index}
          <div className="absolute bottom-0 left-1/2 h-9 w-5 translate-y-full rounded-bl-lg border-b border-l border-dashed border-[#FF434E]"></div>
        </span> */}
        <p>{item.title}</p>
      </div>
      <div className="relative ml-8 mr-4">
        <p
          onClick={() => setIsOpenAnswer((prev) => !prev)}
          className="rounded-lg border border-dashed border-blue/50 px-4 py-3 text-[#A6B2BF]"
        >
          Chọn đáp án ở đây
        </p>
        <div
          className={`absolute -top-10 z-10 h-auto w-full rounded-lg bg-white p-4 shadow-lg shadow-black/10 transition-all ${
            isOpenAnswer ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div className="max-h-48 overflow-y-auto">
            {item.answers.map((answerItem, answerIndex) => {
              return (
                <div
                  key={answerIndex}
                  className="flex items-start gap-4 py-2"
                  onClick={() => handleSelectOption(answerItem)}
                >
                  <span>{answerItem.answer_index}</span>
                  <span>{answerItem.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="relative ml-8 mr-8 rounded-lg border border-solid border-[#15C666] bg-[#15C666]/10 px-4 py-3 text-[#15C666]">
        Chọn đáp án ở đây
      </div> */}
      {/* <div className="relative ml-8 mr-8 rounded-lg border border-solid border-[#FF434E] bg-[#FF434E]/10 px-4 py-3 text-[#FF434E]">
        Chọn đáp án ở đây
      </div> */}
    </div>
  );
};

export default QuestionItem;
