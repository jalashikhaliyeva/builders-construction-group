import React from "react";
import style from "./embla.module.css"
import Image from "next/image";

export const Thumb = (props) => {
  const { selected, index, onClick, src } = props;

  return (
    <div
      className={`${style["emblathumbs__slide"]} ${
        selected ? style["emblathumbs__slide--selected"] : ""
      }`}
    >
      <button
        onClick={onClick}
        type="button"
        className={`${style.emblathumbs__slide__number} ${
          !selected ? style["emblathumbs__slide__number--blurred"] : ""
        }`}
      >
        <Image
        width={500}
        height={600}
          src={src}
          alt={`Thumbnail ${index}`}
          className={style.emblathumbs__thumb__img}
        />
      </button>
    </div>
  );
};
