import VideoContainer from "components/VideoJs/VideoContainer";
import React from "react";

const ParaphraseBlock = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              dolores, tempore magnam deserunt distinctio, voluptas itaque quos
              aliquam ratione inventore esse in repudiandae ipsum unde accusamus
              odio similique ea temporibus.
            </h1>
            <VideoContainer src="" />
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default ParaphraseBlock;
