import React, { Dispatch, FC, ReactNode } from "react";

type AnswerType = "A" | "B" | "C" | "D";

interface Props {
  children: ReactNode;
  type: AnswerType;
  value: AnswerType;
  onSelect: (value: AnswerType) => void;
}

const ButtonAnswer: FC<Props> = ({
  onSelect,
  type,
  children,
  value,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(type)}
      className={`mb-3 flex gap-2 rounded px-4 py-2 transition-all hover:border-primary ${
        type === value ? "border-primary bg-primary/10" : "border bg-white"
      }`}
    >
      <div>{}</div>
      <div></div>
      {children}
    </button>
  );
};

export default ButtonAnswer;
