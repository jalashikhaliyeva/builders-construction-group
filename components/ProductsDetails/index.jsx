import React, { useEffect, useState } from "react";
import styles from "./productsdetail.module.css";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import EmblaCarousel from "./EmblaCarousel";
import { getProductsInfoDetail } from "@/services/productsDetail";
import { Flex, Spinner } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";

function ProductsDetailSect() {
  const [productDetail, setProductDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { query } = router;
  // console.log(query.id, "query product ppage");
  const { push } = useRouter();
  const { t, ready } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = localStorage.getItem("lang") || "az";
        if (!query.id) {
          setError("Invalid product ID.");
          setLoading(false);
          return;
        }
        const response = await getProductsInfoDetail(query?.id, lang);
        if (response && response.data) {
          setProductDetail(response.data);
          setError(null);
        } else {
          console.error("Invalid response format:", response);
          setError("Invalid response from server. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching equipment details:", error);
        setError("Failed to fetch equipment details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (query.id) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [query.id]);

  if (loading) {
    return (
      <Flex height="50vh" alignItems="center" justifyContent="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!productDetail) {
    return <p>No data found for this equipment.</p>;
  }

  const {
    title,
    name,
    desc,
    code,
    image,
    images,
    meta_title,
    meta_description,
    meta_keywords,
  } = productDetail;
  const imageUrls = images.map((img) => img.image);

  const OPTIONS = {};
  const IMAGES = [image, ...imageUrls];

  return (
    <>
      <Head>
        <title>{meta_title || title}</title>
        <meta name="description" content={meta_description || desc} />
        <meta name="keywords" content={meta_keywords || ""} />
      </Head>
      <div className={styles.equipmentDetailSection}>
        <EmblaCarousel slides={IMAGES} options={OPTIONS} />
        <div className={styles.equipmentDetailDescSection}>
          <h4>{title}</h4>
          <h5>{code}</h5>
          <div dangerouslySetInnerHTML={{ __html:  desc  }}></div>

          <button
            onClick={() => push(ROUTER.PRODUCTS)}
            style={{
              marginTop: "50px",
              height: "52px",
              width: "120px",
              color: "white",
              backgroundColor: "var(--mainBlue)",
              borderRadius: "10px",
              fontFamily: "var(--fontJakarta)",
            }}
          >
            {/* Geri */}
            {t("geri")}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductsDetailSect;
