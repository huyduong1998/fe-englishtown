import React, { FC, useEffect, useState } from "react";
import { BlockChooseAnswerQuestionsType } from "types/chapter";
import ListAnswers from "./ListAnswers";

interface Props {
  listQuestions: BlockChooseAnswerQuestionsType[];
}
const ListQuestions: FC<Props> = ({ listQuestions }) => {
  const [isAllowSubmit, setIsAllowSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [arrAnswer, setArrAnswer] = useState<
    { questionId: number; answerId: number }[]
  >([]);

  useEffect(() => {
    if (!isSubmitted) {
      if (listQuestions.length === arrAnswer.length) {
        setIsAllowSubmit(true);
      } else {
        setIsAllowSubmit(false);
      }
    }
  }, [listQuestions, arrAnswer, isSubmitted]);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleUpdateArrAnswer = (questionId: number, answerId: number) => {
    const isExist = arrAnswer.find((item) => item.questionId === questionId);
    if (!isExist) {
      setArrAnswer((prev) => [...prev, { questionId, answerId }]);
    }
  };

  return (
    <div>
      <ul>
        {listQuestions.map((item, index) => {
          return (
            <li key={index} className="mb-6">
              <div>
                <p className="font-semibold">{item.title}</p>
                <ListAnswers
                  isSubmitted={isSubmitted}
                  questionId={item.sort_order}
                  listAnswers={item.answers}
                  onSelectAnswer={handleUpdateArrAnswer}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-5 flex items-center justify-center">
        <button
          onClick={() => handleSubmit()}
          type="button"
          className={`rounded border border-solid px-8 py-2 text-sm transition-all hover:opacity-80 ${
            isAllowSubmit
              ? "border-primary bg-primary text-white"
              : "border-transparent bg-[#CED5DE] text-[#A6B2BF] "
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ListQuestions;
