import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import styles from "./embla.module.css";
import { useTranslation } from "next-i18next";

const EmblaCarouselCertificates = (props) => {
  const { t, ready } = useTranslation();
  const { slides, options, imageClassName } = props;
  const [isClient, setIsClient] = useState(false);
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!ready || !isClient) return null;

  const containerClass =
    slides?.length === 1
      ? `${styles.embla__container} ${styles.embla__container__single}`
      : styles.embla__container;

  return (
    <div className={styles.embla}>
      <h4>{t("sertifikatlarımız")}</h4>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={containerClass}>
          {slides?.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                width={200}
                height={200}
                layout="responsive"
                className={styles[imageClassName]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselCertificates;
