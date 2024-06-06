import React from "react";
import styles from "./style/projectsHome.module.css";
import styless from "./style/base.module.css";
import style from "./style/embla.module.css";
import { DotButton, useDotButton } from "./EmblaDotButtons";
// import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaDotButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

const ProjectsHome = (props) => {
  const { push } = useRouter();
  // const { slides, options } = props;
  const options = {
    loop: true,
    speed: 10,
    draggable: true,
    align: "start",
    containScroll: "trimSnaps",
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  return (
    <section className={style.embla}>
      <div className={styles.projectTitle}>
        <h3>Layihələrimiz</h3>
        <button onClick={() => push(ROUTER.PROJECTS)}>Daha çox</button>
      </div>
      <div
        data-aos="fade-right"
        className={style.embla__viewport}
        ref={emblaRef}
      >
        <div className={style.embla__container}>
          <div className={style.embla__slide}>
            <div className={styles.projectHome}>
              <div className={styles.projectHomeSlider}>
                <div className={styles.projectBoxHome}>
                  <p className={styles.projectBoxHomeCity}>Bakı</p>

                  <h5>Şuşa 3 layihəsi</h5>
                  <h6>Təhvil verilmişdir</h6>

                  <p className={styles.projectBoxHomeDesc}>
                    İş prosesi müddətində 600 dirək və 24000 metr uzunluqda
                    ümumi naqildən istifadə edilmişdir. Planlama və xammal
                    təchizatı tərəfimizdən olunmuşdur.
                  </p>

                  <button onClick={() => push(ROUTER.PROJECTS)}>
                    Səhifəyə keç
                  </button>
                </div>

                <div className={styles.projectHomeImg}>
                  <Image
                    src="/images/projectsImgHome.jpg"
                    width={1108}
                    height={641}
                    style={{ height: "641px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.embla__slide}>
            <div className={styles.projectHome}>
              <div className={styles.projectHomeSlider}>
                <div className={styles.projectBoxHome}>
                  <p className={styles.projectBoxHomeCity}>Bakı</p>

                  <h5>Şuşa 4 layihəsi</h5>
                  <h6>Təhvil verilmişdir</h6>

                  <p className={styles.projectBoxHomeDesc}>
                    İş prosesi müddətində 600 dirək və 24000 metr uzunluqda
                    ümumi naqildən istifadə edilmişdir. Planlama və xammal
                    təchizatı tərəfimizdən olunmuşdur.
                  </p>

                  <button onClick={() => push(ROUTER.PROJECTS)}>
                    Səhifəyə keç
                  </button>
                </div>

                <div className={styles.projectHomeImg}>
                  <Image
                    src="/images/projectsImgHome.jpg"
                    width={1108}
                    height={641}
                    style={{ height: "641px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.embla__slide}>
            <div className={styles.projectHome}>
              <div className={styles.projectHomeSlider}>
                <div className={styles.projectBoxHome}>
                  <p className={styles.projectBoxHomeCity}>Bakı</p>

                  <h5>Şuşa 5 layihəsi</h5>
                  <h6>Təhvil verilmişdir</h6>

                  <p className={styles.projectBoxHomeDesc}>
                    İş prosesi müddətində 600 dirək və 24000 metr uzunluqda
                    ümumi naqildən istifadə edilmişdir. Planlama və xammal
                    təchizatı tərəfimizdən olunmuşdur.
                  </p>

                  <button onClick={() => push(ROUTER.PROJECTS)}>
                    Səhifəyə keç
                  </button>
                </div>

                <div className={styles.projectHomeImg}>
                  <Image
                    src="/images/projectsImgHome.jpg"
                    width={1108}
                    height={641}
                    style={{ height: "641px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-right" className={style.embla__controls}>
        <div className={style.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${style.embla__dot} ${
                index === selectedIndex ? style.embla__dotselected : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;
