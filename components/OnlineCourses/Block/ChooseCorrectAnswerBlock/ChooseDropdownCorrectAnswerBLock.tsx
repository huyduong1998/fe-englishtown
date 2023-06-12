import VideoContainer from "components/VideoJs/VideoContainer";
import React from "react";

const ChooseDropdownCorrectAnswerBLock = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="col-span-1 h-full border-r p-6">
        {/* <VideoContainer /> */}
        <div className="max-h-[540px] overflow-y-auto">
          <VideoContainer />
        </div>
      </div>
      <div className="col-span-1 p-6">
        <div>
          <h1 className="uppercase text-[#5D7888]">Chọn đáp án đúng</h1>
          <div className="mt-4 h-[300px] max-h-[300px] overflow-y-auto">
            <ul>
              <li className="mb-5 last:mb-0">
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
                          <div>
                            And I'll just have the beef, with bread and a salad.
                          </div>
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
                          <div>
                            And I'll just have the beef, with bread and a salad.
                          </div>
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
                          <div>
                            And I'll just have the beef, with bread and a salad.
                          </div>
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
                          <div>
                            And I'll just have the beef, with bread and a salad.
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-20 flex items-center justify-center">
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

export default ChooseDropdownCorrectAnswerBLock;
