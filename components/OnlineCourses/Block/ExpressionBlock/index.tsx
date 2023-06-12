import VideoContainer from "components/VideoJs/VideoContainer";
import React, { FC, useEffect, useState } from "react";
import { submitEnrolledBlock } from "services/online-course";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { ExpressionBlockType } from "types/chapter";

interface Props {
  data: ExpressionBlockType;
}

const ExpressionBlock: FC<Props> = ({ data }) => {
  const { activeBlockIndex, listBlocks } = useOnlineCourseStore();
  const [timeStart, setTimeStart] = useState(new Date().getTime());

  useEffect(() => {
    setTimeStart(new Date().getTime());
  }, []);

  const handleOnEnded = () => {
    const currentTime = new Date().getTime();
    const timeCounter = Math.floor((currentTime - timeStart) / 1000);
    if (activeBlockIndex !== null) {
      const blockId = listBlocks[activeBlockIndex].id;
      submitEnrolledBlock(blockId, timeCounter, null)
        .then(() => {
          console.log("Data has sent!");
        })
        .catch((error) => {
          console.log("Data hasn't sent!");
          console.log(error);
        });
    }
  };
  return (
    <div className="mx-auto max-w-[640px]">
      <h1 className="text-center text-base font-medium uppercase text-blue lg:text-lg">
        Learn the following expression
      </h1>
      <div className="mx-auto mt-6 max-w-[640px]">
        {data.data.video && (
          <VideoContainer
            src={data.data.video}
            onEnded={() => handleOnEnded()}
          />
        )}
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold text-primary">
          {data.data.sentences}
        </h2>
        <h3 className="mt-2 text-lg">{data.data.description}</h3>
        <h4 className="text-lg">{data.data.explain_vn}</h4>
      </div>
    </div>
  );
};

export default ExpressionBlock;
