import VideoContainer from "components/VideoJs/VideoContainer";
import { FC, useState } from "react";
import useChooseAnswerStore from "store/blocks/chooseAnswerStore";
import { BlockChooseAnswerType } from "types/chapter";
import ListQuestions from "./ListQuestions";

interface Props {
  data: BlockChooseAnswerType;
}

const ChooseSingleCorrectAnswerBlock: FC<Props> = ({ data }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <div>
            {data.data.reading && (
              <div
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: data.data.reading }}
              ></div>
            )}
            {data.data.video && <VideoContainer src={data.data.video} />}
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <h1 className="text-center uppercase text-blue">
              {data.title || "Choose correct answer"}
            </h1>
            <div className="mt-4">
              <ListQuestions listQuestions={data.data.questions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSingleCorrectAnswerBlock;
