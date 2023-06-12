import Image from "next/image";
import React, { FC } from "react";
import { css, styled } from "styled-components";
import { AnswerStatus } from "types/block";

interface Props {
  src: string;
  title: string;
  index?: number;
  status: AnswerStatus;
  onSelect: () => void;
}

const ImageWrapper: FC<Props> = (props) => {
  return (
    <AnswerType
      onClick={() => props.onSelect()}
      $status={props.status}
      className={`h-[120px] lg:w-[200px] cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-white p-1 transition-all ${
        props.status === "DEFAULT" ? "hover:border-primary" : ""
      }`}
    >
      <Image
        alt={`${props.title ?? "Matching game"}`}
        src={props.src}
        className="h-full w-full max-w-full rounded-xl object-cover"
        width={200}
        height={120}
      />
    </AnswerType>
  );
};

export default ImageWrapper;

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
        `;
      }
      case "INCORRECT": {
        return css`
          border: solid 2px #ff434e;
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
