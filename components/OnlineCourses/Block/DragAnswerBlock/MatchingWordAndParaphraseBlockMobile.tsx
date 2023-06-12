import React, { FC, Fragment, useState } from "react";
import QuestionItem from "./QuestionItem";
import { MatchingWordAndParaphraseType } from "./types";

const DATA: MatchingWordAndParaphraseType = {
  id: 3852179189,
  paraphrase: `Do quis mollit deserunt quis aute est nostrud mollit. Irure et ex consequat culpa velit reprehenderit velit. Veniam non do quis ullamco pariatur. Ex amet aliqua amet commodo irure commodo reprehenderit ipsum labore labore voluptate occaecat. Adipisicing excepteur ad velit id in aute minim nulla aliquip ipsum deserunt.

  Magna officia officia sunt dolor. Esse dolor eu aliquip occaecat nostrud labore in magna nostrud do. Irure amet et ullamco reprehenderit proident non sit ad velit aute culpa proident duis.

  Consequat reprehenderit commodo culpa occaecat in non laboris reprehenderit amet eiusmod eu. Sint consequat irure ipsum in excepteur nisi ipsum dolore elit labore. Enim occaecat laboris cupidatat ullamco eiusmod consectetur in veniam ea. Ad eu duis officia nisi in irure duis. Ipsum amet eiusmod exercitation non minim commodo ad. Nulla sit duis aliquip amet tempor ut.

  Consectetur voluptate labore enim pariatur sit labore ea eiusmod nisi. Dolore qui magna eiusmod excepteur veniam non labore. Cupidatat sunt dolore aute quis voluptate fugiat veniam occaecat laboris non occaecat magna consectetur mollit.

  Veniam do id anim deserunt ea id pariatur aute aliquip. Eiusmod consequat aliquip dolore consequat pariatur excepteur sunt do excepteur amet deserunt sit ex aute. Aliquip culpa incididunt ut magna cupidatat elit duis nostrud sint. Fugiat culpa et ut reprehenderit dolore enim excepteur eu fugiat.`,
  title:
    "Fugiat eiusmod voluptate do labore consequat laboris in reprehenderit?",
  questions: [
    {
      id: 4197291966,
      title: "Fugiat fugiat duis sit amet fugiat ipsum?",
      question_index: 1,
      answers: [
        {
          id: 233322548,
          answer_index: "A",
          title: "221 Wulse Parkway",
        },
        {
          id: 852110647,
          answer_index: "B",
          title: "1652 Kofu Pike",
        },
        {
          id: 2568120959,
          answer_index: "D",
          title: "172 Poluj Park",
        },
        {
          id: 1503996615,
          answer_index: "C",
          title: "628 Acoela Circle",
        },
      ],
    },
    {
      id: 1253565998,
      title: "Fugiat fugiat duis sit amet fugiat ipsum?",
      question_index: 2,
      answers: [
        {
          id: 233322548,
          answer_index: "A",
          title: "Wimuobu",
        },
        {
          id: 852110647,
          answer_index: "B",
          title: "Jobkato",
        },
        {
          id: 2568120959,
          answer_index: "D",
          title: "Zuksatsi",
        },
        {
          id: 1503996615,
          answer_index: "C",
          title: "Zonuji",
        },
      ],
    },
  ],
};

const MatchingWordAndParaphraseBlockMobile: FC = () => {
  const [isViewMore, setIsViewMore] = useState(false);
  const [data, setData] = useState<MatchingWordAndParaphraseType>(DATA);
  const [result, setResult] = useState(null);

  const handleViewMore = () => {
    setIsViewMore((prev) => !prev);
  };

  return (
    <div className="container">
      <div>
        <div
          className={`${isViewMore ? "max-h-max" : "max-h-48"} overflow-hidden`}
        >
          <h1 className="mb-5 font-semibold">{data.title}</h1>
          <div className="">{data.paraphrase}</div>
        </div>
        <div className="flex items-center justify-center py-2.5">
          <button
            type="button"
            className="rounded px-6 py-3"
            onClick={() => handleViewMore()}
          >
            View more
          </button>
        </div>
        <hr />
      </div>
      <div className="mt-5">
        <h2 className="mb-4 uppercase">Nối từ để ghép thành câu đúng</h2>
        <div>
          {data.questions.map((item) => {
            return (
              <div className="mb-4" key={item.id}>
                <QuestionItem item={item} />
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

export default MatchingWordAndParaphraseBlockMobile;
