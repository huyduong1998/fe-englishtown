import React, { Fragment, useState } from "react";

const MatchingWordAndParaphraseBlock = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1774016016,
      question_title:
        "Culpa nostrud in deserunt excepteur laboris reprehenderit et Lorem occaecat laboris.",
      items: [
        {
          id: "fa392b85-e0bc-59b6-bfaa-53247d057354",
          title: "Paragraph 2883008743",
          answer_id: null,
        },
        {
          id: "01266f2e-324c-5e98-a802-bcdf19d7ed8f",
          title: "Paragraph 1380960573",
          answer_id: null,
        },
        {
          id: "323a478b-6c5a-5de3-b930-9e05bb21ca54",
          title: "Paragraph 3",
          answer_id: null,
        },
        {
          id: "492a8105-7a15-59f7-b24f-92affc4ad6e6",
          title: "Paragraph 1751822263",
          answer_id: null,
        },
        {
          id: "61adb07d-9f90-5cc7-8504-69002036eaee",
          title: "Paragraph 1429348305",
          answer_id: null,
        },
        {
          id: "692a9c83-1ac0-54c6-81b1-8c38fa27f033",
          title: "Paragraph 3032457486",
          answer_id: null,
        },
        {
          id: "f0486c92-bd02-5cb3-a57f-a548cffc1fd2",
          title: "Paragraph 1819376665",
          answer_id: null,
        },
        {
          id: "e9c35ad6-5824-504f-94d1-6b73fc8d01e3",
          title: "Paragraph 3136591710",
          answer_id: null,
        },
      ],
    },
  ]);
  const [answers, setAnswers] = useState([
    {
      id: "2d8cffbf-3eba-5b9a-a88f-914d21fba4de",
      answer_index: "A",
      title: "Proident anim ut ipsum laboris.",
    },
    {
      id: "db047040-6753-5576-84bf-048f51c8aae3",
      answer_index: "B",
      title: "Sint id sunt consequat voluptate labore fugiat officia.",
    },
    {
      id: "2945e386-8523-572a-aafa-1c3ac97c95a4",
      answer_index: "C",
      title: "Adipisicing veniam cillum do duis.",
    },
    {
      id: "8a1765c3-efb7-5d44-ac63-f98f3ff08a92",
      answer_index: "B",
      title:
        "Ex culpa esse exercitation aliquip nulla occaecat exercitation in eu.",
    },
    {
      id: "c7a36446-dba1-54be-b8f8-4cabec8b137e",
      answer_index: "D",
      title: "Sit esse aliqua cillum duis reprehenderit eu esse.",
    },
    {
      id: "04b25174-d66b-5165-b235-48f6ce72e8e5",
      answer_index: "A",
      title: "Eu nisi non exercitation labore consectetur.",
    },
    {
      id: "591e7d6f-572a-52c5-b099-6ccb03ce30a2",
      answer_index: "C",
      title: "Magna id elit sunt veniam nisi minim proident culpa commodo et.",
    },
    {
      id: "794cf23c-54c8-5810-b272-b1f202168cfe",
      answer_index: "C",
      title: "Incididunt id anim ex fugiat dolore irure sit ut in amet irure.",
    },
    {
      id: "1ac3b346-4619-5267-a120-499bea992915",
      answer_index: "D",
      title: "Incididunt anim commodo esse ex eiusmod laboris cupidatat.",
    },
  ]);

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <div>
            <h1 className="mb-5 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
            <div className=" max-h-[500px] overflow-y-auto">
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci, obcaecati eum? Porro facilis sequi, earum doloribus
                nemo provident ducimus ea atque laudantium temporibus beatae,
                perspiciatis itaque, doloremque eum a corrupti?
              </p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                velit aspernatur consectetur beatae nihil culpa nulla, quas
                maiores dicta tempore unde hic esse ipsum aliquid laudantium!
                Illo molestias temporibus inventore!
              </p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti at expedita, sapiente blanditiis asperiores quo fugiat
                aliquid veniam quis placeat odio? Tempora, facere nulla. Libero
                nesciunt accusantium ratione odit architecto?
              </p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, esse odit! Placeat quos fuga rerum qui voluptatibus
                incidunt explicabo reiciendis itaque vel, commodi, provident
                distinctio delectus labore libero corporis cum.
              </p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, esse odit! Placeat quos fuga rerum qui voluptatibus
                incidunt explicabo reiciendis itaque vel, commodi, provident
                distinctio delectus labore libero corporis cum.
              </p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, esse odit! Placeat quos fuga rerum qui voluptatibus
                incidunt explicabo reiciendis itaque vel, commodi, provident
                distinctio delectus labore libero corporis cum.
              </p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, esse odit! Placeat quos fuga rerum qui voluptatibus
                incidunt explicabo reiciendis itaque vel, commodi, provident
                distinctio delectus labore libero corporis cum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="mb-4 uppercase">Nối từ để ghép thành câu đúng</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 max-h-[500px] overflow-y-auto pr-2">
              {questions.map((questionItem, index) => {
                return (
                  <div key={index}>
                    <h4 className="mb-4 font-semibold">
                      {index + 1}. {questionItem.question_title}
                    </h4>
                    <div>
                      {questionItem.items.map((item, id) => {
                        return (
                          <div key={item.id} className="relative mb-4">
                            <div className="relative mb-2.5 flex gap-2">
                              {/* <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue text-white">
                              {id + 1}
                              <div className="absolute left-1/2 bottom-0 translate-y-full h-9 w-5 rounded-bl-lg border-b border-l border-dashed border-[#CED5DE]"></div>
                            </span>
                            <p>{item.title}</p> */}
                              {/* <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#15C666] text-white">
                              {id + 1}
                              <div className="absolute bottom-0 left-1/2 h-9 w-5 translate-y-full rounded-bl-lg border-b border-l border-dashed border-[#15C666]"></div>
                            </span> */}
                              <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FF434E] text-white">
                                {id + 1}
                                <div className="absolute bottom-0 left-1/2 h-9 w-5 translate-y-full rounded-bl-lg border-b border-l border-dashed border-[#FF434E]"></div>
                              </span>
                              <p>{item.title}</p>
                            </div>
                            {/* <div className="relative ml-8 max-w-[14rem] rounded-lg border border-dashed border-blue/50 px-4 py-3 text-[#A6B2BF]">
                            Kéo đáp án vào đây
                          </div> */}
                            {/* <div className="relative ml-8 max-w-[14rem] rounded-lg border border-solid border-[#15C666] px-4 py-3 text-[#15C666] bg-[#15C666]/10">
                            Kéo đáp án vào đây
                          </div> */}
                            <div className="relative ml-8 max-w-[14rem] rounded-lg border border-solid border-[#FF434E] bg-[#FF434E]/10 px-4 py-3 text-[#FF434E]">
                              Kéo đáp án vào đây
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-span-1 max-h-[500px] overflow-y-auto rounded-xl bg-white p-4">
              <h4 className="mb-4 font-semibold">Kéo đáp án vào câu hỏi</h4>
              <div>
                {answers.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      {/* <div className="mb-3 flex w-full cursor-pointer items-start gap-2 rounded-lg border border-solid border-blue px-4 py-3 last:mb-0">
                      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-transparent">{item.answer_index}</div>
                      <div>{item.title}</div>
                    </div> */}
                      {/* <div className="mb-3 flex w-full cursor-pointer items-start gap-2 rounded-lg border border-solid border-primary bg-primary/10 px-4 py-3 last:mb-0">
                      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                        {item.answer_index}
                      </div>
                      <div className="flex-1">{item.title}</div>
                    </div> */}
                      <div className="mb-3 flex w-full cursor-pointer items-start gap-2 rounded-lg border border-solid border-[#A6B2BF] bg-transparent px-4 py-3 last:mb-0">
                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-transparent text-[#A6B2BF]">
                          {item.answer_index}
                        </div>
                        <div className="flex-1 text-[#A6B2BF]">
                          {item.title}
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center">
            {/* <button type="button" className="px-6 py-2 w-40 rounded border border-solid border-[#CED5DE] bg-[#CED5DE] text-[#A6B2BF]">
            Submit
          </button> */}
            <button
              type="button"
              className="w-40 rounded border border-solid border-blue bg-transparent px-6 py-2 text-blue"
            >
              Redo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingWordAndParaphraseBlock;
