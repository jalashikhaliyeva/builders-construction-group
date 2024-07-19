import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaThumbButtons";
import styles from "./embla.module.css";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  const goToPrev = () => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollPrev();
  };

  const goToNext = () => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollNext();
  };

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaMainRef}>
        <div className={styles.embla__container}>
          {slides.map((src, index) => (
            <div className={styles.embla__slide} key={index}>
              <Image
              width={500}
              height={600}
              style={{borderRadius:"15px"}}
                src={src}
                alt={`Slide ${index}`}
                className={styles.embla__slide__img}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        {selectedIndex !== 0 && (
          <button
            className={`${styles.embla__control} ${styles["embla__control--prev"]}`}
            onClick={goToPrev}
          >
            &lt;
          </button>
        )}
        {selectedIndex !== slides.length - 1 && (
          <button
            className={`${styles.embla__control} ${styles["embla__control--next"]}`}
            onClick={goToNext}
          >
            &gt;
          </button>
        )}
      </div>

      <div className={styles.emblathumbs}>
        <div className={styles.emblathumbs__viewport} ref={emblaThumbsRef}>
          <div className={styles.emblathumbs__container}>
            {slides.map((src, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                src={src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
