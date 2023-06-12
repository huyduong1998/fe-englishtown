import Loading from "components/Loading";
import VideoContainer from "components/VideoJs/VideoContainer";
import useTimer from "hooks/useTimer";
import React, { FC, useCallback, useEffect, useState } from "react";
import { submitEnrolledBlock } from "services/online-course";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import { BlockWordType } from "types/chapter";

interface Props {
  data: BlockWordType;
}

const VocabularyBlock: FC<Props> = ({ data }) => {
  const { listBlocks, activeBlockIndex } = useOnlineCourseStore();
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
        .catch(() => {
          console.log("Data hasn't sent!");
        });
    }
  };
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <h1 className="text-center text-base font-medium uppercase text-blue lg:text-lg">
        Learn the following vocabulary
      </h1>
      <div className="mx-auto mt-6 overflow-hidden rounded-xl">
        <div className="mx-auto max-w-[640px]">
          {data.data.video && (
            <VideoContainer
              src={data.data.video}
              onEnded={() => handleOnEnded()}
            />
          )}
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:items-end">
            <h4 className="mt-3 text-2xl font-semibold text-primary lg:mt-6">
              {data.data.word}
            </h4>
            <p className="text-lg text-[#A6B2BF]">{data.data.pronounce}</p>
          </div>
          <p className="mt-2">({data.data.types?.join(", ")})</p>
          <p className="mt-2 text-lg text-blue">{data.data.explain_vn}</p>
        </div>
      </div>
    </>
  );
};

export default VocabularyBlock;
