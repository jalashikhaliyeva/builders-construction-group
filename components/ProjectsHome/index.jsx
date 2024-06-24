import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./style/projectsHome.module.css";
import styless from "./style/base.module.css";
import style from "./style/embla.module.css";
import { DotButton, useDotButton } from "./EmblaDotButtons";
// import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaDotButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import { Box, Spinner } from "@chakra-ui/react";

const ProjectsHome = ({ homeInfo }) => {
  const [isClient, setIsClient] = useState(false);
  const { t, ready } = useTranslation();
  const { push, locale } = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = homeInfo?.project;
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

  if (!isClient) {
    return       <Box
    position="fixed"
    top="0"
    left="0"
    width="100vw"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor="rgba(255, 255, 255, 1)"
    zIndex="9999"
  >
    <Spinner size="xl" />
  </Box>
  }

  return (
    <section className={style.embla}>
      <div className={styles.projectTitle}>
        <h3>{t("layihələr")}</h3>
        <button onClick={() => push(ROUTER.PROJECTS)}>{t("ətraflı")}</button>
      </div>
      <div
      
        className={style.embla__viewport}
        ref={emblaRef}
      >
        <div className={style.embla__container}>
          {data?.map((project, index) => {
            const slug = project.slug; // Assuming slug is an object with keys for each language
            const projectSlug = slug[locale] || slug["en"]; // Default to English slug if locale-specific slug is not available

            return (
              <div key={index} className={style.embla__slide}>
                <div className={styles.projectHome}>
                  <div className={styles.projectHomeSlider}>
                    <div data-aos="zoom-in-right" className={styles.projectBoxHome}>
                      <p className={styles.projectBoxHomeCity}>
                        {project.country}
                      </p>
                      <h5>{project.title}</h5>
                      <h6>{project.status}</h6>
                      <p
                        className={styles.projectBoxHomeDesc}
                        dangerouslySetInnerHTML={{ __html: project.desc }}
                      />
                      <button
                        onClick={() =>
                          push(`${ROUTER.PROJECTS}/${projectSlug}`)
                        }
                      >
                        {t("ətraflı")}
                      </button>
                    </div>
                    <div data-aos="zoom-in-left" className={styles.projectHomeImg}>
                      <Image
                        src={project.image || "/images/projectsImgHome.jpg"}
                        width={1108}
                        height={641}
                        style={{ height: "641px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={style.embla__controls}>
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
      <button className={styles.responsiveAboutBtn} onClick={() => push(ROUTER.PROJECTS)}>{t("ətraflı")}</button>
    </section>
  );
};

export default ProjectsHome;