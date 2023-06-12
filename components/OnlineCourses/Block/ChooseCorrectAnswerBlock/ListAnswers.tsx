import { FC, useEffect, useState } from "react";
import { BlockChooseAnswerAnswersType } from "types/chapter";
import AnswerItem from "./AnswerItem";
import useChooseAnswerStore from "store/blocks/chooseAnswerStore";
import { AnswerStatus } from "types/block";

interface Props {
  listAnswers: BlockChooseAnswerAnswersType[];
  questionId: number;
  isSubmitted: boolean;
  onSelectAnswer: (questionId: number, answerId: number) => void;
}

const ListAnswers: FC<Props> = ({
  listAnswers,
  questionId,
  isSubmitted,
  ...props
}) => {
  const [userSelect, setUserSelect] = useState<number | null>(null);
  const { answerData, updateAnswerData } = useChooseAnswerStore();

  const handleUserSelect = (answerId: number) => {
    setUserSelect(answerId);
    props.onSelectAnswer(questionId, answerId);
  };

  return (
    <div>
      {listAnswers.map((answerItem, answerIndex) => {
        return (
          <AnswerItem
            key={answerItem.sort_order}
            data={answerItem}
            onSelect={() => handleUserSelect(answerItem.sort_order)}
            userSelect={userSelect}
            isSelected={userSelect === answerItem.sort_order}
            isSubmitted={isSubmitted}
          />
        );
      })}
    </div>
  );
};

export default ListAnswers;
