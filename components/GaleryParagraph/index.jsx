import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useTranslation } from "next-i18next";

function GaleryParagraph() {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  // Ensure this code runs only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if translations are ready and if we are on the client side
  if (!ready || !isClient) return null;

  return <div className={style.galleryTitle}>{t("qalereya")}</div>;
}

export default GaleryParagraph;
