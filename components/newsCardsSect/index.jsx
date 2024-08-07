import Image from "next/image";
import styles from "./style/newsCards.module.css";
import { useRouter } from "next/router";
import { ROUTER } from "../../shared/constant/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
function NewsCards({ newsInfo }) {
  const router = useRouter();
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

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

  const truncateDescription = (desc, length) => {
    if (desc.length <= length) return desc;
    return desc.substring(0, length) + "...";
  };

  const reversedBlogs = [...(newsInfo.blogs || [])].reverse();

  if (!ready || !isClient) return null;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = reversedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(reversedBlogs.length / blogsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <section className={styles.newsCardsSect}>
      {currentBlogs.map((blog, index) => (
        <div className={styles.newsCard} key={index}>
          <div className={styles.newsCardDescription}>
            <h6>{blog.created_at}</h6>
            <h3>{blog.title}</h3>
            <h4>BCG group</h4>
            <div
            className={styles.descBlog}
              dangerouslySetInnerHTML={{
                __html: truncateDescription(blog.desc, 100),
              }}
            />
            <button
              style={{ fontSize: "14px" }}
              onClick={() => goToNewsDetail(blog)}
            >
              {t("tam xəbəri oxu")}
            </button>
          </div>
          <div className={styles.newsCardImg}>
            <Image src={blog.image} alt={blog.title} width={500} height={430} />
          </div>
        </div>
      ))}

      {reversedBlogs.length > blogsPerPage && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <GrFormPrevious />
          </button>
          <span className={styles.pageInfo}>
            {currentPage} / {totalPages}
          </span>
          <button
            className={styles.pageButton}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <MdNavigateNext />
          </button>
        </div>
      )}
    </section>
  );
}

export default NewsCards;
