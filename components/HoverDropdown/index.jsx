import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import style from "../Header/header.module.css";

const HoverDropdown = ({ title, items, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-flex items-center text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`${style.headLiLast} inline-flex justify-center items-center gap-2 rounded-md text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none`}
      >
        {title}
        {isOpen ? (
          <IoIosArrowUp className="ml-1 w-4 h-4" />
        ) : (
          <IoIosArrowDown className="ml-1 w-4 h-4" />
        )}
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="absolute left-0 z-25000 w-64 origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-black focus:outline-none shadow-md"
          style={{ top: "calc(100% + 0.75rem)" }}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate(item.route)}
              className="group flex w-full items-center gap-2 rounded-lg py-3 px-6 hover:bg-gray-200"
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                fontWeight: "600",
              }}
            >
              <span className={`${style.menuOptions} text-lg`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default HoverDropdown;
