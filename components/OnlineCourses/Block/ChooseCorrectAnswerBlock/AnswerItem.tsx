import React, { FC, useEffect, useState } from "react";
import useChooseAnswerStore from "store/blocks/chooseAnswerStore";
import { css, styled } from "styled-components";
import { AnswerStatus } from "types/block";
import { BlockChooseAnswerAnswersType } from "types/chapter";

interface Props {
  data: BlockChooseAnswerAnswersType;
  isMobile?: boolean; //Truy cập bằng mobile hay không
  onSelect: () => void;
  userSelect: number | null; // Người dùng chọn
  isSubmitted: boolean; // Kiểm tra đã submmit hay chưa
  isSelected: boolean; // Kiếm tra đã chọn hay chưa
}

const AnswerItem: FC<Props> = (props) => {
  const [status, setStatus] = useState<AnswerStatus>("DEFAULT");

  useEffect(() => {
    if (props.isSubmitted) {
      // Kiểm tra đã submit hay chưa
      if (props.isSelected) {
        //Kiểm tra được chọn hay không
        if (props.data.is_answer) {
          setStatus("CORRECT");
        } else {
          setStatus("INCORRECT");
        }
      }
    } else {
      if (props.isSelected) {
        // Kiểm tra được chọn hay không
        setStatus("SELECTED");
      } else {
        setStatus("DEFAULT");
      }
    }
  }, [props.isSelected, props.isSubmitted, props.data]);

  const handleSelect = () => {
    if (!props.isSubmitted) {
      props.onSelect();
    }
  };

  return (
    <div>
      <div
        className="mt-2 inline-block first:mt-4"
        onClick={() => handleSelect()}
      >
        <AnswerText
          className={`block cursor-pointer rounded bg-white px-4 py-2 transition lg:inline-block`}
          $status={status}
        >
          {props.data.title}
        </AnswerText>
      </div>
    </div>
  );
};

const AnswerText = styled.span<{
  $status: AnswerStatus;
}>`
  ${(props) => {
    switch (props.$status) {
      case "CORRECT": {
        return css`
          border: solid 1px #15c666;
          color: #15c666;
          background-color: #15c66614;
        `;
      }
      case "INCORRECT": {
        return css`
          border: solid 1px #ff434e;
          color: #ff434e;
          background-color: #ff434e14;
        `;
      }
      case "SELECTED": {
        return css`
          border: solid 1px #fabb18;
          color: #fabb18;
          background-color: #fabb1814;
        `;
      }
      case "DEFAULT": {
        return css`
          border: solid 1px #e8eaedb8;
          color: #194761;
        `;
      }
    }
  }}
`;

export default AnswerItem;
