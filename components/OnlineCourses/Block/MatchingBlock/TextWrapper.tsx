import React, { FC, useEffect, useState } from "react";
import { css, styled } from "styled-components";
import { AnswerStatus } from "types/block";

interface Props {
  value: string;
  onSelect: () => void;
  status: AnswerStatus;
}
const TextWrapper: FC<Props> = (props) => {
  return (
    <AnswerType
      $status={props.status}
      onClick={() => props.onSelect()}
      className={`flex h-[120px] cursor-pointer items-center justify-center rounded-lg bg-white px-4 py-5 text-center transition-all ${
        props.status === "DEFAULT" ? "hover:border-primary" : ""
      }`}
    >
      <p className="line-clamp-1 lg:line-clamp-2">{props.value}</p>
    </AnswerType>
  );
};

export default TextWrapper;

const AnswerType = styled.div<{ $status: AnswerStatus }>`
  ${(props) => {
    switch (props.$status) {
      case "DEFAULT": {
        return css`
          border: dashed 2px #ced5de;
        `;
      }
      case "CORRECT": {
        return css`
          border: solid 2px #15c666;
          background-color: #15c66614;
        `;
      }
      case "INCORRECT": {
        return css`
          border: solid 2px #ff434e;
          background-color: #ff434e14;
        `;
      }
      case "SELECTED": {
        return css`
          border: solid 2px #fabb18;
          background-color: #f6f1e4;
          cursor: not-allowed;
        `;
      }
      case "WAITING": {
        return css`
          border: dashed 2px #fabb18;
        `;
      }
    }
  }}
`;
