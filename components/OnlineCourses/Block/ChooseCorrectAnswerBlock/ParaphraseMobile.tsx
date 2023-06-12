import React, { useState } from "react";

const ParaphraseMobile = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`${
          isToggle ? "max-h-none" : "max-h-44 overflow-hidden"
        }`}
      >
        <h1 className="mb-4 font-semibold text-blue">
          Lorem ipsum dolor sit amet consectetur at facilis repellendus?
        </h1>
        <div>
          <div className="text-justify">
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, molestias aperiam.{" "}
              <span className="text-primary underline">
                Ad et minus voluptates
              </span>{" "}
              id numquam expedita laborum ea, quasi vitae, mollitia sequi
              aspernatur repellendus, voluptatem odit itaque eius.
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, molestias aperiam.{" "}
              <span className="text-primary underline">Ad et minus</span>{" "}
              voluptates id numquam expedita laborum ea, quasi vitae, mollitia
              sequi aspernatur repellendus, voluptatem odit itaque eius.
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur,
              <span className="text-primary underline">molestias aperiam</span>.
              Ad et minus voluptates id{" "}
              <span className="text-primary underline">numquam expedita</span>{" "}
              laborum ea, quasi vitae, mollitia sequi aspernatur repellendus,
              voluptatem odit itaque eius.
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, molestias aperiam. Ad et minus voluptates id numquam
              expedita laborum ea, quasi vitae,{" "}
              <span className="text-primary underline">mollitia sequi</span>{" "}
              aspernatur repellendus, voluptatem odit itaque eius.
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, molestias aperiam. Ad et minus voluptates id numquam
              expedita laborum ea, quasi vitae, mollitia sequi aspernatur
              repellendus, voluptatem odit itaque eius.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3">
        <button
          onClick={() => setIsToggle((prev) => !prev)}
          type="button"
          className="flex items-center justify-center gap-1"
        >
          <span>{!isToggle ? "View more" : "View less"}</span>
          <span
            className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue leading-none text-white transition-all ${
              isToggle ? "rotate-180" : "rotate-0"
            }`}
          >
            <i className="bi bi-arrow-down-short"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ParaphraseMobile;
