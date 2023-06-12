import VideoContainer from "components/VideoJs/VideoContainer";
import React from "react";

const ChooseDropdownListCorrectAnswerBlock = () => {
  return (
    <div className="grid h-full gap-5 lg:grid-cols-2">
      <div className="col-span-1 h-full border-none p-0 lg:border-r lg:p-6">
        <div className="overflow-y-auto lg:max-h-[540px]">
          <VideoContainer />
          {/* <Paraphrase /> */}
        </div>
      </div>
      <div className="col-span-1 p-0 pb-44 lg:p-6">
        <div>
          <h1 className="text-center font-semibold text-blue lg:text-left">
            1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            nihil a temporibus incidunt quod dolores rerum labore quaerat
            tempora ut!
          </h1>
          <div className="mt-4 h-auto overflow-y-auto scrollbar-hide lg:h-[400px] lg:max-h-[400px] lg:scrollbar-default"></div>
          <div className="mt-5 flex items-center justify-center">
            <button
              type="button"
              className="rounded bg-[#CED5DE] px-8 py-2 text-sm text-[#A6B2BF]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseDropdownListCorrectAnswerBlock;
