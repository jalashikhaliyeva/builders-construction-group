import React from "react";
import style from "./style.module.css";
import { useTranslation } from "next-i18next";

function GaleryParagraph() {
  const { t, ready } = useTranslation();

  // Check if translations are ready
  if (!ready) return null;

  return <div className={style.galleryTitle}>{t("qalereya")}</div>;
}

export default GaleryParagraph;
