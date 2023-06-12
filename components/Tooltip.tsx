import React, { FC, ReactNode } from "react";

type PositionType = "top" | "left" | "bottom" | "right";

interface Props {
  position: PositionType;
  title: string;
  children: ReactNode;
}

const Tooltip: FC<Props> = ({ children, title, position = "bottom" }) => {
  let styles = {};
  switch (position) {
    case "top": {
      return (
        <div className="group/tooltip relative">
          <div className="pointer-events-none invisible absolute -top-4 left-1/2 z-[9999] -translate-x-1/2 -translate-y-full rounded-lg bg-blue px-3 py-2 text-white opacity-0 transition-all after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-b-0 after:border-solid after:border-blue after:border-l-transparent after:border-r-transparent after:content-[''] group-hover/tooltip:visible group-hover/tooltip:opacity-100">
            <span className="whitespace-nowrap text-sm">{title}</span>
          </div>
          <div>{children}</div>
        </div>
      );
    }
    case "right": {
      return (
        <div className="group/tooltip relative">
          <div className="transition-al pointer-events-none invisible absolute -right-2 top-1/2 z-[9999] -translate-y-1/2 translate-x-full rounded-lg bg-blue px-3 py-2 text-white opacity-0 after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-l-0 after:border-solid after:border-blue after:border-b-transparent after:border-t-transparent after:content-[''] group-hover/tooltip:visible group-hover/tooltip:opacity-100">
            <div className="relative">
              <span className="whitespace-nowrap text-sm">{title}</span>
            </div>
          </div>
          <div>{children}</div>
        </div>
      );
    }
    case "bottom": {
      return (
        <div className="group/tooltip relative">
          <div
            className="pointer-events-none invisible absolute -bottom-4 left-1/2 z-[9999] -translate-x-1/2 translate-y-full rounded-lg bg-blue px-3 py-2 text-white opacity-0 transition-all after:absolute after:-top-2 after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-t-0 after:border-solid after:border-blue after:border-l-transparent after:border-r-transparent after:content-[''] group-hover/tooltip:visible group-hover/tooltip:opacity-100"
            style={{ ...styles }}
          >
            <span className="whitespace-nowrap text-sm">{title}</span>
          </div>
          <div>{children}</div>
        </div>
      );
    }
    case "left": {
      return (
        <div className="group/tooltip relative">
          <div className="pointer-events-none invisible absolute -left-6 top-1/2 z-[9999] -translate-x-full -translate-y-1/2 rounded-lg bg-blue px-3 py-2 text-white opacity-0 transition-all after:absolute after:-right-2 after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-r-0 after:border-solid after:border-blue after:border-b-transparent after:border-t-transparent after:content-[''] group-hover/tooltip:visible group-hover/tooltip:opacity-100">
            <span className="whitespace-nowrap text-sm">{title}</span>
          </div>
          <div>{children}</div>
        </div>
      );
    }
    default: {
      return null;
    }
  }
};

export default React.memo(Tooltip);
