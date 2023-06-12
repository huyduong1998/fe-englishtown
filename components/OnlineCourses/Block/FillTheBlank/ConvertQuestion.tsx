import React, { FC, Fragment } from "react";
import InputFillField from "./InputFillField";

interface Props {
  question: string;
}

const ConvertQuestion: FC<Props> = ({ question }) => {
  return (
    <>
      {question &&
        question.split("__").map((item, index) => {
          return (
            <Fragment key={index}>
              <span>{item}</span>
              <span className="inline-flex mr-1 font-semibold h-6 w-6 items-center justify-center rounded-full bg-blue text-white">
                {index + 1}
              </span>
              <InputFillField index={index} />
            </Fragment>
          );
        })}
    </>
  );
};

export default ConvertQuestion;
