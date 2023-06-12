import React from "react";

const Notification = () => {
  return (
    <div className="relative">
      <button
        type="button"
        className="relative inline-block text-xl hover:text-primary text-[#A6B2BF]"
      >
        <span className="absolute right-0 top-0 min-w-full translate-x-1/2 rounded-full bg-[#FF434E] p-0.5 text-[8px] leading-none text-white">
          +99
        </span>
        <span>
          <i className="bi bi-bell-fill"></i>
        </span>
      </button>
      <div></div>
    </div>
  );
};

export default Notification;
