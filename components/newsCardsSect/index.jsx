import Image from "next/image";
import styles from "./style/newsCards.module.css";
import { useRouter } from "next/router";
import { ROUTER } from "../../shared/constant/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

function NewsCards({ newsInfo }) {
  const router = useRouter();
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getCurrentLanguageSlug = (blog) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return blog[currentLanguage];
  };

  const goToNewsDetail = (blog) => {
    const blogId = getCurrentLanguageSlug(blog.slug);
    router.push(`${ROUTER.NEWS}/${blogId}`);
  };

  const reversedBlogs = [...(newsInfo.blogs || [])].reverse();

  if (!ready || !isClient) return null;

  return (
    <section className={styles.newsCardsSect}>
      {reversedBlogs.map((blog, index) => (
        <div className={styles.newsCard} key={index}>
          <div className={styles.newsCardDescription}>
            <h6>{blog.created_at}</h6>
            <h3>{blog.title}</h3>
            <h4>BCG group</h4>
            <div dangerouslySetInnerHTML={{ __html: blog.desc }} />
            <button style={{fontSize:"14px"}} onClick={() => goToNewsDetail(blog)}>
              {t("tam xəbəri oxu")}
            </button>
          </div>
          <div className={styles.newsCardImg}>
            <Image src={blog.image} alt={blog.title} width={500} height={430} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default NewsCards;
