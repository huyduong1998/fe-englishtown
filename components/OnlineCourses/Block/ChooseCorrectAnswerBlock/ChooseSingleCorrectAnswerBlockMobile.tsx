import {
  BlockChooseAnswerAnswersType,
  BlockChooseAnswerType,
} from "types/chapter";
import ParaphraseMobile from "./ParaphraseMobile";
import { FC, useState } from "react";
import Paraphrase from "./Paraphrase";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import AnswerItem from "./AnswerItem";
import Loading from "components/Loading";
import VideoContainer from "components/VideoJs/VideoContainer";
import ListQuestions from "./ListQuestions";

interface Props {
  data: BlockChooseAnswerType;
}

const ChooseSingleCorrectAnswerBlockMobile: FC<Props> = ({ data }) => {
  const [userSelected, setUserSelected] =
    useState<BlockChooseAnswerAnswersType | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { activeBlockIndex } = useOnlineCourseStore();

  const handleSelectAnswer = (answerItem: BlockChooseAnswerAnswersType) => {
    setUserSelected(answerItem);
    setIsCorrect(false);
    setIsActive(false);
  };

  const handleSubmit = () => {
    setIsActive(true);
    setIsLoading(true);
    if (userSelected) {
      if (userSelected.is_answer) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
    setIsLoading(false);
  };
  return (
    <div>
      <h1 className="mb-4 text-center uppercase">{data.title}</h1>
      <div>
        {data.data.reading && (
          <div
            className="font-semibold"
            dangerouslySetInnerHTML={{ __html: data.data.reading }}
          ></div>
        )}
        {data.data.video && <VideoContainer src={data.data.video} />}
      </div>
      <div className="mt-10">
        <h1 className="text-center uppercase text-blue">
          {data.title || "Choose correct answer"}
        </h1>
        <div className="mt-4">
          <ListQuestions listQuestions={data.data.questions} />
        </div>
      </div>
    </div>
  );
};

export default ChooseSingleCorrectAnswerBlockMobile;
