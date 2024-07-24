import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./section2Home.module.css";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import { Box, Spinner } from "@chakra-ui/react";

function Section2Home({ homeInfo }) {
  const { push } = useRouter();
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  const data = homeInfo?.about;
  console.log(data, "dataofhomeeee");

  if (!data || !ready || !isClient) {
    return <div>Loading...</div>;
  }

  const { title, image, desc } = data;

  if (!title || !image || !desc) {
    return (
      <Box
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
    );
  }

  return (
    <div className={styles.section2Home}>
      <div data-aos="fade-right" className={styles.section2about}>
        <h1>{title}</h1>
        <p
        className={styles.descriptionSection}
          dangerouslySetInnerHTML={{
            __html: desc.length > 400 ? `${desc.slice(0, 400)}...` : desc,
          }}
        ></p>

        <button
          className={styles.sectionBtn}
          onClick={() => push(ROUTER.SERVICES)}
        >
          {t("ətraflı")}
        </button>
      </div>
      <div data-aos="fade-left" className={styles.section2img}>
        <Image
          style={{ borderRadius: "12px" }}
          className={styles.imgMission}
          src={image}
          alt="section2image"
          width={845}
          height={616}
        />
      </div>
    </div>
  );
}

export default Section2Home;
