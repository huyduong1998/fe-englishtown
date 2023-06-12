import VideoContainer from "components/VideoJs/VideoContainer";
import React from "react";

const LIST_WORDS = [
  {
    id: 617159053,
    title: "Matompon",
  },
  {
    id: 401764210,
    title: "Monaco",
  },
  {
    id: 2890333057,
    title: "Syria",
  },
  {
    id: 3197496297,
    title: "Venezuela",
  },
  {
    id: 764493896,
    title: "South Sudan",
  },
  {
    id: 1067350055,
    title: "Somalia",
  },
  {
    id: 2765541959,
    title: "Ghana",
  },
];

const SortWordParaphraseBlockMobile = () => {
  return (
    <div className="relative">
      <VideoContainer />
      <div className="mt-5">
        <h1>Nối từ để ghép thành câu đúng</h1>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
          {LIST_WORDS.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-lg border border-solid border-[#CED5DE] px-4 py-1"
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="fixed bottom-24 left-0 flex w-full items-center justify-center bg-white pt-4">
        <button
          type="button"
          className="rounded bg-[#CED5DE] px-6 py-2 text-white"
        >
          Submit
        </button>
        {/* <button type="button" className="px-6 py-2 rounded bg-[#CED5DE] text-white">Submit</button> */}
      </div>
    </div>
  );
};

export default SortWordParaphraseBlockMobile;
