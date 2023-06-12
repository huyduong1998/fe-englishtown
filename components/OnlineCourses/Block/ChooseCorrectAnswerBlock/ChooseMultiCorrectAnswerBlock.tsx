import VideoJs from "components/VideoJs";
import VideoContainer from "components/VideoJs/VideoContainer";
import React, { useCallback, useRef, useState } from "react";
import { videoJsOptions } from "src/configs/video";
import videojs from "video.js";
import Paraphrase from "./Paraphrase";

const ChooseMultiCorrectAnswerBlock = () => {
  const [data, setData] = useState(Array.from({ length: 5 }, (v, k) => k + 1));
  const playerRef = useRef(null);
  const handlePlayerReady = useCallback((player: any) => {
    playerRef.current = player;
  }, []);
  return (
    <div className="grid h-full gap-5 lg:grid-cols-2">
      <div className="col-span-1 h-full border-none p-0 lg:border-r lg:p-6">
        <div className="overflow-y-auto lg:max-h-[540px]">
          <VideoContainer src="" />
          {/* <Paraphrase /> */}
        </div>
      </div>
      <div className="col-span-1 p-0 pb-44 lg:p-6">
        <div>
          <h1 className="text-center uppercase text-[#5D7888] lg:text-left">
            Chọn đáp án đúng
          </h1>
          <div className="mt-4 h-auto overflow-y-auto scrollbar-hide lg:h-[400px] lg:max-h-[400px] lg:scrollbar-default">
            <ul>
              {data.map((item, index) => {
                return (
                  <li key={index} className="mb-5 last:mb-0">
                    <div className="text-blue">
                      <h2 className="font-semibold">
                        We are going to learn how to use code & shape layers in
                        After Effects?
                      </h2>
                      <div className="mt-4">
                        <ul>
                          <li>
                            <button
                              type="button"
                              className="mb-3 flex gap-2 rounded border bg-white px-4 py-2"
                            >
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent">
                                A
                              </div>
                              <p className="text-left">
                                And I'll just have the beef, with bread and a
                                salad.
                              </p>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="mb-3 flex gap-2 rounded border bg-white px-4 py-2"
                            >
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent">
                                B
                              </div>
                              <p className="text-left">
                                And I'll just have the beef, with bread and a
                                salad.
                              </p>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="mb-3 flex gap-2 rounded border bg-white px-4 py-2"
                            >
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent">
                                C
                              </div>
                              <p className="text-left">
                                And I'll just have the beef, with bread and a
                                salad.
                              </p>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="mb-3 flex gap-2 rounded border bg-white px-4 py-2"
                            >
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent">
                                D
                              </div>
                              <p className="text-left">
                                And I'll just have the beef, with bread and a
                                salad.
                              </p>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
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

export default ChooseMultiCorrectAnswerBlock;
