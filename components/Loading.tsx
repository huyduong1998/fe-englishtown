import React from "react";

const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-t-primary"></div>
    </div>
  );
};

export default Loading;
