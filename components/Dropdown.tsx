import Image from "next/image";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  header?: () => ReactNode;
  value: string;
  options: any[];
  showIcon?: boolean;
  onSelect: (value: any) => void;
}

const Dropdown: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickContext);
    return () => {
      document.removeEventListener("click", handleClickContext);
    };
  }, []);

  const handleClickContext = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleSelect = (item: any) => {
    props.onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex cursor-pointer items-center justify-center gap-2 rounded px-4 py-2 ${
          isOpen ? "bg-gray-100" : "hover:bg-gray-100"
        }`}
      >
        {props.header ? (
          props.header()
        ) : (
          <>
            <p className="select-none text-sm">{props.value}</p>
            <span
              className={`transition ${isOpen ? "rotate-180" : "rotate-0"}`}
            >
              <i className="bi bi-chevron-down"></i>
            </span>
          </>
        )}
      </div>
      <div
        className={`absolute right-0 top-full z-50 w-full min-w-[150px] overflow-hidden rounded-lg border bg-white shadow-lg shadow-black/10 transition-all ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {props.options.map((item, index: number) => {
          return (
            <div
              onClick={() => handleSelect(item)}
              className="flex cursor-pointer items-center gap-2 p-2 transition hover:text-primary"
              key={index}
            >
              {props.showIcon && (
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="h-6 w-6 object-cover"
                  loading="lazy"
                />
              )}
              <p className="text-sm">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
