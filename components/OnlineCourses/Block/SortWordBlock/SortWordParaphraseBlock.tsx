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

const SortWordParaphraseBlock = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 relative">
        <div className="col-span-1">
          <div className="mx-auto max-w-[640px]">
            <h1 className="mb-5 mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptate quis, id laborum ullam amet vel dicta soluta!
              Reprehenderit commodi.
            </h1>
            <VideoContainer />
          </div>
        </div>
        <div className="col-span-1">
          <h2>Nối từ để ghép thành câu đúng</h2>
          <div className="flex gap-4 flex-wrap mt-5">
            {LIST_WORDS.map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-lg px-4 py-2 text-blue border border-solid border-[#CED5DE]"
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortWordParaphraseBlock;
