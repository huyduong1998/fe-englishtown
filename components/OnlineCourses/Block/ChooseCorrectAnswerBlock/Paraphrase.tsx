import React, { FC, useState } from "react";

const Paraphrase: FC<{ data: string }> = ({ data }) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`${
          isToggle ? "max-h-none" : "max-h-44 overflow-hidden lg:max-h-none"
        }`}
      >
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </div>
      <div className="flex justify-center py-3 lg:hidden">
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

export default Paraphrase;
